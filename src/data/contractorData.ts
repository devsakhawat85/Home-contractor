export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  timeline: string;
  startingRange: string;
  deliverables: string[];
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchen' | 'Bathroom' | 'Whole Home' | 'Addition';
  location: string;
  duration: string;
  sqft: string;
  image: string;
  description: string;
  architecturalHighlights: string[];
  quote: {
    client: string;
    text: string;
  };
}

export interface BeforeAfterItem {
  id: string;
  roomName: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  investmentTier: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  year: string;
  rating: number;
  text: string;
  verifiedHomeowner: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Process' | 'Permits & Quality' | 'Getting Started';
}

export const COMPANY_INFO = {
  name: 'Northline Contracting',
  tagline: 'Architectural Remodeling & Fine Home Building',
  license: 'WA Lic. #NORTHLC821B2',
  phone: '(206) 555-0194',
  phoneClean: '2065550194',
  email: 'estimates@northlinecontracting.com',
  address: '1200 4th Ave, Suite 1400, Seattle, WA 98101',
  serviceRegion: 'Seattle, Bellevue, Kirkland, Mercer Island, & The Eastside',
  hours: 'Mon – Fri: 7:30 AM – 6:00 PM | Sat: 9:00 AM – 2:00 PM',
  experienceYears: '16+',
  completedProjects: '520+',
  satisfactionRate: '98.8%',
  warrantyYears: '5-Year',
};

export const TRUST_METRICS = [
  { value: '16+', label: 'Years Experience', note: 'Master builder heritage' },
  { value: '520+', label: 'Completed Projects', note: 'Single-family residences' },
  { value: '100%', label: 'Licensed & Bonded', note: 'Full comprehensive liability' },
  { value: '4.96★', label: 'Client Rating', note: 'Across 248 verified reviews' },
];

export const SERVICE_AREAS = [
  { name: 'Seattle (Metro)', zips: ['98101', '98102', '98103', '98105', '98109', '98112', '98115', '98119', '98122', '98199'] },
  { name: 'Bellevue & West Bellevue', zips: ['98004', '98005', '98006', '98007', '98008'] },
  { name: 'Mercer Island', zips: ['98040'] },
  { name: 'Kirkland & Houghton', zips: ['98033', '98034'] },
  { name: 'Medina & Clyde Hill', zips: ['98039'] },
  { name: 'Redmond & Bear Creek', zips: ['98052', '98053'] },
  { name: 'Sammamish Plateau', zips: ['98074', '98075'] },
  { name: 'Woodinville Wine Country', zips: ['98072', '98077'] },
  { name: 'Issaquah & Highlands', zips: ['98027', '98029'] },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'kitchen-remodeling',
    number: '01',
    title: 'Kitchen Remodeling',
    tagline: 'Culinary centers engineered for gathering and gastronomy',
    description: 'Custom fluted white oak cabinetry, book-matched quartzite islands, architectural circadian lighting, and seamless concealed appliance integration.',
    image: '/src/assets/images/kitchen_luxury_island_1790495728853.jpg',
    timeline: '8 – 12 Weeks',
    startingRange: '$65,000 – $180,000+',
    deliverables: [
      'Custom millwork & bespoke joinery',
      'Structural load-bearing wall removal & flush steel beams',
      'Sub-Zero, Wolf & Miele appliance ventilation & rough-in',
      'Circadian architectural lighting schemes',
    ],
    idealFor: 'Homeowners seeking an open-concept entertainment hub with chef-caliber performance.',
  },
  {
    id: 'bathroom-remodeling',
    number: '02',
    title: 'Bathroom Remodeling',
    tagline: 'Private restorative sanctuaries with bespoke limestone & rain suites',
    description: 'Curbless wet-room showers, freestanding composite stone soaking tubs, hidden drain systems, hydronic heated floors, and custom floating vanities.',
    image: '/src/assets/images/bathroom_spa_retreat_1790495742338.jpg',
    timeline: '6 – 9 Weeks',
    startingRange: '$45,000 – $120,000+',
    deliverables: [
      'Schluter-certified continuous waterproof envelope',
      'Frameless reeded and ultra-clear low-iron glass partitions',
      'In-wall thermostatic dual-shower valves & body jets',
      'Custom stone slab wall cladding & floating vanities',
    ],
    idealFor: 'Creating a high-end luxury resort experience in your primary master suite.',
  },
  {
    id: 'home-additions',
    number: '03',
    title: 'Architectural Home Additions',
    tagline: 'Expanding footprint while honoring existing structural character',
    description: 'Second-story vertical pop-tops, cantilevered master suite extensions, and sun-drenched glass pavilion living rooms engineered with modern envelope science.',
    image: '/src/assets/images/hero_modern_renovation_1790495714934.jpg',
    timeline: '16 – 26 Weeks',
    startingRange: '$160,000 – $450,000+',
    deliverables: [
      'Foundation underpinning, seismic retrofitting & geo-engineering',
      'Architectural tie-in preserving rooflines and siding continuity',
      'High-performance triple-pane windows & thermal envelopes',
      'Complete end-to-end municipal permitting & zoning hearings',
    ],
    idealFor: 'Growing families who love their neighborhood and want substantial square footage additions.',
  },
  {
    id: 'whole-home-renovation',
    number: '04',
    title: 'Whole-Home Renovation',
    tagline: 'Holistic interior transformations from the studs out',
    description: 'Comprehensive structural reconfiguration, modern HVAC heat pump electrification, bespoke hardwood floors, and unified interior design throughout.',
    image: '/src/assets/images/craftsman_detail_work_1790495752212.jpg',
    timeline: '20 – 36 Weeks',
    startingRange: '$220,000 – $650,000+',
    deliverables: [
      'Full architectural redraw & 3D photorealistic renderings',
      'Upgraded 200A/400A electrical service & whole-home smart automation',
      'Continuous white oak wide-plank flooring with custom Rubio Monocoat finishes',
      'Dedicated full-time on-site project superintendent',
    ],
    idealFor: 'Acquired heritage homes or mid-century properties requiring total modernization.',
  },
  {
    id: 'basement-finishing',
    number: '05',
    title: 'Basement & Custom ADUs',
    tagline: 'Subterranean luxury living, wine vaults & rental suites',
    description: 'Transforming underutilized lower levels into acoustic home screening rooms, sommelier wine cellars, wellness gyms, or permitted income-generating DADU units.',
    image: '/src/assets/images/hero_modern_renovation_1790495714934.jpg',
    timeline: '10 – 16 Weeks',
    startingRange: '$75,000 – $210,000+',
    deliverables: [
      'French drain waterproofing, sump pumps & moisture vapor barriers',
      'Acoustic decoupling & Rockwool sound isolation walls',
      'Egress window enlargement & concrete saw-cutting',
      'Full secondary kitchen & en-suite bathroom rough-ins',
    ],
    idealFor: 'Maximizing existing building envelope for multigen living or executive entertainment.',
  },
  {
    id: 'exterior-renovation',
    number: '06',
    title: 'Exterior & Outdoor Living',
    tagline: 'Year-round Pacific Northwest outdoor entertaining spaces',
    description: 'Architectural cedar rain-screens, standing-seam metal roofing, covered outdoor kitchen pavilions with infrared heaters, and integrated motorized louvers.',
    image: '/src/assets/images/craftsman_detail_work_1790495752212.jpg',
    timeline: '8 – 14 Weeks',
    startingRange: '$55,000 – $190,000+',
    deliverables: [
      'Clear vertical-grain Western Red Cedar & fiber cement siding',
      'Infratech flush ceiling heater integration & gas fire tables',
      'Stainless steel outdoor cooking suites with Lynx & Kalamazoo appliances',
      'Custom architectural powder-coated steel pergolas',
    ],
    idealFor: 'Blurring the boundary between indoor warmth and outdoor nature.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mercer-island-kitchen',
    title: 'Mercer Island Modern Pavilion Kitchen',
    category: 'Kitchen',
    location: 'Mercer Island, WA',
    duration: '11 Weeks',
    sqft: '680 sq ft',
    image: '/src/assets/images/kitchen_luxury_island_1790495728853.jpg',
    description: 'Removal of two central load-bearing walls replaced by a concealed 24-foot W-beam, opening the kitchen directly into lake views. Hand-milled rift white oak island with waterfall quartzite.',
    architecturalHighlights: [
      '24-foot flush structural steel beam installation',
      'Custom fluted white oak millwork with push-to-open servo hardware',
      'Dornbracht platinum-matte tapware and instant boiling water station',
      'Concealed butler pantry with secondary dishwasher and espresso bar',
    ],
    quote: {
      client: 'David & Evelyn C.',
      text: 'Northline turned what was a cramped 1980s layout into the centerpiece of our home. Their daily superintendent communicated every sub schedule down to the hour.',
    },
  },
  {
    id: 'bellevue-whole-home',
    title: 'West Bellevue Mid-Century Transformation',
    category: 'Whole Home',
    location: 'Bellevue, WA',
    duration: '26 Weeks',
    sqft: '3,850 sq ft',
    image: '/src/assets/images/hero_modern_renovation_1790495714934.jpg',
    description: 'A ground-up interior architectural restoration of a 1968 post-and-beam residence. We preserved the original cedar tongue-and-groove ceilings while introducing triple-glazed glass curtains and hydronic radiant floors.',
    architecturalHighlights: [
      'Preservation of architectural glulam timber structural members',
      'Full electrification with Mitsubishi hyper-heat mini-split systems',
      'Fleetwood motorized sliding pocket glass door systems',
      'Custom terrazzo tile entry and flush baseboards throughout',
    ],
    quote: {
      client: 'Marcus & Linnea T.',
      text: 'The architectural integrity they respected was breathtaking. The fixed-bid guarantee gave us total financial peace of mind from demolition to handover.',
    },
  },
  {
    id: 'kirkland-spa-suite',
    title: 'Kirkland Lakeside Primary Spa Suite',
    category: 'Bathroom',
    location: 'Kirkland, WA',
    duration: '8 Weeks',
    sqft: '340 sq ft',
    image: '/src/assets/images/bathroom_spa_retreat_1790495742338.jpg',
    description: 'Conversion of an outdated master bath and walk-in closet into an expansive Japanese-Nordic wellness sanctuary. Featuring custom honed limestone slab walls and a curbless double rain shower.',
    architecturalHighlights: [
      'Hand-carved limestone soaking tub weighing 850 lbs with joist reinforcement',
      'Linear zero-threshold drain with large-format heated porcelain floors',
      'Reeded glass pivot door with blackened brass hardware',
      'Integrated medicine cabinets with concealed defogging and charging ports',
    ],
    quote: {
      client: 'Dr. Rebecca H.',
      text: 'Every morning feels like waking up in an Aman resort. Their precision tile cuts and clean containment during work were second to none.',
    },
  },
  {
    id: 'clyde-hill-addition',
    title: 'Clyde Hill Architectural Master Suite Addition',
    category: 'Addition',
    location: 'Medina / Clyde Hill, WA',
    duration: '18 Weeks',
    sqft: '920 sq ft added',
    image: '/src/assets/images/craftsman_detail_work_1790495752212.jpg',
    description: 'A cantilevered second-story primary wing addition designed to capture mountain vistas. Seamless roofline convergence and custom cedar siding stained to match the existing exterior flawlessly.',
    architecturalHighlights: [
      'Engineered micro-lam cantilever foundation extension',
      'Private cedar balcony with glass balustrade system',
      'Walk-in dressing room with custom integrated walnut wardrobe joinery',
      'Zero disturbance to ground floor living areas during upper framing',
    ],
    quote: {
      client: 'Harrison & Claire P.',
      text: 'We were terrified of living through an addition with two young children. Northline set up negative-air containment and respected our family life completely.',
    },
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'kitchen-case',
    roomName: 'Mercer Island Waterfront Kitchen',
    location: 'Mercer Island, WA',
    beforeImage: '/src/assets/images/craftsman_detail_work_1790495752212.jpg',
    afterImage: '/src/assets/images/kitchen_luxury_island_1790495728853.jpg',
    beforeDescription: 'Enclosed 1980s oak kitchen with dropping soffits, partitioned drywall walls blocking natural lake views, and worn laminate counters.',
    afterDescription: 'Fully open concept with flush steel header, custom white oak rift cabinets, continuous Calacatta quartzite island, and integrated Wolf induction suite.',
    investmentTier: '$125,000 – $145,000',
    duration: '10 Weeks',
  },
  {
    id: 'bath-case',
    roomName: 'Kirkland Lakeview Master Bath',
    location: 'Kirkland, WA',
    beforeImage: '/src/assets/images/hero_modern_renovation_1790495714934.jpg',
    afterImage: '/src/assets/images/bathroom_spa_retreat_1790495742338.jpg',
    beforeDescription: 'Carpeted platform jacuzzi tub, dated brass fixtures, yellowed acrylic shower stall, and poor ventilation causing condensation.',
    afterDescription: 'Curbless wet-room suite with freestanding stone soaking tub, dual Hansgrohe rain heads, heated limestone floors, and recessed circadian lighting.',
    investmentTier: '$68,000 – $82,000',
    duration: '7 Weeks',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Discovery & Feasibility Consultation',
    duration: 'Week 1',
    description: 'We meet at your home to evaluate your lifestyle needs, structural possibilities, zoning constraints, and budgetary parameters. You receive an honest feasibility overview.',
    deliverable: 'Initial Project Charter & Cost Range Matrix',
  },
  {
    step: '02',
    name: 'Architectural Design & Fixed-Price Bid',
    duration: 'Weeks 2 – 4',
    description: 'Our team drafts detailed 3D plans, engineering drawings, and exact material specifications. You receive a guaranteed fixed-price contract with zero hidden clauses.',
    deliverable: 'Complete Permit-Ready Blueprints & Guaranteed Price Agreement',
  },
  {
    step: '03',
    name: 'Precision Construction & Daily Client Portal',
    duration: 'Scheduled Phase',
    description: 'We install negative-air dust barriers before a single hammer swings. Your dedicated on-site superintendent coordinates master craftsmen and logs daily photo updates to your client portal.',
    deliverable: 'Daily Site Logs, Weekly Owner Video Sync & Milestone Inspections',
  },
  {
    step: '04',
    name: 'Zero-Punchlist Handover & 5-Year Guarantee',
    duration: 'Handover Week',
    description: 'Together we conduct an exhaustive 140-point quality audit. We hand over all mechanical manuals, warranty packets, and back our work with an industry-leading 5-year craftsmanship warranty.',
    deliverable: 'Owner’s Manual, Warranty Bond & Final Professional Deep Clean',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah & Matthew K.',
    location: 'West Bellevue',
    projectType: 'Whole-Home Renovation',
    year: '2025',
    rating: 5,
    text: 'Working with Northline Contracting was the most transparent contractor experience we have ever had. From the fixed-price contract that did not deviate by a single dollar, to the immaculate dust protection that allowed our family to remain comfortable, they set the standard.',
    verifiedHomeowner: true,
  },
  {
    id: '2',
    clientName: 'Dr. Julian Vance',
    location: 'Mercer Island',
    projectType: 'Architectural Kitchen & Living Open-Concept',
    year: '2025',
    rating: 5,
    text: 'Their superintendent, Nathan, ran our project like an orchestra. The level of joinery on our custom white oak island and the structural beam installation blew our architect away. Worth every single penny for this level of craftsmanship.',
    verifiedHomeowner: true,
  },
  {
    id: '3',
    clientName: 'Elena & Craig Rossi',
    location: 'Kirkland Highlands',
    projectType: 'Master Spa Suite & Balcony Addition',
    year: '2026',
    rating: 5,
    text: 'We interviewed four contractors before choosing Northline. Their detailed breakdown in step two gave us total confidence. The bathroom feels like a 5-star Kyoto onsen, and their 5-year warranty gives genuine peace of mind.',
    verifiedHomeowner: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Pricing',
    question: 'How do you guarantee a fixed price without unexpected surprise change orders?',
    answer: 'Unlike contractors who offer lowball estimates and inflate the bill with change orders, we invest heavily in upfront forensic planning. Before construction begins, our master trades and structural engineer inspect framing, plumbing routes, and electrical panels. We specify 100% of finishes and materials in our contract. Unless you voluntarily alter the scope of work mid-build, your contracted price is fixed and legally binding.',
  },
  {
    category: 'Process',
    question: 'Can we stay in our home during the renovation?',
    answer: 'For kitchen, bathroom, and addition projects, yes! We construct hermetic ZipWall barrier walls with commercial HEPA negative-air scrubbers to isolate construction dust completely from your living quarters. For complete whole-home gut renovations, we coordinate a temporary relocation timeline and optimize the schedule for maximum speed.',
  },
  {
    category: 'Permits & Quality',
    question: 'Do you manage city building permits, structural engineering, and municipal inspections?',
    answer: 'Yes, 100%. We handle architectural drawings, structural engineering calculations, zoning clearances, and schedule all municipal building, electrical, mechanical, and plumbing inspections. You will never need to stand in line at city hall or navigate bureaucratic paperwork.',
  },
  {
    category: 'Permits & Quality',
    question: 'What is covered under your 5-Year Craftsmanship Warranty?',
    answer: 'While state law only mandates a 1-year contractor warranty, Northline provides a comprehensive 5-year written craftsmanship warranty on all structural, plumbing, electrical, tile work, and custom millwork. If a cabinet hinge slips, a grout line cracks, or a fitting needs tuning, our dedicated service technician arrives within 48 hours at zero cost to you.',
  },
  {
    category: 'Getting Started',
    question: 'How far in advance should we reach out to reserve our project timeline?',
    answer: 'Because we limit our project capacity to ensure a full-time superintendent on every jobsite, we typically book 4 to 8 weeks in advance for engineering and pre-construction design. We recommend scheduling your initial consultation as early in your planning cycle as possible.',
  },
  {
    category: 'Getting Started',
    question: 'Do you provide complimentary on-site consultations and estimates?',
    answer: 'Yes. Our senior project director visits your property for a thorough 60-minute site assessment, discusses your spatial goals, reviews structural possibilities, and provides a clear feasibility study and budgetary framework at no charge.',
  },
];
