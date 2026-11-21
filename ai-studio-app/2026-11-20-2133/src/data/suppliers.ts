export type SupplierId = 'ims' | 'king' | 'coast' | 'pdm' | 'mcnichols';

export interface SupplierSizeOption {
  id: string;
  label: string;
  inches: number; // nominal primary cross-section or sheet thickness in inches
  specText: string;
  patternHint?: 'perforated-staggered' | 'perforated-straight' | 'expanded' | 'grating' | 'mesh' | 'solid';
}

export interface SupplierCatalog {
  id: SupplierId;
  name: string;
  domain: string;
  catalogNote: string;
  pickets: SupplierSizeOption[];
  bars: SupplierSizeOption[];
  panels: SupplierSizeOption[];
}

export const SUPPLIER_ORDER: SupplierId[] = [
  'ims',
  'king',
  'coast',
  'pdm',
  'mcnichols',
];

export const SUPPLIER_CATALOGS: Record<SupplierId, SupplierCatalog> = {
  ims: {
    id: 'ims',
    name: 'Industrial Metal Supply',
    domain: 'industrialmetalsupply.com',
    catalogNote:
      'Published hot-rolled steel square tube (example: 1/2" × 1/2" × 16 ga, A513, lengths 5\'/10\'/20\'/24\'). IMS published list covers square tube sizes below; panels use shop thickness.',
    pickets: [
      { id: 'ims-0.5', label: '1/2" × 1/2" hot-rolled steel sq tube — Industrial Metal Supply', inches: 0.5, specText: '1/2" × 1/2" × 16 ga A513 sq tube (5\'/10\'/20\'/24\') — Industrial Metal Supply' },
      { id: 'ims-0.625', label: '5/8" hot-rolled steel sq tube — Industrial Metal Supply', inches: 0.625, specText: '5/8" hot-rolled steel sq tube A513 — Industrial Metal Supply' },
      { id: 'ims-0.75', label: '3/4" hot-rolled steel sq tube — Industrial Metal Supply', inches: 0.75, specText: '3/4" hot-rolled steel sq tube A513 — Industrial Metal Supply' },
      { id: 'ims-0.875', label: '7/8" hot-rolled steel sq tube — Industrial Metal Supply', inches: 0.875, specText: '7/8" hot-rolled steel sq tube A513 — Industrial Metal Supply' },
      { id: 'ims-1', label: '1" hot-rolled steel sq tube — Industrial Metal Supply', inches: 1.0, specText: '1" hot-rolled steel sq tube A513 — Industrial Metal Supply' },
    ],
    bars: [
      { id: 'ims-bar-0.5', label: '1/2" × 1/2" × 16 ga A513 sq tube — Industrial Metal Supply', inches: 0.5, specText: '1/2" × 1/2" × 16 ga A513 sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-0.75', label: '3/4" hot-rolled steel sq tube — Industrial Metal Supply', inches: 0.75, specText: '3/4" hot-rolled steel sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-1', label: '1" hot-rolled steel sq tube — Industrial Metal Supply', inches: 1.0, specText: '1" hot-rolled steel sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-1.25', label: '1-1/4" hot-rolled steel sq tube — Industrial Metal Supply', inches: 1.25, specText: '1-1/4" hot-rolled steel sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-1.5', label: '1-1/2" hot-rolled steel sq tube — Industrial Metal Supply', inches: 1.5, specText: '1-1/2" hot-rolled steel sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-1.75', label: '1-3/4" hot-rolled steel sq tube — Industrial Metal Supply', inches: 1.75, specText: '1-3/4" hot-rolled steel sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-2', label: '2" hot-rolled steel sq tube — Industrial Metal Supply', inches: 2.0, specText: '2" hot-rolled steel sq tube — Industrial Metal Supply' },
      { id: 'ims-bar-3', label: '3" hot-rolled steel sq tube — Industrial Metal Supply', inches: 3.0, specText: '3" hot-rolled steel sq tube — Industrial Metal Supply' },
    ],
    panels: [
      { id: 'ims-panel-std', label: 'Shop sheet paired with Industrial Metal Supply tube frame', inches: 0.075, specText: 'Hot-rolled frame (Industrial Metal Supply tube sizes 1/2"–3") + shop sheet', patternHint: 'solid' },
    ],
  },
  king: {
    id: 'king',
    name: 'King Architectural Metals',
    domain: 'kingmetals.com',
    catalogNote:
      'Published pickets, twisted balusters, forged 1/2" solid bar, 3/4" 16 ga pickets, and 2"×1" 14 ga 8\' tubing.',
    pickets: [
      { id: 'king-0.5-solid', label: '1/2" square solid picket — King Architectural', inches: 0.5, specText: '1/2" square solid picket — King Architectural' },
      { id: 'king-0.75-tube', label: '3/4" square tube 16 ga picket (20 per 6\'×8\' panel) — King Architectural', inches: 0.75, specText: '3/4" sq tube 16 ga picket (20 per 6\'×8\' panel) — King Architectural' },
      { id: 'king-0.5-twisted', label: '1/2" square fully twisted baluster (40" H) — King Architectural', inches: 0.5, specText: '1/2" square fully twisted baluster 40" H — King Architectural' },
      { id: 'king-0.5-forged', label: '1/2" square solid bar stock (forged) — King Architectural', inches: 0.5, specText: '1/2" square solid forged bar stock — King Architectural' },
    ],
    bars: [
      { id: 'king-bar-2x1', label: '2" × 1" rectangular tubing 14 ga, 8\' — King Architectural', inches: 2.0, specText: '2" × 1" rect tubing 14 ga, 8\' — King Architectural' },
      { id: 'king-bar-1.5', label: '1-1/2" panel rail — King Architectural', inches: 1.5, specText: '1-1/2" commercial rail — King Architectural' },
      { id: 'king-bar-0.5', label: '1/2" square solid bar stock — King Architectural', inches: 0.5, specText: '1/2" square solid bar stock — King Architectural' },
    ],
    panels: [
      { id: 'king-panel-6x8', label: '6\' × 8\' flat-top commercial panel (3/4" 16 ga pickets, 1-1/2" rails) — King Architectural', inches: 0.75, specText: '6\'×8\' flat-top commercial panel (20 × 3/4" 16 ga pickets, 1-1/2" rails) — King Architectural', patternHint: 'solid' },
    ],
  },
  coast: {
    id: 'coast',
    name: 'Coast Aluminum',
    domain: 'coastaluminum.com',
    catalogNote:
      'Published aluminum square tube 6061-T6 / 6063-T52 (20–24 ft lengths, sizes up to 6" and 8") and aluminum sheet (.032" and .040", 48" × 144").',
    pickets: [
      { id: 'coast-tube-6', label: '6.000" × 0.250" wall aluminum sq tube (6061-T6 / 6063-T52, 20–24 ft) — Coast Aluminum', inches: 6.0, specText: '6.000" × 0.250" wall 6061-T6 / 6063-T52 sq tube (20–24 ft) — Coast Aluminum' },
      { id: 'coast-tube-8', label: '8.000" × 0.188" wall aluminum sq tube (6061-T6 / 6063-T52, 20–24 ft) — Coast Aluminum', inches: 8.0, specText: '8.000" × 0.188" wall 6061-T6 / 6063-T52 sq tube (20–24 ft) — Coast Aluminum' },
    ],
    bars: [
      { id: 'coast-bar-6', label: '6.000" × 0.250" wall aluminum sq tube (20–24 ft) — Coast Aluminum', inches: 6.0, specText: '6.000" × 0.250" wall 6061-T6 / 6063-T52 tube — Coast Aluminum' },
      { id: 'coast-bar-8', label: '8.000" × 0.188" wall aluminum sq tube (20–24 ft) — Coast Aluminum', inches: 8.0, specText: '8.000" × 0.188" wall 6061-T6 / 6063-T52 tube — Coast Aluminum' },
    ],
    panels: [
      { id: 'coast-sheet-032', label: '.032" aluminum sheet, 48" × 144" — Coast Aluminum', inches: 0.032, specText: '.032" aluminum sheet, 48" × 144" — Coast Aluminum', patternHint: 'solid' },
      { id: 'coast-sheet-040', label: '.040" aluminum sheet, 48" × 144" — Coast Aluminum', inches: 0.04, specText: '.040" aluminum sheet, 48" × 144" — Coast Aluminum', patternHint: 'solid' },
    ],
  },
  pdm: {
    id: 'pdm',
    name: 'PDM Steel Service Centers',
    domain: 'pdmsteel.com',
    catalogNote:
      'Central & northern CA service centers. Publishes tubing types/grades/lengths (ASTM A-500 A/B/C & ASTM 1085, 20\'–60\' lengths) and A516/70 plate up to 6" rather than a picket size table.',
    pickets: [
      { id: 'pdm-1-16ga', label: '1" square tube 16 ga × 10 ft (ST1110/16) — PDM Steel', inches: 1.0, specText: '1" square tube 16 ga × 10 ft (ST1110/16) — PDM Steel' },
      { id: 'pdm-orn-tube', label: 'Ornamental sq/rect/round tube (ASTM A-500 A/B/C & 1085, 20\'–60\' lengths) — PDM Steel', inches: 1.0, specText: 'Ornamental tubing ASTM A-500 / 1085 (20\'–60\' lengths) — PDM Steel' },
    ],
    bars: [
      { id: 'pdm-bar-1', label: '1" square tube 16 ga × 10 ft (ST1110/16) — PDM Steel', inches: 1.0, specText: '1" square tube 16 ga × 10 ft (ST1110/16) — PDM Steel' },
      { id: 'pdm-bar-astm', label: 'Pipe & ornamental tubing ASTM A-500 / ASTM 1085 — PDM Steel', inches: 1.25, specText: 'Pipe & tubing ASTM A-500 A/B/C & ASTM 1085 — PDM Steel' },
    ],
    panels: [
      { id: 'pdm-plate-a516', label: 'Plate A516/70 (up to 6" thick) — PDM Steel', inches: 0.25, specText: 'Plate A516/70 (up to 6" thick) — PDM Steel', patternHint: 'solid' },
    ],
  },
  mcnichols: {
    id: 'mcnichols',
    name: 'McNichols',
    domain: 'mcnichols.com',
    catalogNote:
      'Specializes in perforated metal, expanded metal, bar grating, and wire mesh panels/infill (expanded metal sheets 48"×96", 48"×120", 60"×120").',
    pickets: [
      { id: 'mc-infill-only', label: 'Panel & infill catalog only (see Solid Panel / Infill dropdowns) — McNichols', inches: 0.75, specText: 'Infill panel catalog — McNichols' },
    ],
    bars: [
      { id: 'mc-grating-bar', label: 'Bar grating infill structure — McNichols', inches: 1.0, specText: 'Bar grating infill structure — McNichols' },
    ],
    panels: [
      { id: 'mc-exp-48x96', label: 'Expanded metal sheet 48" × 96" — McNichols', inches: 0.12, specText: 'Expanded metal sheet 48" × 96" — McNichols', patternHint: 'expanded' },
      { id: 'mc-exp-48x120', label: 'Expanded metal sheet 48" × 120" — McNichols', inches: 0.12, specText: 'Expanded metal sheet 48" × 120" — McNichols', patternHint: 'expanded' },
      { id: 'mc-exp-60x120', label: 'Expanded metal sheet 60" × 120" — McNichols', inches: 0.12, specText: 'Expanded metal sheet 60" × 120" — McNichols', patternHint: 'expanded' },
      { id: 'mc-perf-staggered', label: 'Perforated metal (round hole, staggered pattern) — McNichols', inches: 0.1, specText: 'Perforated metal, round hole staggered — McNichols', patternHint: 'perforated-staggered' },
      { id: 'mc-perf-straight', label: 'Perforated metal (round hole, straight pattern) — McNichols', inches: 0.1, specText: 'Perforated metal, round hole straight — McNichols', patternHint: 'perforated-straight' },
      { id: 'mc-grating', label: 'Bar grating panel — McNichols', inches: 0.25, specText: 'Grating infill panel — McNichols', patternHint: 'grating' },
      { id: 'mc-wire-mesh', label: 'Wire mesh panel — McNichols', inches: 0.12, specText: 'Wire mesh infill panel — McNichols', patternHint: 'mesh' },
    ],
  },
};

export interface FontOption {
  family: string;
  label: string;
  category: 'Display / Architectural' | 'Serif' | 'Sans-Serif' | 'Script / Forged' | 'Monospace' | 'System';
}

export const SIGN_FONT_LIBRARY: FontOption[] = [
  // Google Fonts loaded in index.html
  { family: "'Oswald', sans-serif", label: 'Oswald (Shop Display)', category: 'Display / Architectural' },
  { family: "'Cinzel', serif", label: 'Cinzel (Monumental)', category: 'Serif' },
  { family: "'Playfair Display', serif", label: 'Playfair Display', category: 'Serif' },
  { family: "'Cormorant Garamond', serif", label: 'Cormorant Garamond', category: 'Serif' },
  { family: "'Libre Baskerville', serif", label: 'Libre Baskerville', category: 'Serif' },
  { family: "'Merriweather', serif", label: 'Merriweather', category: 'Serif' },
  { family: "'Roboto Slab', serif", label: 'Roboto Slab', category: 'Serif' },
  { family: "'Bebas Neue', sans-serif", label: 'Bebas Neue', category: 'Display / Architectural' },
  { family: "'Anton', sans-serif", label: 'Anton (Bold Block)', category: 'Display / Architectural' },
  { family: "'Abril Fatface', serif", label: 'Abril Fatface', category: 'Display / Architectural' },
  { family: "'Righteous', sans-serif", label: 'Righteous', category: 'Display / Architectural' },
  { family: "'Rye', serif", label: 'Rye (Western Iron)', category: 'Display / Architectural' },
  { family: "'UnifrakturMaguntia', cursive", label: 'Unifraktur (Blackletter)', category: 'Display / Architectural' },
  { family: "'Josefin Sans', sans-serif", label: 'Josefin Sans', category: 'Sans-Serif' },
  { family: "'Montserrat', sans-serif", label: 'Montserrat', category: 'Sans-Serif' },
  { family: "'Raleway', sans-serif", label: 'Raleway', category: 'Sans-Serif' },
  { family: "'Poppins', sans-serif", label: 'Poppins', category: 'Sans-Serif' },
  { family: "'Space Grotesk', sans-serif", label: 'Space Grotesk', category: 'Sans-Serif' },
  { family: "'Inter', sans-serif", label: 'Inter', category: 'Sans-Serif' },
  { family: "'Roboto', sans-serif", label: 'Roboto', category: 'Sans-Serif' },
  { family: "'Open Sans', sans-serif", label: 'Open Sans', category: 'Sans-Serif' },
  { family: "'Source Sans 3', sans-serif", label: 'Source Sans 3', category: 'Sans-Serif' },
  { family: "'Great Vibes', cursive", label: 'Great Vibes', category: 'Script / Forged' },
  { family: "'Dancing Script', cursive", label: 'Dancing Script', category: 'Script / Forged' },
  { family: "'Pacifico', cursive", label: 'Pacifico', category: 'Script / Forged' },
  { family: "'Lobster', cursive", label: 'Lobster', category: 'Script / Forged' },
  { family: "'Courier Prime', monospace", label: 'Courier Prime', category: 'Monospace' },
  { family: "'IBM Plex Mono', monospace", label: 'IBM Plex Mono', category: 'Monospace' },
  // Standard System Fonts
  { family: "Georgia, serif", label: 'Georgia (System Serif)', category: 'System' },
  { family: "'Times New Roman', Times, serif", label: 'Times New Roman', category: 'System' },
  { family: "Palatino, 'Palatino Linotype', serif", label: 'Palatino', category: 'System' },
  { family: "Garamond, serif", label: 'Garamond', category: 'System' },
  { family: "'Bookman Old Style', serif", label: 'Bookman', category: 'System' },
  { family: "Rockwell, serif", label: 'Rockwell', category: 'System' },
  { family: "Copperplate, 'Copperplate Gothic Light', fantasy", label: 'Copperplate', category: 'System' },
  { family: "Arial, Helvetica, sans-serif", label: 'Arial', category: 'System' },
  { family: "'Arial Black', sans-serif", label: 'Arial Black', category: 'System' },
  { family: "Impact, Charcoal, sans-serif", label: 'Impact', category: 'System' },
  { family: "Verdana, Geneva, sans-serif", label: 'Verdana', category: 'System' },
  { family: "'Trebuchet MS', sans-serif", label: 'Trebuchet MS', category: 'System' },
  { family: "Tahoma, sans-serif", label: 'Tahoma', category: 'System' },
  { family: "'Lucida Sans Unicode', sans-serif", label: 'Lucida Sans', category: 'System' },
  { family: "'Brush Script MT', cursive", label: 'Brush Script MT', category: 'System' },
  { family: "'Courier New', Courier, monospace", label: 'Courier New', category: 'System' },
  { family: "'Lucida Console', Monaco, monospace", label: 'Lucida Console', category: 'System' },
];
