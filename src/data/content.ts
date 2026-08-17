export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  description?: string;
  tag: string;
  badge?: string;
  icon: string;
  iconName?: string;
  features: string[];
  image: string;
  bestFor: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'New Construction' | 'Mini Splits' | 'Heating' | 'Cooling' | 'Installations';
  location: string;
  description: string;
  tag: string;
  image: string;
  details?: string[];
}

export interface FAQItem {
  q: string;
  a: string;
  question?: string;
  answer?: string;
}

export const COMPANY_INFO = {
  name: "MTD Heating",
  tagline: "Heating & Cooling Done Right.",
  subtagline: "Reliable heating and cooling solutions for homes, new construction, and comfort upgrades throughout the Shelley, Idaho area.",
  phone: "(208) 520-8096",
  phoneRaw: "2085208096",
  phoneFormattedTel: "tel:2085208096",
  email: "menofmetal@hotmail.com",
  location: "Shelley, Idaho, USA",
  address: "Shelley Area",
  city: "Shelley",
  state: "Idaho",
  zip: "83274",
  hours: "Mon – Fri: 8:00 AM – 5:00 PM",
  serviceAreaSummary: "Shelley and surrounding Idaho communities",
  facebookMotto: "Heating & Cooling Done Right.",
  businessDescription: "At MTD Heating we specialize in new construction installs, mini splits, and full heating & cooling systems. Whether you're building a new home, upgrading your comfort, or need repairs, our team delivers quality you can trust."
};

export const CORE_CAPABILITIES = [
  {
    title: "New Construction",
    desc: "Complete planning and rough-in to final trim for custom builds and new homes.",
    icon: "Building2"
  },
  {
    title: "Mini Splits",
    desc: "Targeted, high-efficiency heating and cooling for zoned comfort without ductwork.",
    icon: "Wind"
  },
  {
    title: "Full Systems",
    desc: "Full furnace, heat pump, and air conditioning system replacements and installations.",
    icon: "Flame"
  },
  {
    title: "Repairs & Service",
    desc: "Straightforward troubleshooting and repair for malfunctioning heating and cooling systems.",
    icon: "ShieldAlert"
  },
  {
    title: "Quality Workmanship",
    desc: "Clean line-sets, secure sheet metal, and meticulous attention to every connection.",
    icon: "CheckSquare"
  }
];

export const TRUST_PILLARS = CORE_CAPABILITIES;

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "new-construction",
    title: "New Construction HVAC",
    shortDesc: "Professional HVAC installation for new homes and custom construction.",
    fullDesc: "Getting heating and cooling right starts during the framing phase. We partner with custom home builders and homeowners across the Shelley area to design and install ductwork, equipment, and ventilation cleanly from the ground up.",
    description: "Full mechanical design, duct fabrication, rough-ins, and equipment installation for new homes and custom builds.",
    tag: "Core Specialty",
    badge: "Specialty Focus",
    icon: "Building2",
    features: [
      "Custom ductwork sizing & clean layout routing",
      "Rough-in phase coordination with general contractors",
      "High-efficiency furnace & heat pump integration",
      "Proper airflow distribution to every room",
      "Clean equipment pad & line-set placement"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    bestFor: "Custom homes, general contractors, additions, and residential builds."
  },
  {
    id: "mini-splits",
    title: "Ductless Mini Splits",
    shortDesc: "Efficient heating and cooling solutions for spaces that need flexible temperature control.",
    fullDesc: "Ductless mini split heat pumps deliver pinpoint climate control for areas where traditional ductwork isn't practical or where you need independent room zoning.",
    description: "High-efficiency heat pumps providing individual room zoning, quiet operation, and cold-weather heating performance.",
    tag: "Energy Efficient",
    badge: "Popular Upgrade",
    icon: "Wind",
    features: [
      "Single-zone and multi-zone configurations",
      "Both heating and cooling from a single compact unit",
      "Ideal for bonus rooms, master suites, shops, and basements",
      "Whisper-quiet indoor air handler operation",
      "Individual temperature control for specific zones"
    ],
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
    bestFor: "Additions, sunrooms, master bedrooms, detached shops, or older homes without ducts."
  },
  {
    id: "heating-cooling",
    title: "Full Heating & Cooling",
    shortDesc: "Complete HVAC solutions designed around the needs of the property.",
    fullDesc: "Whether replacing an aged furnace, upgrading to an energy-efficient heat pump, or adding central air conditioning, we size and install complete systems configured specifically for Idaho's seasonal climate swings.",
    description: "Complete furnace replacements, central air conditioning installations, and whole-house climate upgrades.",
    tag: "Complete Comfort",
    icon: "Flame",
    features: [
      "High-efficiency gas furnaces and electric systems",
      "Modern heat pumps for dual heating & cooling capability",
      "Central air conditioning system installations",
      "Ductwork modifications and airflow balancing",
      "Responsible removal and disposal of old units"
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    bestFor: "Homeowners replacing failing units or upgrading entire home comfort."
  },
  {
    id: "cooling-ac",
    title: "Air Conditioning Installation",
    shortDesc: "Beat summer Idaho heatwaves with high SEER air conditioning setups.",
    fullDesc: "Ensure dependable cooling with properly sized condenser coils, tidy line-sets, and balanced supply air throughout your home.",
    description: "High-performance AC additions and replacements engineered to handle hot Idaho summer days effortlessly.",
    tag: "Summer Comfort",
    icon: "Snowflake",
    features: [
      "High-efficiency condenser matching",
      "Refrigerant line-set protection covers",
      "Thermostat integration & digital control",
      "Quiet outdoor operation"
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop",
    bestFor: "Homes needing central AC added or older compressors replaced."
  },
  {
    id: "repairs",
    title: "System Repairs & Service",
    shortDesc: "When your heating or cooling system isn't working properly, contact MTD Heating.",
    fullDesc: "If your furnace won't ignite in the dead of winter, or your AC blows lukewarm air during July heat, get in touch to discuss the issue. We provide honest evaluations, identify the true cause of failure, and offer practical repair options.",
    description: "Direct troubleshooting, part replacement, and safety checks to get your heat or AC restored quickly.",
    tag: "Diagnostic Service",
    icon: "Wrench",
    features: [
      "Furnace ignition & heating failure diagnosis",
      "Air conditioning airflow & cooling issues",
      "Blower motor and capacitor troubleshooting",
      "Thermostat wiring and electrical checkups"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    bestFor: "Homeowners experiencing unexpected heating or cooling outages."
  }
];

export const CORE_SERVICES = SERVICES_DATA;

export const NEW_CONSTRUCTION_DETAILS = {
  capabilities: [
    "Complete manual J/D load calculations & CFM sizing",
    "Tight mastic & foil tape duct sealing",
    "Framing-phase rough-in alignment with other trades",
    "Zoned dampers and multi-floor duct design",
    "Clean exterior penetrations and condenser pads",
    "Code-compliant combustion venting and fresh air intake"
  ],
  phases: [
    {
      step: "01",
      title: "Plan Review & Load Sizing",
      description: "We analyze your blueprints, room orientations, and insulation specs to calculate exact heating and cooling loads."
    },
    {
      step: "02",
      title: "Duct Layout & Rough-In",
      description: "Installing supply trunks, return drops, and branch runs with rigid sheet metal before drywall goes up."
    },
    {
      step: "03",
      title: "Equipment & Line Set Setting",
      description: "Setting furnaces, heat pumps, air handlers, and running nitrogen-purged refrigeration lines."
    },
    {
      step: "04",
      title: "Trim-Out & Startup Testing",
      description: "Mounting registers, wiring smart thermostats, testing static pressure, and verifying airflow balance."
    }
  ]
};

export const MINI_SPLIT_DETAILS = {
  benefits: [
    {
      title: "Targeted Room Zoning",
      desc: "Heat or cool only the rooms you are actively using without paying to condition the entire structure."
    },
    {
      title: "No Duct Losses",
      desc: "Ductless systems deliver conditioned air directly into the space, eliminating standard attic duct heat loss."
    },
    {
      title: "Whisper-Quiet Sound",
      desc: "Modern indoor heads operate as quietly as 19 dB—quieter than a whisper in a library."
    },
    {
      title: "Year-Round Dual Climate",
      desc: "Combines powerful winter heating and crisp summer air conditioning in a single compact system."
    }
  ],
  useCases: [
    {
      title: "Detached Shops & Garages",
      desc: "Keep your workspace comfortable through winter projects and summer maintenance."
    },
    {
      title: "Above-Garage Bonus Rooms",
      desc: "Fix the notorious hot-in-summer, freezing-in-winter room with dedicated temperature control."
    },
    {
      title: "Home Additions & Remodels",
      desc: "Add climate control without the expense of extending existing ductwork trunks."
    },
    {
      title: "Master Bedroom Suites",
      desc: "Sleep at your ideal temperature all night without changing the whole home thermostat."
    }
  ]
};

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-1",
    title: "Custom Residential Rough-In",
    category: "New Construction",
    location: "Shelley, ID",
    description: "Full new construction HVAC rough-in featuring clean supply trunks, dedicated returns, and tight duct sealing.",
    tag: "Rough-In",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "proj-2",
    title: "Multi-Zone Mini Split Installation",
    category: "Mini Splits",
    location: "Bingham County",
    description: "High-efficiency multi-zone ductless heat pump system providing custom climate control for master suite and living room.",
    tag: "Ductless",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "proj-3",
    title: "Complete Furnace & AC System",
    category: "Heating",
    location: "Shelley, ID",
    description: "High-efficiency furnace and cooling coil replacement with clean transition fabrication and filter rack access.",
    tag: "Replacement",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "proj-4",
    title: "Clean Outdoor Condenser Setup",
    category: "Cooling",
    location: "Shelley Area",
    description: "Properly leveled outdoor condenser installed on an elevated equipment pad with protective line-set cover.",
    tag: "AC Pad",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "proj-5",
    title: "Bonus Room Mini Split Retrofit",
    category: "Mini Splits",
    location: "East Idaho",
    description: "Added dedicated ductless comfort to an above-garage bonus room that previously suffered from extreme temperatures.",
    tag: "Retrofit",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "proj-6",
    title: "Precision Mechanical Room Installation",
    category: "Installations",
    location: "Shelley, ID",
    description: "Tight mechanical room layout with organized wiring, clean drain lines, and accessible service access points.",
    tag: "Mechanical",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Get In Touch",
    description: "Tell us what you need help with—whether it's a new build, mini split, system upgrade, or equipment repair.",
    highlight: "Direct phone: (208) 520-8096",
    icon: "PhoneCall"
  },
  {
    step: "02",
    title: "Site & Plan Review",
    description: "We review your property, architectural plans, or existing unit to assess loads and layout requirements.",
    highlight: "Straightforward recommendations",
    icon: "Ruler"
  },
  {
    step: "03",
    title: "Clear Proposal & Schedule",
    description: "You receive an honest written estimate with transparent scope of work and confirmed project dates.",
    highlight: "No hidden charges or delays",
    icon: "CheckCheck"
  },
  {
    step: "04",
    title: "Done Right Installation",
    description: "Craftsmanship in every sheet metal joint, refrigerant line, and startup test. Heating and cooling done right.",
    highlight: "Verified airflow & performance",
    icon: "Wrench"
  }
];

export const ABOUT_INFO = {
  story: "MTD Heating is a locally operated HVAC specialist based in Shelley, Idaho. Founded on the principle of straightforward, high-standard workmanship, we believe heating and cooling should be installed once and installed right.",
  pillars: [
    "No high-pressure sales reps—speak directly with technicians",
    "Specialized in new construction framing & duct rough-ins",
    "Clean, tidy line-sets and sealed sheet metal transitions",
    "Prompt response across Shelley, Firth, and Bingham County"
  ]
};

export const SERVICE_AREAS = [
  { name: "Shelley", primary: true },
  { name: "Firth", primary: false },
  { name: "Idaho Falls", primary: false },
  { name: "Blackfoot", primary: false },
  { name: "Ammon", primary: false },
  { name: "Basalt", primary: false }
];

export const TESTIMONIALS_DATA = [
  {
    author: "Tyler R.",
    location: "Shelley, ID",
    projectType: "New Construction",
    rating: 5,
    comment: "MTD handled the complete HVAC rough-in on our new home build in Shelley. Super clean ductwork, on time with the framing schedule, and the airflow in every room is balanced."
  },
  {
    author: "Dave M.",
    location: "Bingham County",
    projectType: "Mini Split Install",
    rating: 5,
    comment: "Had them put a ductless mini split in our detached 30x40 shop. Heats it fast in freezing weather and keeps it icy cold all summer. Great workmanship on the exterior lines."
  },
  {
    author: "Sarah K.",
    location: "Idaho Falls Area",
    projectType: "Furnace & AC Replacement",
    rating: 5,
    comment: "Straightforward pricing and honest communication. Didn't try to upsell us on things we didn't need. Cleaned up everything when the install was done."
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "What HVAC services does MTD Heating provide?",
    a: "MTD Heating specializes in new construction HVAC installations, ductless mini split systems, full heating and cooling system installations (furnaces, heat pumps, and AC), and practical diagnostic repairs."
  },
  {
    q: "Do you work on new construction projects?",
    a: "Yes, new construction is one of our primary specialties. We collaborate with general contractors and custom homeowners to plan duct routing, size equipment properly, complete rough-in mechanicals, and install the final trim-out."
  },
  {
    q: "What are mini split systems?",
    a: "Mini split systems (or ductless heat pumps) provide both heating and air conditioning directly into specific rooms without requiring extensive ductwork. They are ideal for home additions, master bedrooms, finished basements, and shops."
  },
  {
    q: "Do you provide heating and cooling repairs?",
    a: "Yes. When your furnace or air conditioner isn't functioning properly, call us at (208) 520-8096 to discuss the symptoms. We'll diagnose the issue and provide straightforward repair options."
  },
  {
    q: "How do I request a quote?",
    a: "You can call us directly at (208) 520-8096, send an email to menofmetal@hotmail.com, or fill out the Request a Quote form on this website with details about your home or project."
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Shelley, Idaho and serve homeowners and builders throughout Shelley and surrounding Southeast Idaho communities including Firth, Idaho Falls, and Blackfoot."
  },
  {
    q: "Can I send photos or blueprints of my HVAC project?",
    a: "Yes! You can attach photos or describe project details through our online quote form or email your plans directly to menofmetal@hotmail.com for review."
  }
];
