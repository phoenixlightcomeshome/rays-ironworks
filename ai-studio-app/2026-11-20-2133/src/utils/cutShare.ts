import {
  ConfiguratorState,
  DECOR_ITEMS,
  INITIAL_CONFIG,
  PIECES,
  describeConfig,
  formatMaterialLabel,
  getActiveSupplierSpecs,
} from '../types/configurator';
import { buildMaterialsList } from './blueprintRenderer';

export type CutShareFormat = 'dxf' | 'stl' | 'pdf';

export interface CutSharePayload {
  v: 1;
  format: CutShareFormat;
  config: Partial<ConfiguratorState>;
}

function toBase64Url(bytes: Uint8Array): string {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i]);
  }
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str: string): Uint8Array {
  const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/') + pad;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    out[i] = bin.charCodeAt(i);
  }
  return out;
}

/**
 * Strips bulky browser dataURLs/heightmaps before encoding into a shareable URL,
 * while preserving geometry, cut contours, sign lettering, and freehand drawing vectors.
 */
function compactConfigForUrl(state: ConfiguratorState): Partial<ConfiguratorState> {
  const { sampleArt, signPicture, ...rest } = state;
  const compact: Partial<ConfiguratorState> = { ...rest };
  if (sampleArt) {
    compact.sampleArt = {
      fileName: sampleArt.fileName,
      kind: sampleArt.kind,
      fileExt: sampleArt.fileExt,
      showRelief3D: false,
      useOutlineCut: sampleArt.useOutlineCut,
      cutSegments: sampleArt.cutSegments?.slice(0, 180),
      needsConversion: sampleArt.needsConversion,
    };
  }
  if (signPicture) {
    compact.signPicture = {
      fileName: signPicture.fileName,
      x: signPicture.x,
      y: signPicture.y,
      scale: signPicture.scale,
      cutSegments: signPicture.cutSegments?.slice(0, 180),
    };
  }
  return compact;
}

export async function encodeCutShareUrl(
  state: ConfiguratorState,
  format: CutShareFormat,
): Promise<string> {
  const payload: CutSharePayload = {
    v: 1,
    format,
    config: compactConfigForUrl(state),
  };
  const json = JSON.stringify(payload);
  const rawBytes = new TextEncoder().encode(json);

  let prefix = 'u_';
  let encodedBytes = rawBytes;
  if (typeof CompressionStream !== 'undefined') {
    try {
      const cs = new CompressionStream('deflate-raw');
      const writer = cs.writable.getWriter();
      writer.write(rawBytes);
      writer.close();
      const buf = await new Response(cs.readable).arrayBuffer();
      const compressed = new Uint8Array(buf);
      if (compressed.length < rawBytes.length) {
        prefix = 'z_';
        encodedBytes = compressed;
      }
    } catch {
      // fall back to uncompressed
    }
  }

  const base = `${window.location.origin}${window.location.pathname}`;
  return `${base}#cut=${prefix}${toBase64Url(encodedBytes)}`;
}

export async function decodeCutShareHash(
  hashStr: string,
): Promise<{ format: CutShareFormat; config: ConfiguratorState } | null> {
  const match = hashStr.match(/#cut=([uz]_[A-Za-z0-9_-]+)/);
  if (!match) return null;
  try {
    const token = match[1];
    const mode = token.slice(0, 2);
    const bytes = fromBase64Url(token.slice(2));
    let jsonBytes = bytes;
    if (mode === 'z_' && typeof DecompressionStream !== 'undefined') {
      const ds = new DecompressionStream('deflate-raw');
      const writer = ds.writable.getWriter();
      writer.write(new Uint8Array(bytes));
      writer.close();
      const buf = await new Response(ds.readable).arrayBuffer();
      jsonBytes = new Uint8Array(buf);
    }
    const jsonStr = new TextDecoder().decode(jsonBytes);
    const parsed = JSON.parse(jsonStr) as CutSharePayload;
    if (!parsed || !parsed.config) return null;

    const merged: ConfiguratorState = {
      ...INITIAL_CONFIG,
      ...parsed.config,
      decor: {
        ...INITIAL_CONFIG.decor,
        ...(parsed.config.decor || {}),
      },
      areaColors: {
        ...(parsed.config.areaColors || {}),
      },
      signStrokes: parsed.config.signStrokes || [],
    };
    return {
      format: parsed.format || 'dxf',
      config: merged,
    };
  } catch {
    return null;
  }
}

/**
 * Generates a valid single-page PDF cut-sheet & shop specification document in pure TypeScript.
 */
export function generateCutSpecPdf(state: ConfiguratorState): Blob {
  const { bom, finishSpec, thicknessCallouts } = buildMaterialsList(state);
  const { catalog } = getActiveSupplierSpecs(state);
  const activeDecor = DECOR_ITEMS.filter((d) => state.decor[d.key]).map(
    (d) => d.label,
  );

  const lines: string[] = [
    "RAY'S IRONWORKS — CUT & SHOP SPECIFICATION",
    `Piece: ${PIECES[state.piece].label} (${state.sizeMode} sizing)`,
    `Dimensions: ${state.width} ft W x ${state.height} ft H${PIECES[state.piece].depth ? ` x ${state.depth} ft D` : ''}`,
    `Material & Finish: ${finishSpec}`,
    `Material Base: ${formatMaterialLabel(state)}`,
    `Supplier Catalog: ${catalog.name} (${catalog.domain})`,
    `Summary: ${describeConfig(state)}`,
    '',
    'THICKNESS CALLOUTS:',
    ...thicknessCallouts.map((c) => `  - ${c.part}: ${c.thickness}`),
    '',
    'BILL OF MATERIALS:',
    ...bom.map((b) => `  - ${b.part}: ${b.spec} | Qty ${b.qty} | Cut ${b.cutLength}`),
    '',
    `Decorative Catalog Items: ${activeDecor.length ? activeDecor.join(', ') : 'None'}`,
  ];

  if (state.piece === 'sign-frame') {
    lines.push(
      `Sign Lettering: "${state.signText}" (${state.signFont}, ${state.signFontSize}px, ${state.signTextColor})`,
      `Freehand Strokes: ${state.signStrokes.length} paths`,
      `Sign Artwork File: ${state.signPicture ? state.signPicture.fileName : 'None'}`,
    );
  }
  lines.push(
    '',
    "Contact: Ray's Ironworks | 424-394-9271 | raysironworks101@gmail.com",
  );

  const esc = (s: string) =>
    s
      .replace(/[^\x20-\x7e]/g, ' ')
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');

  // Wrap long lines cleanly
  const wrapped: string[] = [];
  lines.forEach((raw) => {
    if (raw.length <= 86) {
      wrapped.push(raw);
    } else {
      let idx = 0;
      while (idx < raw.length) {
        wrapped.push(raw.slice(idx, idx + 86));
        idx += 86;
      }
    }
  });

  const textOps = ['BT', '/F1 10 Tf', '42 745 Td', '14 TL'];
  wrapped.slice(0, 48).forEach((ln, i) => {
    textOps.push(i === 0 ? `(${esc(ln)}) Tj` : `T* (${esc(ln)}) Tj`);
  });
  textOps.push('ET');
  const stream = textOps.join('\n');

  const objs: string[] = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [];
  objs.forEach((o) => {
    offsets.push(pdf.length);
    pdf += o;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((off) => {
    pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  return new Blob([pdf], { type: 'application/pdf' });
}
