export interface ServiceData {
  slug: string;
  title: string;
  titleHighlight: string;
  badge: string;
  intro: string;
  whatWeProvide: string[];
  requirements: string[];
  infoBox: {
    heading: string;
    body: string;
  };
  position: string;
}

export const services: ServiceData[] = [
  {
    slug: "warehouse",
    title: "Warehouse",
    titleHighlight: "Operations",
    badge: "Warehousing & Logistics",
    intro:
      "We supply experienced warehouse operatives for pick & pack, loading & unloading, stock control and general warehouse duties across distribution centres and logistics sites throughout the UK.",
    whatWeProvide: [
      "Pickers and packers for order fulfilment centres",
      "Loaders and unloaders for inbound and outbound freight",
      "Stock checkers and inventory controllers",
      "Goods-in and goods-out operatives",
      "Despatch and returns teams",
      "Night shift and weekend cover available",
    ],
    requirements: [
      "Previous warehouse experience preferred (not always required)",
      "Ability to work in a physically active environment",
      "Right to work in the UK (sharecode or passport required)",
      "Reliability and good timekeeping",
      "Safety awareness and willingness to follow site rules",
    ],
    infoBox: {
      heading: "Shift Patterns",
      body:
        "We offer day shifts, night shifts, early starts and weekend cover. Both temporary and long-term placements are available depending on client needs.",
    },
    position: "Warehouse Operative",
  },
  {
    slug: "forklift",
    title: "Forklift",
    titleHighlight: "Operators",
    badge: "FLT & Reach Truck",
    intro:
      "Agentsify UK places certified forklift operators across warehouses, distribution centres and construction sites. We cover counterbalance, reach truck and VNA — all operators are licence-verified before placement.",
    whatWeProvide: [
      "Counterbalance forklift operators (FLT)",
      "Reach truck operators for high-racking environments",
      "Very Narrow Aisle (VNA) operators",
      "Pallet truck and bendi-truck operators",
      "Yard / shunting operators",
      "Full licence verification before every placement",
    ],
    requirements: [
      "Valid RTITB or ITSSAR forklift licence required",
      "Minimum 6 months operating experience",
      "Right to work in the UK",
      "Good safety record",
      "Willingness to work varied shift patterns",
    ],
    infoBox: {
      heading: "Licence Verification",
      body:
        "All forklift operators are pre-screened and their licences verified before they are sent to site. We only place operators who meet the required safety and certification standards.",
    },
    position: "Forklift / FLT Operator",
  },
  {
    slug: "hospitality",
    title: "Hospitality &",
    titleHighlight: "Dining Staff",
    badge: "Restaurants & Events",
    intro:
      "From busy restaurant kitchens to large-scale catering events, Agentsify UK supplies experienced hospitality staff at short notice. We cover front-of-house, kitchen and bar roles across the UK.",
    whatWeProvide: [
      "Kitchen assistants, chefs and kitchen porters",
      "Waiting staff and food runners",
      "Bar staff and mixologists",
      "Front-of-house hosts and supervisors",
      "Event catering and banqueting teams",
      "Cleaning and post-event teams",
    ],
    requirements: [
      "Previous hospitality or catering experience",
      "Food hygiene awareness (Level 2 certificate preferred)",
      "Smart professional appearance",
      "Right to work in the UK",
      "Flexible availability including evenings and weekends",
    ],
    infoBox: {
      heading: "Urgent Cover",
      body:
        "Need last-minute cover for tonight's service? We can often place experienced hospitality staff with as little as a few hours notice. Contact us marked URGENT COVER.",
    },
    position: "Hospitality - Front of House",
  },
  {
    slug: "driving",
    title: "HGV & Truck",
    titleHighlight: "Drivers",
    badge: "LGV, HGV & Multi-Drop",
    intro:
      "Agentsify UK provides qualified LGV and HGV drivers for trunking, multi-drop delivery, and long-haul routes. All drivers are CPC-verified, licence-checked and have a clean record before placement.",
    whatWeProvide: [
      "Class 1 HGV / articulated lorry drivers",
      "Class 2 LGV / rigid body drivers",
      "Multi-drop delivery drivers (van and 7.5t)",
      "Trunking and overnight linehaul",
      "Temperature-controlled (fridge) driving",
      "On-site shunting and yard work",
    ],
    requirements: [
      "Valid C+E (Class 1) or C (Class 2) driving licence",
      "Current CPC (Driver Certificate of Professional Competence)",
      "Valid digital tachograph card",
      "Clean or near-clean driving licence",
      "Right to work in the UK",
      "Minimum 1 year commercial driving experience",
    ],
    infoBox: {
      heading: "Compliance Checks",
      body:
        "Every driver placed by Agentsify UK is fully licence-checked, CPC-verified and tachograph-compliant. We carry out full background checks before any driver reaches the cab.",
    },
    position: "HGV / Truck Driver (Class 1)",
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
