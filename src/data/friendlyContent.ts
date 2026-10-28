export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface TurnoverStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  checklist: string[];
}

export const companyInfo = {
  name: 'Homesync LLC',
  legalName: 'Homesync LLC',
  phone: '(804) 292-2009',
  phoneRaw: '18042922009',
  email: 'info@homesyncllc.org',
  address: '3540 Pump Rd, Richmond, VA 23233',
  cityStateZip: 'Richmond, VA 23233',
  serviceRegion: 'Greater Virginia & Central Virginia',
  hours: 'Monday – Friday: 8:00 AM – 5:00 PM (Closed Weekends)',
  license: 'Licensed & Insured Virginia Residential Contractor',
  tagline: 'Dependable Home Repairs, Property Preservation & Turnover Solutions across Greater Virginia',
};

// Pillar 1: Maintenance & Handyman (12 Core Trades)
export const maintenanceServices: ServiceItem[] = [
  {
    id: 'general-handyman',
    title: 'General Handyman Services',
    tagline: 'Reliable help for your home punch list and odd jobs',
    description: 'From mounting hardware and repairing door hinges to assembling furniture and fixing trim, our experienced technicians tackle everyday to-dos with care and attention to detail.',
    highlights: ['Door & window adjustments', 'Cabinet hardware & fixture installation', 'Interior trim & caulking', 'General household punch lists'],
    icon: 'Wrench',
  },
  {
    id: 'hvac-appliances',
    title: 'HVAC & Appliances',
    tagline: 'Seasonal tune-ups, filter swaps, and appliance installation',
    description: 'Keep your home comfortable year-round. We handle seasonal filter replacements, thermostat upgrades, and safe installation of dishwashers, disposals, washers, and dryers.',
    highlights: ['Air filter & vent maintenance', 'Smart thermostat installation', 'Washer, dryer & stove hookups', 'Dishwasher & disposal replacement'],
    icon: 'Flame',
  },
  {
    id: 'painting',
    title: 'Painting (Interior and Exterior)',
    tagline: 'Clean lines, sharp finishes, and quality wall protection',
    description: 'Brighten rooms or refresh curb appeal. We prepare surfaces properly, sand smoothly, tape cleanly, and apply premium coats that make homes feel fresh and well-cared for.',
    highlights: ['Interior room & trim painting', 'Ceilings, doors & baseboards', 'Exterior siding & porch touch-ups', 'Color matching & prep work'],
    icon: 'Paintbrush',
  },
  {
    id: 'drywall',
    title: 'Drywall (Repair and Texture)',
    tagline: 'Seamless hole patching, water damage repair, and texturing',
    description: 'Accidental doorknob holes, settling cracks, or ceiling water stains? We patch, tape, mud, sand, and match wall textures seamlessly so repairs are completely invisible.',
    highlights: ['Patching holes & seam cracks', 'Water damage drywall replacement', 'Texture matching (orange peel, knockdown, smooth)', 'Corner bead repairs'],
    icon: 'Layers',
  },
  {
    id: 'carpentry-flooring',
    title: 'Carpentry & Flooring',
    tagline: 'Subfloor repairs, LVP installation, baseboards, and wood craft',
    description: 'Sturdy woodworking for everyday living. We replace rotted boards, install durable luxury vinyl plank (LVP) flooring, hang new interior doors, and frame custom repairs.',
    highlights: ['LVP, laminate & hardwood repair', 'Subfloor leveling & board replacement', 'Baseboard, crown & door casing', 'Stair tread & handrail repairs'],
    icon: 'Hammer',
  },
  {
    id: 'fencing-decking-landscaping',
    title: 'Fencing, Decking & Landscaping',
    tagline: 'Sturdy perimeter fences, safe decks, and tidy yards',
    description: 'Enhance your outdoor living spaces. We repair leaning fence posts, replace damaged deck boards, power wash weathered railings, and tidy up overgrown bushes.',
    highlights: ['Wood & chain link fence repairs', 'Deck board & stair replacements', 'Gate latches & post stabilization', 'Bed edging, mulching & shrub trimming'],
    icon: 'Fence',
  },
  {
    id: 'cleaning-debris',
    title: 'Cleaning & Debris Removal',
    tagline: 'Full haul-away, garage cleanouts, and deep move-in sweeps',
    description: 'Got unwanted furniture, yard waste, or renovation leftovers? We load, haul, and sweep clean, leaving basements, attics, and garages neat and organized.',
    highlights: ['Bulk junk & furniture haul-away', 'Yard debris & storm branch removal', 'Garage, attic & shed cleanouts', 'Job-site broom sweep finish'],
    icon: 'Trash2',
  },
  {
    id: 'pressure-wash',
    title: 'Pressure Wash',
    tagline: 'Wash away algae, pollen, dirt, and mildew safely',
    description: 'Richmond humidity can leave siding, driveways, and decks looking dull. Our pressure washing safely restores concrete, brick walks, vinyl siding, and outdoor patios.',
    highlights: ['Driveway & sidewalk brightening', 'Vinyl siding & gutter exterior wash', 'Deck & patio surface rejuvenation', 'Brick step & retaining wall wash'],
    icon: 'Droplets',
  },
  {
    id: 'garage-door',
    title: 'Garage Door',
    tagline: 'Opener tune-ups, sensor alignments, and weatherstripping',
    description: 'Ensure your garage door opens smoothly and closes securely. We fix misaligned optical sensors, replace worn bottom rubber seals, lubricate tracks, and program remotes.',
    highlights: ['Sensor alignment & wiring checks', 'Track lubrication & roller inspection', 'Bottom weatherstrip replacement', 'Keypad & remote setup'],
    icon: 'DoorClosed',
  },
  {
    id: 'roofing-tarping',
    title: 'Roofing (Tarping & Repair)',
    tagline: 'Urgent weather tarping, shingle replacements, and leak protection',
    description: 'Protect your home structure after heavy winds or fallen limbs. We safely tarp damaged sections to stop active leaks, replace missing shingles, and secure flashing.',
    highlights: ['Storm damage protective tarping', 'Missing shingle replacement', 'Chimney & vent pipe flashing touch-ups', 'Gutter clearing & downspout checks'],
    icon: 'Home',
  },
  {
    id: 'plumbing-electrical',
    title: 'Plumbing & Electrical (Minor Repairs)',
    tagline: 'Stopping drips, running toilets, new light fixtures, and outlets',
    description: 'Small issues can cause big headaches. We replace dripping faucets, running toilet valves, install contemporary light fixtures and ceiling fans, and swap old wall outlets.',
    highlights: ['Faucet, sink & disposal replacements', 'Toilet valves & wax ring fixes', 'Light fixture & ceiling fan installation', 'GFCI outlet & light switch upgrades'],
    icon: 'Zap',
  },
  {
    id: 'driveway-maintenance',
    title: 'Driveway Maintenance',
    tagline: 'Asphalt crack filling, concrete sealing, and gravel grading',
    description: 'Prevent small cracks from turning into costly potholes. We clean, patch, and seal driveways to protect against winter freezing and vehicle wear.',
    highlights: ['Asphalt crack filling & sealcoating', 'Concrete joint caulking', 'Gravel driveway smoothing & top-up', 'Oil stain cleaning & surface prep'],
    icon: 'Truck',
  },
];

// Pillar 2: Property Preservation (Vacant, Bank & Investor Assets)
export const preservationServices: ServiceItem[] = [
  {
    id: 'securing-locks',
    title: 'Securing & Lock Services',
    tagline: 'Rekeying, lockbox installation, and window board-ups',
    description: 'Immediate physical security for vacant properties. We rekey exterior doors to master codes, install coded contractor lockboxes, padlocks on gates, and board up broken openings.',
    highlights: ['Door rekeying to single code', 'Coded contractor lockbox placement', 'Protective window & door board-ups', 'Pool, shed & gate padlock securing'],
    icon: 'Lock',
  },
  {
    id: 'lawn-landscape',
    title: 'Lawn & Landscape Care',
    tagline: 'Keeping vacant properties compliant with municipal codes',
    description: 'Avoid costly city weed notices and code violations. We provide scheduled mowing, edge trimming, weed whacking, and vine clearing across Greater Richmond.',
    highlights: ['Scheduled lawn mowing & edging', 'Overgrowth & brush cutbacks', 'Code violation remediation', 'Leaf clearing & tree limb trimming'],
    icon: 'Scissors',
  },
  {
    id: 'preservation-debris',
    title: 'Debris Removal',
    tagline: 'Complete vacant home trash-outs and hazardous waste sweep',
    description: 'We empty abandoned properties completely. From left-behind household contents and broken appliances to curb haul-away and broom-clean handover.',
    highlights: ['Interior room-by-room trash-outs', 'Yard waste & tire disposal', 'Attic, crawlspace & basement clearing', 'Broom-clean photo documentation'],
    icon: 'Trash',
  },
  {
    id: 'inspections-reports',
    title: 'Initial Inspections & Reports',
    tagline: 'Detailed condition assessments with comprehensive photo logs',
    description: 'Clear eyes on the ground for out-of-town owners. We document exterior and interior conditions, roof integrity, plumbing status, and potential safety hazards.',
    highlights: ['Date-stamped photo logs', 'Occupancy verification checks', 'Roof, foundation & safety assessment', 'Detailed written repair estimates'],
    icon: 'ClipboardCheck',
  },
  {
    id: 'general-repairs',
    title: 'General Repairs',
    tagline: 'Remediating safety hazards and protecting property value',
    description: 'Fix the items that prevent sales or inspections. Handrail installation, trip hazard reduction, ceiling patch-ups, and securing dangerous openings.',
    highlights: ['Handrail & step stabilization', 'Ceiling & drywall stabilization', 'Broken glass replacement', 'Plumbing leak shutoff & cap'],
    icon: 'ShieldCheck',
  },
  {
    id: 'exterior-maintenance',
    title: 'Exterior Maintenance',
    tagline: 'Gutter clearing, siding upkeep, and weatherization',
    description: 'Keep water flowing away from foundations. We clean out backed-up gutters, ensure downspouts extend away from walls, and protect vacant plumbing lines during winter.',
    highlights: ['Gutter cleaning & downspout extensions', 'Winterization & anti-freeze pipe prep', 'Soffit & fascia patching', 'Crawl space door repair & insulation'],
    icon: 'Compass',
  },
];

// Pillar 3: Rental Unit Turnovers (Make-Ready Workflow)
export const turnoverSteps: TurnoverStep[] = [
  {
    step: 1,
    title: 'Move-Out Walkthrough & Trash-Out',
    duration: 'Day 1',
    description: 'We inspect the vacated unit immediately, catalog needed repairs, haul away items left behind by previous tenants, and secure the premises.',
    checklist: [
      'Room-by-room photo inspection log',
      'Removal of abandoned furniture & trash',
      'HVAC filter check and carbon detector test',
      'Written itemized turnover scope',
    ],
  },
  {
    step: 2,
    title: 'Punch-List Repairs & Safety Checks',
    duration: 'Day 2',
    description: 'Our skilled technicians fix leaky faucets, repair loose cabinet hinges, replace burned-out bulbs, and test all electrical outlets and smoke detectors.',
    checklist: [
      'Plumbing checks (toilets, faucets, drains)',
      'Electrical inspection (outlets, switches, lights)',
      'Door latches, windows & closet sliding tracks',
      'Appliance functional testing (stove, fridge, disposal)',
    ],
  },
  {
    step: 3,
    title: 'Drywall Patch, Trim & Fresh Paint',
    duration: 'Days 3-4',
    description: 'We patch wall anchors, nail holes, and scuffs, apply smooth primer, and coat walls with durable, neutral paint that makes the home look brand new.',
    checklist: [
      'Patching doorknob dents & anchor holes',
      'Smooth sanding & texture feathering',
      'Baseboard & trim touch-ups',
      'Full wall paint coats in modern rental-neutral tones',
    ],
  },
  {
    step: 4,
    title: 'Deep Cleaning & Rekey for New Tenants',
    duration: 'Day 5',
    description: 'Sparkling clean appliances, sanitized bathrooms, polished floors, and fresh locks with keys tagged and ready for your new tenant move-in.',
    checklist: [
      'Appliance interior cleaning (oven, fridge, microwave)',
      'Bathroom sanitization & mirror polishing',
      'Hardwood/LVP floor scrub & carpet vacuum',
      'Lock re-keying & labeled keys ready for handover',
    ],
  },
];

export const serviceAreas = [
  { name: 'City of Richmond', areas: 'The Fan, Museum District, Church Hill, Northside, Shockoe Slip, Carytown' },
  { name: 'Henrico County', areas: 'Short Pump, Glen Allen, Tuckahoe, Lakeside, Sandston, Varina' },
  { name: 'Chesterfield County', areas: 'Midlothian, Brandermill, Woodlake, North Chesterfield, Chester' },
  { name: 'Hanover County', areas: 'Mechanicsville, Ashland, Atlee, Beaverdam' },
  { name: 'Tri-Cities Corridor', areas: 'Petersburg, Colonial Heights, Hopewell, Prince George' },
];

export const whyChooseHomesync = [
  {
    title: 'Straightforward Pricing',
    description: 'No hidden fees or unexpected line items. We provide clear, itemized written estimates before any work begins.',
    icon: 'DollarSign',
  },
  {
    title: 'Photo Proof of Every Job',
    description: 'Whether you live around the corner or across the country, we send high-resolution before-and-after photos with every invoice.',
    icon: 'Camera',
  },
  {
    title: 'Respect for Your Time',
    description: 'We schedule confirmed arrival windows and communicate proactively. If traffic or weather affects our timeline, you hear from us first.',
    icon: 'Clock',
  },
  {
    title: 'Fully Licensed & Insured',
    description: 'Carrying comprehensive general liability coverage and skilled local technicians for complete peace of mind.',
    icon: 'ShieldCheck',
  },
];
