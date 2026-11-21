import { SUPPLIER_CATALOGS, SupplierId } from '../data/suppliers';

export type PieceType =
  | 'gate'
  | 'railing'
  | 'sculpture-base'
  | 'sign-frame'
  | 'patio-cover';

export type MaterialType =
  | 'wrought'
  | 'steel'
  | 'aluminum'
  | 'copper'
  | 'stainless'
  | 'brass'
  | 'bronze'
  | 'corten'
  | 'glass'
  | 'wood'
  | 'other'
  | 'unknown';

export type FinishType =
  | 'natural'
  | 'matte-black'
  | 'bronze'
  | 'copper'
  | 'galvanized'
  | 'powder-coat'
  | 'brushed-satin'
  | 'hand-hammered'
  | 'oil-rubbed-bronze'
  | 'antique-patina'
  | 'verdigris'
  | 'clear-coat';

export type PowderColorType =
  | 'charcoal'
  | 'forest'
  | 'bronze-brown'
  | 'white';

export type PostStyleType = 'square' | 'round' | 'ornate';
export type FinialType = 'none' | 'ball' | 'spear' | 'scroll';
export type LeavesType = 'single' | 'double';
export type TopRailType = 'flat' | 'round' | 'cap';
export type SizeModeType = 'standard' | 'custom' | 'artistic';

export type ScrollStyleType =
  | 's-scroll'
  | 'c-scroll'
  | 'double-scroll'
  | 'scroll-leaf'
  | 'ribbon-scroll'
  | 'waterleaf-scroll';

export type InfillPatternType =
  | 'vertical-pickets'
  | 'horizontal-bars'
  | 'diamond-lattice'
  | 'basketweave'
  | 'sunburst'
  | 'solid-panel';

export type PicketStyleType =
  | 'square'
  | 'round'
  | 'twisted'
  | 'spearhead'
  | 'ball-top';

export const SCROLL_STYLES: Array<{ id: ScrollStyleType; label: string }> = [
  { id: 's-scroll', label: 'S-scroll' },
  { id: 'c-scroll', label: 'C-scroll' },
  { id: 'double-scroll', label: 'Double scroll' },
  { id: 'scroll-leaf', label: 'Scroll with leaf' },
  { id: 'ribbon-scroll', label: 'Ribbon scroll' },
  { id: 'waterleaf-scroll', label: 'Waterleaf scroll' },
];

export const INFILL_PATTERNS: Array<{ id: InfillPatternType; label: string }> = [
  { id: 'vertical-pickets', label: 'Vertical pickets' },
  { id: 'horizontal-bars', label: 'Horizontal bars' },
  { id: 'diamond-lattice', label: 'Diamond lattice' },
  { id: 'basketweave', label: 'Basketweave' },
  { id: 'sunburst', label: 'Sunburst' },
  { id: 'solid-panel', label: 'Solid panel' },
];

export const PICKET_FORM_STYLES: Array<{ id: PicketStyleType; label: string }> = [
  { id: 'square', label: 'Square' },
  { id: 'round', label: 'Round' },
  { id: 'twisted', label: 'Twisted' },
  { id: 'spearhead', label: 'Spearhead' },
  { id: 'ball-top', label: 'Ball-top' },
];

export type PartArea =
  | 'posts'
  | 'rails'
  | 'pickets'
  | 'panels'
  | 'scrolls'
  | 'base'
  | 'finials';

export const PART_AREA_LABELS: Record<PartArea, string> = {
  posts: 'Posts',
  rails: 'Rails & Frame',
  pickets: 'Pickets & Bars',
  panels: 'Panels & Relief',
  scrolls: 'Scrolls & Decorative',
  base: 'Base & Plinth',
  finials: 'Finials & Hardware',
};

export interface DecorState {
  scrolls: boolean;
  rings: boolean;
  leaves: boolean;
  medallion: boolean;
  rosettes: boolean;
  baskets: boolean;
  twistedBars: boolean;
  spearheadFinials: boolean;
  fleurDeLis: boolean;
  collars: boolean;
  leafSprays: boolean;
}

export const DECOR_ITEMS: Array<{ key: keyof DecorState; label: string }> = [
  { key: 'scrolls', label: 'Scrolls' },
  { key: 'rings', label: 'Rings' },
  { key: 'leaves', label: 'Leaf branch' },
  { key: 'medallion', label: 'Medallion' },
  { key: 'rosettes', label: 'Rosettes' },
  { key: 'baskets', label: 'Baskets' },
  { key: 'twistedBars', label: 'Twisted bars' },
  { key: 'spearheadFinials', label: 'Spearhead finials' },
  { key: 'fleurDeLis', label: 'Fleur-de-lis' },
  { key: 'collars', label: 'Collars' },
  { key: 'leafSprays', label: 'Leaf sprays' },
];

export interface SampleArtData {
  fileName: string;
  fileExt?: string;
  mimeType?: string;
  kind: 'photo' | 'svg' | 'dxf' | 'model3d' | 'reference';
  previewUrl?: string;
  downloadUrl?: string;
  needsConversion?: boolean;
  widthPx?: number;
  heightPx?: number;
  heightmapSize?: number;
  heightmap?: number[];
  showRelief3D: boolean;
  useOutlineCut: boolean;
  cutSegments?: Array<[number, number, number, number]>; // normalized [0..1] coords
}

export interface SignStroke {
  color: string;
  width: number;
  points: Array<[number, number]>; // normalized [0..1] x, y on sign panel
}

export interface SignPictureData {
  fileName: string;
  previewUrl?: string;
  downloadUrl?: string;
  needsConversion?: boolean;
  x: number; // 0..1 center X on panel
  y: number; // 0..1 center Y on panel
  scale: number; // 0.1..1.2
  cutSegments?: Array<[number, number, number, number]>;
}

export interface ConfiguratorState {
  piece: PieceType;
  sizeMode: SizeModeType;
  width: number;
  height: number;
  depth: number;
  style: string;
  scrollStyle: ScrollStyleType;
  infillPattern: InfillPatternType;
  picketStyle: PicketStyleType;
  supplier: SupplierId;
  supplierPicketId: string;
  supplierBarId: string;
  supplierPanelId: string;
  leaves: LeavesType;
  topRail: TopRailType;
  postStyle: PostStyleType;
  postSpacing: number;
  picketSpacing: number;
  finial: FinialType;
  decor: DecorState;
  material: MaterialType;
  customMaterialName: string;
  finish: FinishType;
  powder: PowderColorType;
  customColor: string | null;
  areaColors: Partial<Record<PartArea, string>>;
  sampleArt: SampleArtData | null;
  signText: string;
  signFont: string;
  signFontSize: number;
  signTextColor: string;
  signDrawColor: string;
  signDrawWidth: number;
  signStrokes: SignStroke[];
  signPicture: SignPictureData | null;
  turntable: boolean;
  simple: boolean;
}

export interface StandardSizePreset {
  label: string;
  width: number;
  height: number;
  depth?: number;
}

export interface PieceSpec {
  label: string;
  widthLabel: string;
  widthMin: number;
  widthMax: number;
  widthStep: number;
  widthDef: number;
  heightLabel: string;
  heightMin: number;
  heightMax: number;
  heightStep: number;
  heightDef: number;
  depth: boolean;
  depthLabel?: string;
  depthMin?: number;
  depthMax?: number;
  depthStep?: number;
  depthDef?: number;
  styles: Array<[string, string]>;
  standardSizes: StandardSizePreset[];
  topRail: boolean;
  post: boolean;
  postSpacing: boolean;
  picketSpacing: boolean;
  leaves: boolean;
  qType: string;
}

export const PIECES: Record<PieceType, PieceSpec> = {
  gate: {
    label: 'Gate',
    widthLabel: 'Width',
    widthMin: 4,
    widthMax: 16,
    widthStep: 0.5,
    widthDef: 10,
    heightLabel: 'Height',
    heightMin: 4,
    heightMax: 8,
    heightStep: 0.5,
    heightDef: 6,
    depth: false,
    styles: [
      ['vertical', 'Vertical pickets'],
      ['horizontal', 'Horizontal bars'],
      ['solid', 'Solid panel'],
      ['scroll', 'Scrollwork'],
    ],
    standardSizes: [
      { label: '4 × 6 ft Walk Gate', width: 4, height: 6 },
      { label: '6 × 6 ft Garden Gate', width: 6, height: 6 },
      { label: '10 × 6 ft Driveway Gate', width: 10, height: 6 },
      { label: '12 × 7 ft Double Entry', width: 12, height: 7 },
    ],
    topRail: false,
    post: true,
    postSpacing: false,
    picketSpacing: true,
    leaves: true,
    qType: 'Custom Gate',
  },
  railing: {
    label: 'Railing',
    widthLabel: 'Run length',
    widthMin: 4,
    widthMax: 40,
    widthStep: 1,
    widthDef: 12,
    heightLabel: 'Height',
    heightMin: 2.5,
    heightMax: 4.5,
    heightStep: 0.25,
    heightDef: 3.5,
    depth: false,
    styles: [
      ['vertical', 'Vertical pickets'],
      ['horizontal', 'Horizontal bars'],
      ['solid', 'Solid panel'],
      ['scroll', 'Scrollwork'],
    ],
    standardSizes: [
      { label: '8 × 3 ft Step Run', width: 8, height: 3 },
      { label: '12 × 3.5 ft Deck Rail', width: 12, height: 3.5 },
      { label: '20 × 3.5 ft Balcony', width: 20, height: 3.5 },
      { label: '32 × 3.5 ft Hillside', width: 32, height: 3.5 },
    ],
    topRail: true,
    post: true,
    postSpacing: true,
    picketSpacing: true,
    leaves: false,
    qType: 'Railing',
  },
  'sculpture-base': {
    label: 'Sculpture Base',
    widthLabel: 'Base width',
    widthMin: 1,
    widthMax: 6,
    widthStep: 0.25,
    widthDef: 2,
    heightLabel: 'Base height',
    heightMin: 1,
    heightMax: 6,
    heightStep: 0.25,
    heightDef: 3,
    depth: true,
    depthLabel: 'Base depth',
    depthMin: 1,
    depthMax: 6,
    depthStep: 0.25,
    depthDef: 2,
    styles: [
      ['plinth', 'Square plinth'],
      ['tapered', 'Tapered plinth'],
      ['column', 'Round column'],
    ],
    standardSizes: [
      { label: '1.5 × 1.5 × 3 ft Pedestal', width: 1.5, height: 3, depth: 1.5 },
      { label: '2 × 2 × 3 ft Gallery Plinth', width: 2, height: 3, depth: 2 },
      { label: '3 × 3 × 4 ft Plaza Base', width: 3, height: 4, depth: 3 },
      { label: '4 × 4 × 5 ft Monumental', width: 4, height: 5, depth: 4 },
    ],
    topRail: false,
    post: false,
    postSpacing: false,
    picketSpacing: false,
    leaves: false,
    qType: 'Sculpture',
  },
  'sign-frame': {
    label: 'Sign Frame',
    widthLabel: 'Panel width',
    widthMin: 2,
    widthMax: 12,
    widthStep: 0.5,
    widthDef: 6,
    heightLabel: 'Height',
    heightMin: 3,
    heightMax: 10,
    heightStep: 0.5,
    heightDef: 5,
    depth: false,
    styles: [
      ['rect', 'Rectangular'],
      ['arch', 'Arched top'],
    ],
    standardSizes: [
      { label: '4 × 4 ft Wayfinding', width: 4, height: 4 },
      { label: '6 × 5 ft Entry Sign', width: 6, height: 5 },
      { label: '8 × 6 ft Monument', width: 8, height: 6 },
      { label: '10 × 7 ft Commercial', width: 10, height: 7 },
    ],
    topRail: false,
    post: true,
    postSpacing: false,
    picketSpacing: false,
    leaves: false,
    qType: 'Monument Sign',
  },
  'patio-cover': {
    label: 'Patio Cover Frame',
    widthLabel: 'Span',
    widthMin: 8,
    widthMax: 24,
    widthStep: 1,
    widthDef: 12,
    heightLabel: 'Height',
    heightMin: 7,
    heightMax: 12,
    heightStep: 0.5,
    heightDef: 9,
    depth: true,
    depthLabel: 'Depth',
    depthMin: 6,
    depthMax: 20,
    depthStep: 1,
    depthDef: 10,
    styles: [
      ['slats', 'Open slats'],
      ['solid', 'Solid roof'],
    ],
    standardSizes: [
      { label: '10 × 8 × 8.5 ft Bistro', width: 10, height: 8.5, depth: 8 },
      { label: '12 × 10 × 9 ft Patio', width: 12, height: 9, depth: 10 },
      { label: '16 × 12 × 9.5 ft Lounge', width: 16, height: 9.5, depth: 12 },
      { label: '20 × 14 × 10 ft Pavilion', width: 20, height: 10, depth: 14 },
    ],
    topRail: false,
    post: true,
    postSpacing: false,
    picketSpacing: false,
    leaves: false,
    qType: 'Patio Cover',
  },
};

export interface MaterialSpec {
  name: string;
  label: string;
  color: number;
  roughness: number;
  metalness: number;
  texture: 'hammered' | 'brushed' | 'spangle' | 'wood' | 'corten' | 'glass';
  isGlass?: boolean;
  isWood?: boolean;
}

export const MATERIALS: Record<MaterialType, MaterialSpec> = {
  wrought: {
    name: 'wrought iron',
    label: 'Wrought iron',
    color: 0x2b2b2e,
    roughness: 0.55,
    metalness: 0.8,
    texture: 'hammered',
  },
  steel: {
    name: 'steel',
    label: 'Steel',
    color: 0x8a8f98,
    roughness: 0.35,
    metalness: 0.9,
    texture: 'brushed',
  },
  aluminum: {
    name: 'aluminum',
    label: 'Aluminum',
    color: 0xc8ccd2,
    roughness: 0.28,
    metalness: 0.95,
    texture: 'brushed',
  },
  copper: {
    name: 'copper',
    label: 'Copper',
    color: 0xc47338,
    roughness: 0.26,
    metalness: 0.98,
    texture: 'brushed',
  },
  stainless: {
    name: 'stainless steel',
    label: 'Stainless steel',
    color: 0xd4d9df,
    roughness: 0.2,
    metalness: 0.98,
    texture: 'brushed',
  },
  brass: {
    name: 'brass',
    label: 'Brass',
    color: 0xc6a34a,
    roughness: 0.26,
    metalness: 0.96,
    texture: 'brushed',
  },
  bronze: {
    name: 'bronze',
    label: 'Bronze',
    color: 0x8c6a3f,
    roughness: 0.34,
    metalness: 0.93,
    texture: 'hammered',
  },
  corten: {
    name: 'corten steel',
    label: 'Corten steel',
    color: 0x8f4725,
    roughness: 0.85,
    metalness: 0.32,
    texture: 'corten',
  },
  glass: {
    name: 'glass',
    label: 'Glass',
    color: 0xaad4e6,
    roughness: 0.08,
    metalness: 0.05,
    texture: 'glass',
    isGlass: true,
  },
  wood: {
    name: 'wood',
    label: 'Wood',
    color: 0x7c4f2c,
    roughness: 0.72,
    metalness: 0.0,
    texture: 'wood',
    isWood: true,
  },
  other: {
    name: 'other / foreign material',
    label: 'Other / foreign material',
    color: 0x7d7a74,
    roughness: 0.48,
    metalness: 0.65,
    texture: 'brushed',
  },
  unknown: {
    name: 'unknown — not sure yet',
    label: 'Unknown — not sure yet',
    color: 0x6f747d,
    roughness: 0.48,
    metalness: 0.72,
    texture: 'brushed',
  },
};

export interface FinishSpec {
  name: string;
  label: string;
  color: number | null;
  swatch: string;
  roughness: number;
  metalness: number;
  texture?: 'hammered' | 'brushed' | 'spangle';
}

export const FINISHES: Record<FinishType, FinishSpec> = {
  natural: {
    name: 'natural material finish',
    label: 'Natural / material finish',
    color: null,
    swatch: '#8a8f98',
    roughness: 0.38,
    metalness: 0.85,
  },
  'matte-black': {
    name: 'matte black',
    label: 'Matte black',
    color: 0x161619,
    swatch: '#1c1c20',
    roughness: 0.75,
    metalness: 0.55,
  },
  bronze: {
    name: 'bronze',
    label: 'Bronze',
    color: 0x8c6a3f,
    swatch: '#8c6a3f',
    roughness: 0.35,
    metalness: 0.95,
  },
  copper: {
    name: 'copper',
    label: 'Copper',
    color: 0xb87333,
    swatch: '#b87333',
    roughness: 0.28,
    metalness: 1.0,
  },
  galvanized: {
    name: 'galvanized',
    label: 'Galvanized',
    color: 0x9aa0a3,
    swatch: '#9aa0a3',
    roughness: 0.55,
    metalness: 0.85,
    texture: 'spangle',
  },
  'powder-coat': {
    name: 'powder-coat',
    label: 'Powder-coat',
    color: null,
    swatch: '#4a5568',
    roughness: 0.45,
    metalness: 0.28,
  },
  'brushed-satin': {
    name: 'brushed satin',
    label: 'Brushed satin',
    color: null,
    swatch: '#b6bcc4',
    roughness: 0.32,
    metalness: 0.92,
    texture: 'brushed',
  },
  'hand-hammered': {
    name: 'hand-hammered',
    label: 'Hand-hammered',
    color: null,
    swatch: '#4c4e52',
    roughness: 0.48,
    metalness: 0.86,
    texture: 'hammered',
  },
  'oil-rubbed-bronze': {
    name: 'oil-rubbed bronze',
    label: 'Oil-rubbed bronze',
    color: 0x453224,
    swatch: '#453224',
    roughness: 0.42,
    metalness: 0.78,
    texture: 'brushed',
  },
  'antique-patina': {
    name: 'antique patina',
    label: 'Antique patina',
    color: 0x624d36,
    swatch: '#624d36',
    roughness: 0.58,
    metalness: 0.68,
    texture: 'hammered',
  },
  verdigris: {
    name: 'verdigris patina',
    label: 'Verdigris patina',
    color: 0x437c71,
    swatch: '#437c71',
    roughness: 0.68,
    metalness: 0.35,
    texture: 'hammered',
  },
  'clear-coat': {
    name: 'clear-coated bare',
    label: 'Clear-coated bare',
    color: null,
    swatch: '#9da3ab',
    roughness: 0.22,
    metalness: 0.92,
  },
};

export const POWDERS: Record<
  PowderColorType,
  { name: string; label: string; color: number; swatch: string }
> = {
  charcoal: {
    name: 'charcoal',
    label: 'Charcoal',
    color: 0x2b2b2e,
    swatch: '#2b2b2e',
  },
  forest: {
    name: 'forest green',
    label: 'Forest green',
    color: 0x2e4a32,
    swatch: '#2e4a32',
  },
  'bronze-brown': {
    name: 'bronze brown',
    label: 'Bronze brown',
    color: 0x6b4a2f,
    swatch: '#6b4a2f',
  },
  white: {
    name: 'white',
    label: 'White',
    color: 0xe8e6e0,
    swatch: '#e8e6e0',
  },
};

export const CUSTOM_COLOR_SWATCHES: Array<{ label: string; hex: string }> = [
  { label: 'Forge Black', hex: '#18181b' },
  { label: 'Graphite', hex: '#383b42' },
  { label: 'Brushed Steel', hex: '#88909c' },
  { label: 'Silver Satin', hex: '#c7ccd1' },
  { label: 'Oil Bronze', hex: '#4a3525' },
  { label: 'Antique Bronze', hex: '#8c6a3f' },
  { label: 'Burnished Copper', hex: '#b87333' },
  { label: 'Aged Gold', hex: '#c9933b' },
  { label: 'Corten Rust', hex: '#8b4528' },
  { label: 'Oxblood Red', hex: '#6e2620' },
  { label: 'Desert Sage', hex: '#5f6f58' },
  { label: 'Forest Pine', hex: '#2e4a32' },
  { label: 'Verdigris', hex: '#3f766d' },
  { label: 'Slate Blue', hex: '#3a536b' },
  { label: 'Navy Forge', hex: '#1e2f47' },
  { label: 'Warm Cream', hex: '#e8e3d6' },
];

export const INITIAL_CONFIG: ConfiguratorState = {
  piece: 'gate',
  sizeMode: 'standard',
  width: 10,
  height: 6,
  depth: 8,
  style: 'vertical',
  scrollStyle: 's-scroll',
  infillPattern: 'vertical-pickets',
  picketStyle: 'square',
  supplier: 'king',
  supplierPicketId: 'king-0.5-solid',
  supplierBarId: 'king-bar-2x1',
  supplierPanelId: 'king-panel-6x8',
  leaves: 'single',
  topRail: 'flat',
  postStyle: 'square',
  postSpacing: 6,
  picketSpacing: 4,
  finial: 'none',
  decor: {
    scrolls: false,
    rings: false,
    leaves: false,
    medallion: false,
    rosettes: false,
    baskets: false,
    twistedBars: false,
    spearheadFinials: false,
    fleurDeLis: false,
    collars: false,
    leafSprays: false,
  },
  material: 'wrought',
  customMaterialName: '',
  finish: 'matte-black',
  powder: 'charcoal',
  customColor: null,
  areaColors: {},
  sampleArt: null,
  signText: 'YOUR NAME HERE',
  signFont: "'Oswald', sans-serif",
  signFontSize: 42,
  signTextColor: '#f2efe8',
  signDrawColor: '#e8a317',
  signDrawWidth: 4,
  signStrokes: [],
  signPicture: null,
  turntable: true,
  simple: false,
};

export function getActiveSupplierSpecs(state: ConfiguratorState) {
  const cat = SUPPLIER_CATALOGS[state.supplier] || SUPPLIER_CATALOGS.king;
  const picketOpt =
    cat.pickets.find((p) => p.id === state.supplierPicketId) || cat.pickets[0];
  const barOpt =
    cat.bars.find((b) => b.id === state.supplierBarId) || cat.bars[0];
  const panelOpt =
    cat.panels.find((p) => p.id === state.supplierPanelId) || cat.panels[0];
  return { catalog: cat, picketOpt, barOpt, panelOpt };
}

export function formatMaterialLabel(state: ConfiguratorState): string {
  if (state.material === 'other') {
    const custom = state.customMaterialName.trim();
    return custom ? `Other (${custom})` : 'Other / foreign material';
  }
  return MATERIALS[state.material].name;
}

export function formatFeetInches(v: number): string {
  const safe = Number.isFinite(v) && v > 0 ? v : 1;
  let ft = Math.floor(safe);
  let inch = Math.round((safe - ft) * 12);
  if (inch === 12) {
    ft += 1;
    inch = 0;
  }
  return inch ? `${ft} ft ${inch} in` : `${ft} ft`;
}

export function dimsText(state: ConfiguratorState): string {
  const modeTag =
    state.sizeMode === 'artistic'
      ? ' (artistic freeform)'
      : state.sizeMode === 'custom'
        ? ' (custom)'
        : '';
  if (state.piece === 'railing') {
    return `${formatFeetInches(state.width)} long × ${formatFeetInches(state.height)} high${modeTag}`;
  }
  if (state.piece === 'patio-cover') {
    return `${formatFeetInches(state.width)} span × ${formatFeetInches(state.depth)} deep × ${formatFeetInches(state.height)} high${modeTag}`;
  }
  if (state.piece === 'sculpture-base') {
    return `${formatFeetInches(state.width)} wide × ${formatFeetInches(state.depth)} deep × ${formatFeetInches(state.height)} high${modeTag}`;
  }
  return `${formatFeetInches(state.width)} wide × ${formatFeetInches(state.height)} high${modeTag}`;
}

export function describeConfig(state: ConfiguratorState): string {
  const pieceSpec = PIECES[state.piece];
  const styleMatch = pieceSpec.styles.find((s) => s[0] === state.style);
  const styleName = styleMatch ? styleMatch[1] : state.style;
  const { catalog, picketOpt, barOpt, panelOpt } = getActiveSupplierSpecs(state);

  const parts: string[] = [pieceSpec.label, dimsText(state), styleName];

  if (state.piece === 'gate' || state.piece === 'railing') {
    const infillLabel =
      INFILL_PATTERNS.find((p) => p.id === state.infillPattern)?.label ||
      state.infillPattern;
    const scrollLabel =
      SCROLL_STYLES.find((s) => s.id === state.scrollStyle)?.label ||
      state.scrollStyle;
    const picketLabel =
      PICKET_FORM_STYLES.find((p) => p.id === state.picketStyle)?.label ||
      state.picketStyle;
    if (state.style === 'scroll' || state.decor.scrolls) {
      parts.push(`${scrollLabel}`);
    }
    if (state.infillPattern !== 'vertical-pickets' || state.style === 'vertical') {
      parts.push(`${infillLabel} (${picketLabel} pickets @ ${state.picketSpacing}" O.C.)`);
    }
    const sizeSpec =
      state.style === 'solid' || state.infillPattern === 'solid-panel'
        ? panelOpt.label
        : state.style === 'horizontal' || state.infillPattern === 'horizontal-bars'
          ? barOpt.label
          : picketOpt.label;
    parts.push(`supplier ${catalog.name}: ${sizeSpec}`);
  }

  if (state.piece === 'gate' && state.leaves === 'double') {
    parts.push('double leaves');
  }
  if (state.piece === 'railing') {
    parts.push(
      state.topRail === 'round'
        ? 'round tube top rail'
        : state.topRail === 'cap'
          ? 'wide cap top rail'
          : 'flat bar top rail',
    );
    parts.push(`posts every ${state.postSpacing} ft`);
  }
  if (pieceSpec.post) {
    parts.push(`${state.postStyle} posts`);
  }
  if (state.finial !== 'none') {
    parts.push(`${state.finial} finials`);
  }

  if (state.piece === 'sign-frame') {
    if (state.signText.trim()) {
      parts.push(`lettering "${state.signText.trim()}" (${state.signFont.split(',')[0].replace(/'/g, '')}, ${state.signFontSize}px)`);
    }
    if (state.signStrokes.length > 0) {
      parts.push(`freehand drawing (${state.signStrokes.length} strokes)`);
    }
    if (state.signPicture) {
      parts.push(`sign artwork (${state.signPicture.fileName})`);
    }
  }

  const decor = DECOR_ITEMS.filter((item) => state.decor[item.key]).map(
    (item) => item.label.toLowerCase(),
  );
  if (decor.length) {
    parts.push(`decorative ${decor.join(', ')}`);
  }

  const finishName = state.customColor
    ? `custom color (${state.customColor.toUpperCase()}, ${FINISHES[state.finish].name})`
    : state.finish === 'powder-coat'
      ? `powder-coat (${POWDERS[state.powder].name})`
      : FINISHES[state.finish].name;
  parts.push(`${finishName} on ${formatMaterialLabel(state)}`);

  const areaKeys = Object.keys(state.areaColors) as PartArea[];
  if (areaKeys.length > 0) {
    const areaSummary = areaKeys
      .map(
        (k) =>
          `${PART_AREA_LABELS[k]}: ${(state.areaColors[k] || '').toUpperCase()}`,
      )
      .join(', ');
    parts.push(`per-area colors (${areaSummary})`);
  }

  if (state.sampleArt) {
    parts.push(`sample art attached (${state.sampleArt.fileName})`);
  }

  return parts.join(' — ');
}
