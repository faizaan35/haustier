import {
  ProductCategory,
  CraftStep,
  MaterialSpec,
  ExhibitionEvent,
  PartnershipModel,
} from '../types';

export const COMPANY_INFO = {
  name: 'HAÚSTIER PRODUCTS',
  tagline: 'Manufacturer & Exporter of Pet Products and Leather & Non-Leather Accessories',
  experience: '35+ Years of Progressive Industry Experience',
  location: {
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    country: 'India',
    pincode: '208010',
    fullAddress: '190-LIG, KDA Colony, Jajmau, Kanpur, Uttar Pradesh, India - 208010',
    coordinates: '26.4499° N, 80.3319° E',
  },
  contact: {
    primaryContact: 'Mr. Mohammad Huzaifa',
    phone: '+91-7753973360',
    salesEmail: 'sales@haustierproducts.com',
    generalEmail: 'info@haustierproducts.com',
  },
  ports: {
    seaport: 'JNPT / Nhava Sheva (Mumbai) · Mundra',
    airGateway: 'Delhi (DEL) & Regional Cargo Gateways',
  },
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'dog-collars',
    chapter: 'CHAPTER 01',
    tag: 'FLAGSHIP LINE',
    title: 'Dog Collars',
    description:
      'Classic saddlery construction, padded calfskin and nappa linings, rolled-leather designs, and durable webbing hybrids engineered for strength and comfort.',
    features: [
      'Solid Brass & Stainless Hardware',
      'Custom Blind Debossing & Branded Hardware',
      'Widths & Sizing Engineered to Brand Specs',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEwJ7GELw8GkopUzt0AgM_KI27UVmJq3_XtCxtXE4uAd7Q0JYj8WcXAvqrc6gdOZMaGW-MxhPV-0ZGEZBuMRGpmF1Q4Roz1du4wKuS7Cb_lWKRi6tyTfCXzPZukoER19W3N-HIMs7t2Yua_DCRFjhF4X_gZq6Y0zqPzbNuHJjxYUh7wJIl23CDbGrLnAsLFv0tCnlvlGeAtt0WJw0v3lvoX_zOKomkIiheWFSsSehbcyRv5lvZ35zX',
    alt: 'Handcrafted leather dog collars in classic bridle tones on a warm neutral surface',
    moq: 'Flexible B2B Runs',
  },
  {
    id: 'leads-leashes',
    chapter: 'CHAPTER 02',
    tag: 'HIGH VOLUME',
    title: 'Dog Collars & Leads',
    description:
      'Multi-way adjustable European hands-free training leads, short-traffic leashes, matching collar & lead sets, and braided slip lines built with heavy-duty swivel snaps.',
    features: [
      '360° Heavy-Duty Swivel Snaps',
      'Padded Comfort Handles & Nappa Linings',
      'Lengths: 1.2m, 1.8m, 2.4m & Custom Cuts',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBT1MVNsz6WJnCO8QfZILnmxjUed4fSfdP6icM1C9OjCFOGWras1Nl581Ioy6q4FnTh67SwSyTvp7eRSZURKAzFUHuKhupcat9MUmJgQsiGfIl0HBk1IYfINGbqNapnsoQFsiA_aJ5D5xvED-jLw9nWuIBNqcmsihgp7bWpNFc2tK133r0BlksepuR_w7Pe-qr6VUE0LPb_UwAq7h8ed7yJV6M1wLb-SRrbs3zBZHPypcMGYWSctL0T',
    alt: 'Rolled leather dog leashes, brass trigger snaps, and braided leather details',
    moq: 'Flexible B2B Runs',
  },
  {
    id: 'toys',
    chapter: 'CHAPTER 03',
    tag: 'DURABLE CRAFT',
    title: 'Toys',
    description:
      'Heavy vegetable-tanned leather chew toys, natural fetch tugs, untreated dense felt objects, and reinforced canvas dummies crafted without hazardous synthetic coatings.',
    features: [
      'Natural & Carefully Selected Dyes',
      'Reinforced Multi-Layer Seam Construction',
      'Durable Natural Fibers & Leather Tugs',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSK1zRZapqm-XIfgMSXQRXp59NSJyzNJPvvB44mLkvTlpFtrVknfu0PzBFfhy0VWIqsiBNqH9APWGxBRRL6VraACurONq29tkBzpyKZXyeQiNj8xQ2Yif8QTn1I20Xdm8gVRl9rPlP9V8HWc7fX0J8DQEqoIoJtYRfV5vPJpgMsHH0p5hpeesOqq7fSjm9VuUHC3nYYiSER0QgUnbazFBTq159Gd8CJv-XHbwv0eTANHPF0KvJdAmh',
    alt: 'Vegetable-tanned leather chew toys and natural tug items',
    moq: 'Custom Production Runs',
  },
  {
    id: 'bags-belts',
    chapter: 'CHAPTER 04',
    tag: 'ACCESSORIES',
    title: 'Bags & Belts',
    description:
      'Refined leather and non-leather handler accessories, treat pouches, waste bag dispensers, lifestyle utility belts, and luxury carrier bags built to exacting international standards.',
    features: [
      'Durable Zippers & Robust Hardware',
      'Water-Resistant Linings & Reinforced Edges',
      'Custom Brand Embossing & Metal Plates',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHOjg64esieuI7KZTuE-T-G1QUG537Qz6dRhZlTYENi27bKul5A0tFtVAxEcobfwEVDjdtLoEkcIor0N2r7dwZQXFgLpO4GSjsu1kIt2YJ5QGPFH02EQioWuBCVi-FDnAtfTwkrbRWlgPc5d2XR-Qdj1M6Kd3K1OmA96oLp_Wdb43Yq1SLtvgVsuX9YD3Ocm-lemTlGUI0l9z1Q0ER5Y5_l1g47JBmUbF9kXRJ2X6z93OImhbF9dkz',
    alt: 'Leather handler accessories, treat pouches, and utility bags on atelier worktable',
    moq: 'Direct Inquiries Welcome',
  },
];

export const MATERIAL_SPECS: MaterialSpec[] = [
  {
    code: 'LEATHER-01',
    colorDot: '#6a3c1c',
    title: 'Full-Grain Pit-Tanned Leather',
    description:
      'Vegetable-tanned bovine hides utilizing natural plant tannins. Uncorrected grain that patinas gracefully with age and retains high tensile stability.',
    specA: { label: 'Gauge Range', value: '2.5mm – 4.5mm' },
    specB: { label: 'Tannin Origin', value: 'Vegetable Mimosa & Chestnut' },
  },
  {
    code: 'HARDWARE-02',
    colorDot: '#c4a97d',
    title: 'Solid Cast Brass & Alloy Hardware',
    description:
      'Sand-cast and forged solid brass buckles, D-rings, and trigger snaps engineered for corrosion resistance against moisture and environmental exposure.',
    specA: { label: 'Finish Styles', value: 'Antique Brass · Brushed Satin · Matte' },
    specB: { label: 'Hardware Types', value: 'Welded D-Rings · Roller Buckles' },
  },
  {
    code: 'FILAMENT-03',
    colorDot: '#182822',
    title: 'Waxed & Bonded High-Tensile Cords',
    description:
      'Pre-waxed high-tenacity polyester and braided filaments designed for deep-lock stitching, resisting rot and abrasion across intense outdoor use.',
    specA: { label: 'Stitch Density', value: '6 – 8 Stitches Per Inch' },
    specB: { label: 'Thread Treatment', value: 'Friction-Waxed Seam Seal' },
  },
  {
    code: 'FINISH-04',
    colorDot: '#8b4e28',
    title: 'Hand-Burnished Edge Sealants',
    description:
      'Multi-pass beveled and wax-slicked edge treatments preventing fiber fraying and moisture penetration while ensuring a smooth hand feel.',
    specA: { label: 'Application', value: 'Hand-Ironed & Wooden Slicked' },
    specB: { label: 'Edge Profile', value: 'Tapered Bevel · 3-Coat Polish' },
  },
];

export const CRAFT_STEPS: CraftStep[] = [
  {
    number: '01',
    title: 'Material Selection & Hide Grading',
    facility: 'Raw Stock Inspection',
    description:
      'Every hide and substrate is evaluated under controlled daylight to identify grain consistency and map optimal cutting zones, eliminating weak sections.',
  },
  {
    number: '02',
    title: 'Precision Die & Strap Cutting',
    facility: 'Tooling & Cutting Bay',
    description:
      'Hardened steel dies and guided slitters cut parallel strap profiles, maintaining dimensional consistency across full production runs.',
  },
  {
    number: '03',
    title: 'Skiving, Edge Beveling & Tapering',
    facility: 'Hand Atelier',
    description:
      'Edges are skived and hand-beveled with specialized irons to remove sharp corners and create comfortable contours that do not chafe.',
    isHighlight: true,
  },
  {
    number: '04',
    title: 'Reinforced Heavy-Duty Stitching',
    facility: 'Assembly Line',
    description:
      'Critical stress points surrounding solid D-rings and buckle tongues receive reinforced box-X tacks with heavy bonded filament threads.',
  },
  {
    number: '05',
    title: 'Multi-Pass Burnishing & Edge Dressing',
    facility: 'Finishing Bay',
    description:
      'Artisans hand-rub the beveled edges using natural waxes and wooden slickers until a glass-smooth, weather-resistant barrier is formed.',
  },
  {
    number: '06',
    title: 'Piece-by-Piece QA & Export Packing',
    facility: 'Export Quality Control',
    description:
      '100% optical and dimensional verification against client tech-packs, followed by moisture-barrier export packaging and barcode compliance.',
  },
];

export const EXHIBITIONS: ExhibitionEvent[] = [
  {
    title: 'INTERZOO 2026',
    location: 'Nuremberg, Germany',
    booth: 'Hall 9 · Booth 9-217',
    description:
      'Connecting with international pet product brands, distributors, and retailers. Showcasing new collections of collars, leads, chew toys, and bespoke accessories.',
    isUpcoming: true,
  },
  {
    title: 'ZOOMARK INTERNATIONAL PET FAIR',
    location: 'Bologna, Italy',
    booth: 'International Manufacturer Pavilion',
    description:
      'Official exhibitor presenting Indian manufacturing capabilities and saddlery craftsmanship to premier European pet lifestyle buyers.',
    isUpcoming: false,
  },
];

export const PARTNERSHIP_MODELS: PartnershipModel[] = [
  {
    number: '01',
    title: 'Private Label & OEM Execution',
    description:
      'Manufacture to your precise tech-packs, CAD drawings, or physical samples. We provide in-house pattern making, custom tooling, and initial sampling for approval.',
    badge: 'Confidential Production · IP Protected',
  },
  {
    number: '02',
    title: 'Established Silhouette Customization',
    description:
      'Choose from proven collar, lead, and accessory styles. Add your brand debossing, custom metal badging, custom colorways, and retail packaging.',
    badge: 'Rapid Sampling · Tailored Finishes',
  },
  {
    number: '03',
    title: 'Custom Metal Hardware & Moulds',
    description:
      'In-house peripheral facilities allowing custom buckle geometries, branded rivets, and specialized plating finishes (antique brass, matte black, brushed steel).',
    badge: 'Peripheral In-House Segment',
  },
  {
    number: '04',
    title: 'Export Packaging & Barcoding',
    description:
      'Retail-ready packaging solutions including custom hangtags, branded boxes, UPC/EAN barcodes, and maritime-compliant carton packaging.',
    badge: 'Shelf-Ready · International Logistics',
  },
];
