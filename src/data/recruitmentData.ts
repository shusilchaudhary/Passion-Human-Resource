import sectorLogisticsPortrait from '../assets/images/sector_logistics_worker_1795355263931.webp';
import sectorConstructionPortrait from '../assets/images/sector_construction_engineer_1795355266247.webp';
import sectorHospitalityPortrait from '../assets/images/sector_hospitality_chef_1795355265802.webp';
import sectorAgriculturePortrait from '../assets/images/sector_agriculture_specialist_1795355266021.webp';
import kathmanduSkylineBanner from '../assets/images/kathmandu_corporate_skyline_1795355265582.webp';
import logisticsLandscapeBanner from '../assets/images/logistics_landscape_banner_1795357071489.webp';
import constructionLandscapeBanner from '../assets/images/construction_landscape_banner_1795357073324.webp';
import hospitalityLandscapeBanner from '../assets/images/hospitality_landscape_banner_1795357073475.webp';
import agricultureLandscapeBanner from '../assets/images/agriculture_landscape_banner_1795357073665.webp';

export interface WorkforcePanel {
  id: string;
  categorySlug: string;
  sector: string;
  roleSample: string;
  readinessWindow: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProofMetric {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  turnaround: string;
  summary: string;
  deliverables: string[];
  complianceNote: string;
}

export interface RegionalCorridor {
  id: string;
  region: string;
  countries: string;
  activeWorkforce: string;
  leadTime: string;
  primaryTrades: string[];
}

export interface SectorVertical {
  id: string;
  categorySlug: string;
  name: string;
  category: 'industrial' | 'hospitality';
  keyRoles: string;
  skillTiers: string;
  annualQuota: string;
  vettingStandard: string;
}

export interface ProvinceHub {
  id: string;
  name: string;
  capital: string;
  specialty: string;
  centerX: number;
  centerY: number;
  path: string;
}

export const AGENCY_PROFILE = {
  brandName: 'Passion Human Resource',
  established: 'Est. 2015',
  location: 'Kathmandu, Nepal',
  licenseLabel: 'Govt. Lic. No. 897/079/080',
  dofeAuthority: 'Department of Foreign Employment, Government of Nepal',
  email: 'info@passionhr.com',
  recruitmentEmail: 'operations@passionhr.com',
  welfareEmail: 'welfare@passionhr.com',
  phone: '+977-1-4123456',
  address: 'Basundhara Ring Road, Ward 03, Kathmandu 44600, Nepal',
  officeHours: 'Sun–Fri · 09:30–17:30 NPT',
};

export const HERO_WORKFORCE_PANELS: WorkforcePanel[] = [
  {
    id: 'logistics',
    categorySlug: 'logistics-and-supply-chain',
    sector: 'Logistics & Supply Chain',
    roleSample: 'Warehouse Supervisors & Fleet Drivers',
    readinessWindow: '14-Day Shortlist',
    imageSrc: sectorLogisticsPortrait,
    imageAlt: 'Nepalese logistics supervisor with inventory tablet inside an automated distribution facility',
  },
  {
    id: 'construction',
    categorySlug: 'civil-and-industrial',
    sector: 'Civil & Industrial',
    roleSample: 'Site Technicians & Heavy Operators',
    readinessWindow: '21-Day Trade Test',
    imageSrc: sectorConstructionPortrait,
    imageAlt: 'Nepalese civil construction engineer wearing yellow safety helmet at an infrastructure site',
  },
  {
    id: 'hospitality',
    categorySlug: 'hospitality-and-culinary',
    sector: 'Hospitality & Culinary',
    roleSample: 'Sous-Chefs, Stewards & Guest Staff',
    readinessWindow: '10-Day Assessment',
    imageSrc: sectorHospitalityPortrait,
    imageAlt: 'Nepalese executive sous-chef in white double-breasted coat in a commercial hotel kitchen',
  },
  {
    id: 'agriculture',
    categorySlug: 'commercial-agriculture',
    sector: 'Commercial Agriculture',
    roleSample: 'Greenhouse & Agri-Tech Specialists',
    readinessWindow: '14-Day Shortlist',
    imageSrc: sectorAgriculturePortrait,
    imageAlt: 'Nepalese commercial agriculture specialist inspecting hydroponic greenhouse crops',
  },
];

export const KATHMANDU_SKYLINE_IMAGE = {
  src: kathmanduSkylineBanner,
  alt: 'Panoramic morning view of Kathmandu Valley and Himalayan peaks from central corporate district',
};

export const PROOF_METRICS: ProofMetric[] = [
  {
    id: 'retention',
    value: '98.2%',
    label: 'Employer Contract Retention',
    context: 'Across 24-month overseas contracts',
  },
  {
    id: 'deployments',
    value: '12,400+',
    label: 'Verified Deployments',
    context: 'Placed safely since 2015',
  },
  {
    id: 'markets',
    value: '18',
    label: 'Destination Markets',
    context: 'GCC, Europe & North America',
  },
  {
    id: 'turnaround',
    value: '14 Days',
    label: 'Pre-Screened Shortlist',
    context: 'From attested Demand Letter',
  },
];

export const RECRUITMENT_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Demand Attestation & Targeted Sourcing',
    turnaround: 'Days 01–07',
    summary:
      'We verify employer Demand Letters, Power of Attorney, and employment contracts through Nepalese diplomatic missions and the Department of Foreign Employment (DOFE), then source candidates across all seven provinces.',
    deliverables: [
      'Embassy & DOFE pre-approval verification checklist',
      'Bilingual job advertisement & regional candidate mobilization',
      'Pre-screened longlist mapped to exact wage & safety terms',
    ],
    complianceNote: 'Zero unauthorized sub-agent fees; direct candidate registry.',
  },
  {
    number: '02',
    title: 'Practical Trade Testing & Skill Vetting',
    turnaround: 'Days 08–14',
    summary:
      'Shortlisted applicants complete hands-on evaluations at certified technical workshops in Kathmandu, covering equipment operation, hospitality service drills, and English or Arabic workplace proficiency.',
    deliverables: [
      'Recorded video trade tests & practical scorecard dossiers',
      'Employer-led virtual or in-person technical interviews',
      'Verified prior employment & criminal clearance screening',
    ],
    complianceNote: 'Conducted alongside employer technical supervisors.',
  },
  {
    number: '03',
    title: 'Medical Clearance & Visa Documentation',
    turnaround: 'Days 15–28',
    summary:
      'Selected candidates undergo GAMCA / destination-accredited health examinations, biometric processing, insurance enrollment, and final DOFE labor permit issuance.',
    deliverables: [
      'Accredited medical fitness & vaccination certification',
      'Visa stamping, Foreign Employment Welfare Fund & insurance',
      'Final DOFE labor clearance sticker & e-ticket coordination',
    ],
    complianceNote: 'Real-time batch milestone ledger shared with employer HR.',
  },
  {
    number: '04',
    title: 'Pre-Departure Orientation & Mobilization',
    turnaround: 'Days 29–35',
    summary:
      'Before boarding, every cohort completes mandatory cultural, labor-law, and occupational safety orientation, followed by coordinated airport dispatch and 90-day post-arrival welfare check-ins.',
    deliverables: [
      'Destination labor law, HSE safety & contract briefing',
      'Airport departure protocol & arrival manifest confirmation',
      'Dedicated employer & worker grievance resolution desk',
    ],
    complianceNote: 'Continuous post-deployment retention support.',
  },
];

export const REGIONAL_CORRIDORS: RegionalCorridor[] = [
  {
    id: 'gcc',
    region: 'Middle East & GCC',
    countries: 'UAE · Saudi Arabia · Qatar · Kuwait · Oman',
    activeWorkforce: '8,200+ Deployed',
    leadTime: '28–35 Days',
    primaryTrades: [
      'Civil Infrastructure & MEP Trades',
      'Heavy Fleet & Port Logistics',
      'Hotel Operations & Facility Security',
    ],
  },
  {
    id: 'europe',
    region: 'Central & Southern Europe',
    countries: 'Romania · Croatia · Malta · Portugal · Poland',
    activeWorkforce: '2,900+ Deployed',
    leadTime: '45–65 Days',
    primaryTrades: [
      'Food Processing & Commercial Warehousing',
      'Resort Hospitality & Culinary Brigades',
      'Precision Manufacturing & Welding',
    ],
  },
  {
    id: 'americas-asia',
    region: 'North America & East Asia',
    countries: 'Canada · Japan · South Korea · Malaysia',
    activeWorkforce: '1,300+ Deployed',
    leadTime: '40–60 Days',
    primaryTrades: [
      'Controlled-Environment Agriculture',
      'Long-Haul Logistics & Technical Assembly',
      'Institutional Food Service & Care Support',
    ],
  },
];

export const SECTOR_VERTICALS: SectorVertical[] = [
  {
    id: 'civil-construction',
    categorySlug: 'civil-and-industrial',
    name: 'Civil & Industrial Construction',
    category: 'industrial',
    keyRoles: 'Steel Fixers, Formwork Carpenters, MEP Electricians, Tower Crane Operators',
    skillTiers: 'Skilled · Semi-Skilled · Supervisors',
    annualQuota: '3,400+ / yr',
    vettingStandard: 'Practical Workshop Trade Test',
  },
  {
    id: 'logistics-supply',
    categorySlug: 'logistics-and-supply-chain',
    name: 'Logistics, Fleet & Warehousing',
    category: 'industrial',
    keyRoles: 'Reach Truck Operators, Heavy Drivers, Inventory Controllers, Dispatch Leads',
    skillTiers: 'Skilled · Certified Drivers',
    annualQuota: '2,800+ / yr',
    vettingStandard: 'License Verification & Yard Trial',
  },
  {
    id: 'hospitality-culinary',
    categorySlug: 'hospitality-and-culinary',
    name: 'Hospitality, Culinary & Resorts',
    category: 'hospitality',
    keyRoles: 'Sous-Chefs, Commis Chefs, Front Office Associates, Housekeeping Supervisors',
    skillTiers: 'Technical · Hospitality Diploma',
    annualQuota: '2,100+ / yr',
    vettingStandard: 'Live Culinary & Language Audit',
  },
  {
    id: 'commercial-agri',
    categorySlug: 'commercial-agriculture',
    name: 'Commercial Agriculture & Agri-Tech',
    category: 'industrial',
    keyRoles: 'Hydroponic Technicians, Packhouse Graders, Irrigation Operators, Dairy Hands',
    skillTiers: 'Semi-Skilled · Technical',
    annualQuota: '1,650+ / yr',
    vettingStandard: 'Field Aptitude & Safety Assessment',
  },
  {
    id: 'security-facility',
    categorySlug: 'security-and-facility',
    name: 'Security & Facility Management',
    category: 'hospitality',
    keyRoles: 'PSBD / SIRA Security Guards, HVAC Technicians, Commercial Cleaning Teams',
    skillTiers: 'Certified · Former Service Personnel',
    annualQuota: '1,900+ / yr',
    vettingStandard: 'Physical Fitness & Background Audit',
  },
];

// Simplified architectural polygons representing Nepal's 7 provinces (west to east)
export const NEPAL_PROVINCES: ProvinceHub[] = [
  {
    id: 'sudurpashchim',
    name: 'Sudurpashchim',
    capital: 'Dhangadhi',
    specialty: 'Civil Masonry & Agro-Operations',
    centerX: 62,
    centerY: 64,
    path: 'M 26 42 L 62 28 L 96 48 L 92 98 L 38 96 L 22 72 Z',
  },
  {
    id: 'karnali',
    name: 'Karnali',
    capital: 'Birendranagar',
    specialty: 'Highland Infrastructure & Security',
    centerX: 138,
    centerY: 64,
    path: 'M 62 28 L 154 24 L 194 64 L 166 102 L 92 98 L 96 48 Z',
  },
  {
    id: 'lumbini',
    name: 'Lumbini',
    capital: 'Deukhuri',
    specialty: 'Heavy Fleet & Logistics Drivers',
    centerX: 168,
    centerY: 126,
    path: 'M 92 98 L 166 102 L 236 116 L 232 154 L 122 146 L 86 124 Z',
  },
  {
    id: 'gandaki',
    name: 'Gandaki',
    capital: 'Pokhara',
    specialty: 'Hospitality, Culinary & Former Gurkha Security',
    centerX: 236,
    centerY: 96,
    path: 'M 154 24 L 266 56 L 284 106 L 236 116 L 166 102 L 194 64 Z',
  },
  {
    id: 'bagmati',
    name: 'Bagmati (HQ)',
    capital: 'Kathmandu',
    specialty: 'Central Trade Testing, DOFE & Medical Processing',
    centerX: 318,
    centerY: 128,
    path: 'M 266 56 L 358 92 L 366 154 L 294 164 L 232 154 L 236 116 L 284 106 Z',
  },
  {
    id: 'madhesh',
    name: 'Madhesh',
    capital: 'Janakpur',
    specialty: 'MEP Technicians, Welders & Warehouse Teams',
    centerX: 356,
    centerY: 184,
    path: 'M 294 164 L 366 154 L 424 188 L 418 206 L 286 190 Z',
  },
  {
    id: 'koshi',
    name: 'Koshi',
    capital: 'Biratnagar',
    specialty: 'Manufacturing, Tea Agri-Tech & Service Staff',
    centerX: 432,
    centerY: 162,
    path: 'M 358 92 L 456 122 L 478 176 L 424 188 L 366 154 Z',
  },
];

export const COLOR_TOKENS = [
  { name: 'Canvas White', token: '--bg-canvas', hex: '#FFFFFF', role: '60% Dominant Field' },
  { name: 'Alabaster Slate', token: '--bg-subtle', hex: '#F8FAFC', role: 'Alternating Surface' },
  { name: 'Midnight Navy', token: '--surface-navy', hex: '#0B1F3A', role: '30% Structural & CTA' },
  { name: 'Navy Elevated', token: '--surface-navy-alt', hex: '#132B4D', role: 'Dark Band Containers' },
  { name: 'Primary Ink', token: '--text-primary', hex: '#0F172A', role: 'Headlines & Body' },
  { name: 'Secondary Ink', token: '--text-secondary', hex: '#475569', role: 'Metadata & Support' },
  { name: 'Hairline Border', token: '--border-hairline', hex: '#E2E8F0', role: '1px Structural Rules' },
  { name: 'Sovereign Gold', token: '--accent-gold', hex: '#B8860B', role: '10% Accent Rules' },
  { name: 'Gold Highlight', token: '--accent-gold-light', hex: '#E2B857', role: 'On-Navy Emphasis' },
];

export interface SuccessStory {
  id: string;
  perspective: 'employer' | 'candidate';
  perspectiveLabel: string;
  location: string;
  sector: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  outcomeMetric: string;
  year: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'emp-uae-logistics',
    perspective: 'employer',
    perspectiveLabel: 'Employer Partner',
    location: 'Dubai, UAE',
    sector: 'Logistics & Supply Chain',
    quote:
      'Before partnering with Passion Human Resource, our cold-chain hubs faced 22% onboarding delays from unverified driver certifications. Their Kathmandu yard trials delivered 64 licensed fleet operators on schedule with 97% two-year retention.',
    name: 'Tariq Al-Mansoori',
    role: 'Director of Fleet Operations',
    organization: 'Gulf Meridian Logistics LLC',
    outcomeMetric: '64 Operators · 31 Days',
    year: '2025',
  },
  {
    id: 'cand-croatia-culinary',
    perspective: 'candidate',
    perspectiveLabel: 'Placed Candidate',
    location: 'Dubrovnik, Croatia',
    sector: 'Hospitality & Culinary',
    quote:
      'After six years in Kathmandu hotel kitchens, I worried about hidden agency fees and unclear overseas contracts. Passion Human Resource arranged transparent DOFE documentation, practical culinary testing, and full visa briefing before departure.',
    name: 'Sunita Gurung',
    role: 'Executive Sous-Chef',
    organization: 'Adriatic Coast Resorts Group',
    outcomeMetric: '3-Year EU Permit Renewed',
    year: '2025',
  },
  {
    id: 'emp-qatar-civil',
    perspective: 'employer',
    perspectiveLabel: 'Employer Partner',
    location: 'Doha, Qatar',
    sector: 'Civil & Industrial Construction',
    quote:
      'Previous recruitment vendors sent generic CVs that failed on-site MEP safety checks. Passion Human Resource invited our site engineers to live workshop trade tests in Kathmandu, cutting rework and mobilizing 110 certified technicians in one cohort.',
    name: 'Henrik Lindqvist',
    role: 'Regional Project Mobilization Lead',
    organization: 'Nordic-Gulf Infrastructure Partners',
    outcomeMetric: '110 Technicians · 98% Pass',
    year: '2024',
  },
  {
    id: 'cand-uae-warehouse',
    perspective: 'candidate',
    perspectiveLabel: 'Placed Candidate',
    location: 'Jebel Ali, UAE',
    sector: 'Logistics & Supply Chain',
    quote:
      'I started as a reach-truck operator after completing Passion Human Resource’s pre-departure warehouse safety course. Their orientation prepared me for automated WMS terminals, and within eighteen months I was promoted to shift supervisor.',
    name: 'Bikash Thapa Magar',
    role: 'Zone Inventory Supervisor',
    organization: 'Crescent Distribution Hub',
    outcomeMetric: 'Promoted in 18 Months',
    year: '2024',
  },
  {
    id: 'emp-canada-agri',
    perspective: 'employer',
    perspectiveLabel: 'Employer Partner',
    location: 'Ontario, Canada',
    sector: 'Commercial Agriculture',
    quote:
      'Scaling year-round hydroponic greenhouses required seasonal specialists familiar with climate-controlled irrigation. Their team pre-vetted 38 Nepalese agri-technicians with verified English fluency, lifting our packhouse yield consistency by 19%.',
    name: 'Claire Tremblay',
    role: 'VP of Human Resources',
    organization: 'Great Lakes Controlled Growers',
    outcomeMetric: '38 Specialists · +19% Yield',
    year: '2025',
  },
  {
    id: 'cand-malta-facility',
    perspective: 'candidate',
    perspectiveLabel: 'Placed Candidate',
    location: 'Valletta, Malta',
    sector: 'Security & Facility Management',
    quote:
      'Every step—from medical examination to embassy attestation and airport dispatch—was tracked openly with my family informed throughout. When I arrived in Malta, my accommodation and contract matched the Kathmandu briefing word for word.',
    name: 'Dipendra Rai',
    role: 'Senior HVAC & Facility Technician',
    organization: 'Mediterranean Commercial Estates',
    outcomeMetric: 'Zero Contract Discrepancies',
    year: '2025',
  },
];

export interface FaqItem {
  id: string;
  number: string;
  audience: 'Employer' | 'Candidate';
  topic: string;
  question: string;
  answer: string;
  referenceNote: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-01',
    number: '01',
    audience: 'Employer',
    topic: 'Demand Attestation',
    question: 'What documents are required from an overseas employer to initiate recruitment?',
    answer:
      'Employers provide a formal Demand Letter, Power of Attorney, Employment Contract template, Agency Agreement, and Guarantee Letter attested by the local Chamber of Commerce and the Embassy of Nepal in the destination country. Our compliance desk reviews drafts within 24 hours before submission to the Department of Foreign Employment (DOFE).',
    referenceNote: 'DOFE Pre-Approval Turnaround: 3–5 Working Days',
  },
  {
    id: 'faq-02',
    number: '02',
    audience: 'Candidate',
    topic: 'Fee & Ethical Policy',
    question: 'Are applicants charged unauthorized recruitment or sub-agent fees?',
    answer:
      'No. Passion Human Resource enforces strict compliance with Government of Nepal foreign employment regulations and employer-pays frameworks. Candidates register directly at our Kathmandu office or verified provincial drives without unauthorized middlemen, and receive itemized official receipts for any statutory medical or government welfare fees.',
    referenceNote: 'Audited Direct-Registry Standard · Govt. Lic. No. 897/079/080',
  },
  {
    id: 'faq-03',
    number: '03',
    audience: 'Employer',
    topic: 'Trade Testing',
    question: 'How does Passion Human Resource verify technical skills before final selection?',
    answer:
      'Every shortlisted candidate completes hands-on evaluations at accredited Kathmandu trade workshops, heavy-vehicle yards, or commercial kitchen facilities. Employers may attend in person or evaluate live video assessments and scored practical dossiers prior to issuing job offers.',
    referenceNote: '14-Day Pre-Screened Shortlist SLA',
  },
  {
    id: 'faq-04',
    number: '04',
    audience: 'Candidate',
    topic: 'Documentation',
    question: 'What personal documents must a candidate prepare before applying for an overseas vacancy?',
    answer:
      'Applicants need a valid machine-readable or e-passport (minimum 12 months remaining validity), Nepali citizenship certificate, relevant trade or academic certificates, prior experience letters where applicable, and passport-sized photographs. Original passports are only collected with an official receipt once a visa process is formally triggered.',
    referenceNote: 'Minimum Passport Validity: 12 Months',
  },
  {
    id: 'faq-05',
    number: '05',
    audience: 'Employer',
    topic: 'Mobilization Timeline',
    question: 'How long does end-to-end deployment take from Demand Letter approval to arrival?',
    answer:
      'For GCC corridors (UAE, Qatar, Saudi Arabia, Kuwait, Oman), complete mobilization typically takes 28 to 35 days from attested Demand Letter receipt. European and North American placements require 45 to 65 days depending on destination work-permit and embassy biometric schedules.',
    referenceNote: 'GCC: 28–35 Days · Europe: 45–65 Days',
  },
  {
    id: 'faq-06',
    number: '06',
    audience: 'Candidate',
    topic: 'Medical & Orientation',
    question: 'Is medical screening and pre-departure orientation mandatory before travel?',
    answer:
      'Yes. All selected candidates must pass destination-accredited medical fitness examinations (such as GAMCA for GCC states) and complete mandatory Pre-Departure Orientation Training (PDOT) covering host-country labor laws, workplace safety, financial remittance, and emergency embassy contacts.',
    referenceNote: 'Accredited Medical & PDOT Certification Required',
  },
  {
    id: 'faq-07',
    number: '07',
    audience: 'Employer',
    topic: 'Contract Replacement',
    question: 'What warranty or replacement support applies if a deployed worker fails probation?',
    answer:
      'Our Agency Agreements include a structured 90-day probation assurance period. If a deployed worker is found medically unfit or unable to meet the verified trade standard specified in the original Demand Letter, we coordinate a qualified replacement cohort under agreed commercial terms.',
    referenceNote: '90-Day Post-Arrival Welfare & Probation Desk',
  },
  {
    id: 'faq-08',
    number: '08',
    audience: 'Candidate',
    topic: 'Grievance Support',
    question: 'How can deployed workers or families contact the agency after departure?',
    answer:
      'Every deployed cohort receives direct 24/7 contact channels to our Kathmandu Post-Arrival Welfare & Grievance Desk alongside host-country embassy helplines. Our team conducts scheduled 30-day and 90-day check-ins to verify accommodation, timely wage disbursement, and contract compliance.',
    referenceNote: 'Dedicated Welfare Desk: +977-1-4123456',
  },
];

export type SkillLevel = 'Unskilled' | 'Semi-Skilled' | 'Skilled' | 'Supervisory';
export type CorridorRegion = 'Middle East & GCC' | 'Europe' | 'North America & East Asia';

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  region: CorridorRegion;
  skillLevel: SkillLevel;
  contractType: string;
  monthlySalary: string;
  openings: number;
  demandLot: string;
  employerType: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export interface JobCategoryPageData {
  slug: string;
  title: string;
  shortLabel: string;
  kicker: string;
  summary: string;
  vettingProtocol: string;
  imageSrc: string;
  imageAlt: string;
  jobs: JobOpening[];
}

export const JOB_CATEGORIES: JobCategoryPageData[] = [
  {
    slug: 'logistics-and-supply-chain',
    title: 'Logistics & Supply Chain',
    shortLabel: 'Logistics & Supply Chain',
    kicker: 'Sector Vacancies · Yard & WMS Vetted',
    summary:
      'Active overseas demands for automated fulfillment centers, cold-chain distribution hubs, heavy articulated fleets, and port terminal operations.',
    vettingProtocol: 'Heavy License Audit & Live Forklift / WMS Yard Trial',
    imageSrc: logisticsLandscapeBanner,
    imageAlt: 'Nepalese logistics supervisor inside a modern fulfillment warehouse',
    jobs: [
      {
        id: 'log-01',
        title: 'Logistics & Dispatch Supervisor',
        location: 'Dubai, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Supervisory',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 4,800 – 5,600',
        openings: 8,
        demandLot: 'LT-2026-0412',
        employerType: '3PL Cold-Chain Distribution Hub',
        requirements: [
          '4+ years supervising bonded warehouse or cross-dock dispatch teams',
          'Working proficiency with SAP WM or Oracle WMS handheld scanners',
          'Fluent spoken and written English for daily manifest reporting',
          'Valid passport with minimum 14 months remaining validity',
        ],
        responsibilities: [
          'Coordinate outbound container loading schedules and shift handovers',
          'Audit daily cold-storage temperature logs and cycle count accuracy',
          'Enforce forklift aisle safety and PPE compliance across 30+ staff',
        ],
        benefits: [
          'Company-provided shared supervisor accommodation & transport',
          'Comprehensive UAE medical insurance & paid annual leave',
          'Joining and return airfare covered by employer',
        ],
      },
      {
        id: 'log-02',
        title: 'Heavy Articulated Fleet Driver',
        location: 'Doha, Qatar',
        region: 'Middle East & GCC',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'QAR 2,900 – 3,400',
        openings: 32,
        demandLot: 'LT-2026-0418',
        employerType: 'National Freight & Infrastructure Carrier',
        requirements: [
          'Valid Nepal Heavy Vehicle license (or valid/convertible GCC License No. 4/5)',
          'Minimum 3 years operating 40ft flatbed or refrigerated trailers',
          'Clean road safety record and basic English/Arabic signage comprehension',
        ],
        responsibilities: [
          'Transport containerized freight between Hamad Port and inland industrial zones',
          'Complete pre-trip mechanical inspections and digital POD sign-offs',
          'Adhere strictly to speed telemetry and defensive driving rules',
        ],
        benefits: [
          'Trip allowance bonus on top of fixed monthly basic wage',
          'Free accommodation, food allowance & medical coverage',
          'Overtime paid per Qatar Labor Law',
        ],
      },
      {
        id: 'log-03',
        title: 'Automated Reach-Truck Operator',
        location: 'Zagreb, Croatia',
        region: 'Europe',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 36 Months EU Permit',
        monthlySalary: 'EUR 1,150 – 1,350',
        openings: 18,
        demandLot: 'LT-2026-0425',
        employerType: 'Central European Retail Distribution Center',
        requirements: [
          '2+ years high-bay reach-truck or counterbalance forklift experience (up to 11m)',
          'Practical yard proficiency verified during Kathmandu trade test',
          'Basic conversational English and clean police clearance report',
        ],
        responsibilities: [
          'Execute high-rack pallet put-away and replenishment using RF terminals',
          'Maintain daily battery charging logs and equipment safety checks',
          'Support weekly inventory bin audits in ambient and chilled zones',
        ],
        benefits: [
          'EU work & residence permit sponsorship with renewable term',
          'Subsidized furnished apartment housing near warehouse line',
          'Statutory Croatian health insurance & paid overtime',
        ],
      },
      {
        id: 'log-04',
        title: 'Cold-Chain Warehouse Associate',
        location: 'Jebel Ali, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Semi-Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 1,750 – 2,100',
        openings: 45,
        demandLot: 'LT-2026-0431',
        employerType: 'Port Logistics & Food Import Terminal',
        requirements: [
          '1+ year experience in order picking, pallet wrapping, or barcode scanning',
          'Physically fit for chilled warehouse environments (2°C to 8°C with thermal gear)',
          'Basic English numeracy for SKU verification',
        ],
        responsibilities: [
          'Pick, pack, and shrink-wrap temperature-sensitive grocery pallets',
          'Operate electric pallet jacks safely along designated staging lanes',
          'Maintain strict hygiene and FIFO batch rotation standards',
        ],
        benefits: [
          'Thermal PPE kit, free staff housing & daily bus shuttle',
          'Free medical care & 30 days paid annual leave after 12 months',
          'Zero recruitment fee; employer-paid visa & flight',
        ],
      },
      {
        id: 'log-05',
        title: 'General Cargo Loader & Packer',
        location: 'Dammam, Saudi Arabia',
        region: 'Middle East & GCC',
        skillLevel: 'Unskilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'SAR 1,500 – 1,750',
        openings: 40,
        demandLot: 'LT-2026-0439',
        employerType: 'Eastern Province Port Supply Services',
        requirements: [
          'Physically fit and able to handle 20–25 kg boxed cargo safely',
          'Age 21–38 with valid passport and clean medical fitness clearance',
          'Willingness to work rotating day/night port shifts',
        ],
        responsibilities: [
          'Load and unload palletized commercial goods cleanly inside staging bays',
          'Sort shipment labels by destination zone under supervisor guidance',
          'Keep loading docks clear of debris and follow safety marshaling rules',
        ],
        benefits: [
          'Free air-conditioned camp housing, meals & medical insurance',
          'Scheduled overtime pay & biennial return ticket',
        ],
      },
    ],
  },
  {
    slug: 'civil-and-industrial',
    title: 'Civil & Industrial Construction',
    shortLabel: 'Civil & Industrial',
    kicker: 'Sector Vacancies · Workshop Trade Tested',
    summary:
      'Approved demands for civil infrastructure, MEP engineering, heavy crane operations, and industrial fabrication projects across GCC and Europe.',
    vettingProtocol: 'Hands-On Kathmandu Workshop & Blueprint Trade Evaluation',
    imageSrc: constructionLandscapeBanner,
    imageAlt: 'Nepalese civil construction engineer wearing yellow safety helmet on site',
    jobs: [
      {
        id: 'civ-01',
        title: 'Senior MEP Electrical Technician',
        location: 'Doha, Qatar',
        region: 'Middle East & GCC',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'QAR 2,400 – 2,950',
        openings: 28,
        demandLot: 'LT-2026-0504',
        employerType: 'Tier-1 Commercial Infrastructure Contractor',
        requirements: [
          'Technical diploma or CTEVT Level 2/3 electrical certification',
          '3+ years reading single-line diagrams, DB dressing, and conduit installation',
          'Familiarity with lockout/tagout and site HSE protocols',
        ],
        responsibilities: [
          'Install cable trays, switchgear panels, and commercial lighting circuits',
          'Perform continuity and insulation resistance testing prior to energizing',
          'Coordinate smoothly with civil and HVAC site engineers',
        ],
        benefits: [
          'Employer-provided camp housing, meals & site transport',
          'Full medical insurance & statutory overtime rates',
        ],
      },
      {
        id: 'civ-02',
        title: 'Tower Crane & Heavy Equipment Operator',
        location: 'Riyadh, Saudi Arabia',
        region: 'Middle East & GCC',
        skillLevel: 'Supervisory',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'SAR 3,800 – 4,600',
        openings: 12,
        demandLot: 'LT-2026-0511',
        employerType: 'Urban Rail & High-Rise Civil Consortium',
        requirements: [
          'Valid TUV or recognized third-party crane/heavy operator certification',
          '5+ years operating Liebherr/Potain tower cranes or 50T mobile cranes',
          'Strong radio communication discipline with site riggers',
        ],
        responsibilities: [
          'Execute precision structural steel and precast concrete lifts',
          'Conduct daily wire-rope, limit-switch, and wind-speed safety checks',
          'Maintain daily crane logbooks and coordinate maintenance windows',
        ],
        benefits: [
          'Single or shared senior technician accommodation & flight allowance',
          'Comprehensive medical coverage & performance safety bonus',
        ],
      },
      {
        id: 'civ-03',
        title: 'Structural Steel Fixer & Rebar Lead',
        location: 'Dubai, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 1,900 – 2,350',
        openings: 35,
        demandLot: 'LT-2026-0519',
        employerType: 'Bridge & Marine Civil Works Firm',
        requirements: [
          '3+ years interpreting bar-bending schedules (BBS) on structural sites',
          'Proficiency with hydraulic rebar cutters, benders, and tie-wire rigging',
        ],
        responsibilities: [
          'Cut, bend, and assemble structural reinforcement cages for piers and slabs',
          'Verify bar spacing, cover blocks, and lap lengths before concrete pour',
        ],
        benefits: [
          'Free accommodation, transport, PPE & medical insurance',
          'Paid overtime and annual leave salary',
        ],
      },
      {
        id: 'civ-04',
        title: 'Commercial Formwork & Shuttering Carpenter',
        location: 'Split, Croatia',
        region: 'Europe',
        skillLevel: 'Semi-Skilled',
        contractType: 'Full-Time · 36 Months EU Permit',
        monthlySalary: 'EUR 1,200 – 1,450',
        openings: 24,
        demandLot: 'LT-2026-0526',
        employerType: 'Adriatic Civil Engineering Group',
        requirements: [
          '2+ years experience with PERI or DOKA modular formwork systems',
          'Practical shuttering test completed at Kathmandu facility',
        ],
        responsibilities: [
          'Erect and strip column, wall, and deck formwork systems to tolerance',
          'Inspect shoring props and alignment prior to concrete placement',
        ],
        benefits: [
          'EU residence permit, shared furnished housing & local transit pass',
          'Full European social security and medical enrollment',
        ],
      },
    ],
  },
  {
    slug: 'hospitality-and-culinary',
    title: 'Hospitality & Culinary',
    shortLabel: 'Hospitality & Culinary',
    kicker: 'Sector Vacancies · Live Culinary & English Audit',
    summary:
      'Direct international placements for luxury resort kitchens, five-star hotel front offices, banquet service teams, and housekeeping operations.',
    vettingProtocol: 'Live Kitchen Practical & Spoken English Hospitality Assessment',
    imageSrc: hospitalityLandscapeBanner,
    imageAlt: 'Nepalese executive sous-chef inside a commercial hotel kitchen',
    jobs: [
      {
        id: 'hos-01',
        title: 'Executive Sous-Chef (International Cuisine)',
        location: 'Dubrovnik, Croatia',
        region: 'Europe',
        skillLevel: 'Supervisory',
        contractType: 'Full-Time · 24 Months Renewable',
        monthlySalary: 'EUR 1,650 – 2,100',
        openings: 6,
        demandLot: 'LT-2026-0602',
        employerType: '5-Star Coastal Resort & Convention Hotel',
        requirements: [
          'Culinary diploma + 5 years in 4/5-star hotel Continental or Asian kitchens',
          'Strong HACCP food-safety compliance and brigade scheduling experience',
          'Confident spoken English for international kitchen leadership',
        ],
        responsibilities: [
          'Lead hot and cold kitchen stations during high-occupancy resort service',
          'Manage daily food cost controls, mise-en-place prep, and plating standards',
          'Train junior commis chefs on hygiene and portion consistency',
        ],
        benefits: [
          'Provided staff residence, duty meals & seasonal service bonus',
          'EU work permit processing & return flight reimbursement',
        ],
      },
      {
        id: 'hos-02',
        title: 'Commis I & Pastry Chef',
        location: 'Dubai, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 2,400 – 3,000',
        openings: 16,
        demandLot: 'LT-2026-0609',
        employerType: 'Downtown Luxury Business Hotel',
        requirements: [
          '2+ years hotel bakery, hot-line, or garde-manger station experience',
          'Live knife-skills and culinary practical recorded in Kathmandu',
        ],
        responsibilities: [
          'Prepare breakfast buffets, plated desserts, and a-la-carte mise-en-place',
          'Maintain immaculate station sanitation and cold-room labeling',
        ],
        benefits: [
          'Free hotel staff accommodation, duty meals & uniform laundering',
          'Service charge share & medical coverage',
        ],
      },
      {
        id: 'hos-03',
        title: 'Resort Front Office & Guest Associate',
        location: 'Valletta, Malta',
        region: 'Europe',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'EUR 1,100 – 1,300',
        openings: 14,
        demandLot: 'LT-2026-0617',
        employerType: 'Mediterranean Boutique Hotel Group',
        requirements: [
          'Hospitality degree/diploma with fluent spoken English (B2 equivalent)',
          'Experience with Opera PMS or hotel reservation systems preferred',
        ],
        responsibilities: [
          'Manage guest check-in/check-out, concierge inquiries, and billing accuracy',
          'Coordinate room readiness updates smoothly with housekeeping supervisors',
        ],
        benefits: [
          'Maltese single-permit sponsorship & subsidized housing',
          'Duty meals & paid annual holiday entitlement',
        ],
      },
      {
        id: 'hos-04',
        title: 'Housekeeping & Stewarding Attendant',
        location: 'Doha, Qatar',
        region: 'Middle East & GCC',
        skillLevel: 'Unskilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'QAR 1,450 – 1,700',
        openings: 30,
        demandLot: 'LT-2026-0623',
        employerType: 'International Hotel & Serviced Residences',
        requirements: [
          'Clean presentation, polite service demeanor & basic conversational English',
          'Prior hospitality or commercial cleaning background advantageous',
        ],
        responsibilities: [
          'Service guest suites, public lounges, and back-of-house kitchen ware',
          'Follow chemical dilution safety and linen inventory procedures',
        ],
        benefits: [
          'Free accommodation, duty meals, transport & annual leave ticket',
        ],
      },
    ],
  },
  {
    slug: 'commercial-agriculture',
    title: 'Commercial Agriculture',
    shortLabel: 'Commercial Agriculture',
    kicker: 'Sector Vacancies · Field & Greenhouse Vetted',
    summary:
      'Specialized placements for hydroponic glasshouses, automated irrigation operations, packhouse quality grading, and commercial dairy farms.',
    vettingProtocol: 'Agri-Aptitude Screening & English Workplace Assessment',
    imageSrc: agricultureLandscapeBanner,
    imageAlt: 'Nepalese commercial agriculture specialist inspecting greenhouse crops',
    jobs: [
      {
        id: 'agr-01',
        title: 'Hydroponic Greenhouse Technician',
        location: 'Leamington, Ontario, Canada',
        region: 'North America & East Asia',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'CAD 2,850 – 3,300',
        openings: 22,
        demandLot: 'LT-2026-0701',
        employerType: 'Controlled-Environment Glasshouse Producer',
        requirements: [
          '2+ years greenhouse cultivation, pruning, or fertigation monitoring',
          'Conversational English proficiency and agricultural safety training',
        ],
        responsibilities: [
          'Manage vertical vine trellising, crop scouting, and climate vent checks',
          'Monitor EC/pH nutrient drip lines and report pest anomalies early',
        ],
        benefits: [
          'Employer-arranged on-farm housing & provincial health coverage',
          'Overtime pay per Ontario Agricultural Standards',
        ],
      },
      {
        id: 'agr-02',
        title: 'Irrigation & Fertigation Systems Operator',
        location: 'Al Ain, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 2,200 – 2,700',
        openings: 15,
        demandLot: 'LT-2026-0708',
        employerType: 'Commercial Date & Protected Crop Estate',
        requirements: [
          'Experience maintaining drip irrigation pumps, filters, and solenoid valves',
          'Valid tractor/light-utility driving skill preferred',
        ],
        responsibilities: [
          'Operate automated fertigation dosing controllers across greenhouse blocks',
          'Repair lateral drip lines and log daily water consumption metrics',
        ],
        benefits: [
          'Free housing, food allowance, medical & biennial airfare',
        ],
      },
      {
        id: 'agr-03',
        title: 'Packhouse Quality & Grading Associate',
        location: 'Coimbra, Portugal',
        region: 'Europe',
        skillLevel: 'Semi-Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'EUR 980 – 1,180',
        openings: 28,
        demandLot: 'LT-2026-0714',
        employerType: 'EU Berry & Produce Export Cooperative',
        requirements: [
          'Attention to detail for export-grade size, color, and blemish sorting',
          'Able to work comfortably in chilled packhouse lines',
        ],
        responsibilities: [
          'Grade, weigh, and label punnets to European supermarket specifications',
          'Maintain food-grade line sanitation and crate traceability tags',
        ],
        benefits: [
          'Legal Portuguese residence permit, subsidized housing & social security',
        ],
      },
      {
        id: 'agr-04',
        title: 'Commercial Greenhouse Farm Hand',
        location: 'Hokkaido, Japan',
        region: 'North America & East Asia',
        skillLevel: 'Unskilled',
        contractType: 'Full-Time · 36 Months SSW',
        monthlySalary: 'JPY 195,000 – 225,000',
        openings: 20,
        demandLot: 'LT-2026-0721',
        employerType: 'Automated Vegetable & Horticulture Cooperative',
        requirements: [
          'JLPT N4 / JFT-Basic Japanese language qualification (or enrolled in Kathmandu prep)',
          'Physically fit for structured greenhouse harvesting and soil preparation',
        ],
        responsibilities: [
          'Transplant seedlings, harvest seasonal produce, and sanitize trays',
          'Assist farm leads with daily temperature and netting adjustments',
        ],
        benefits: [
          'Japanese National Health Insurance, pension & subsidized dormitory',
        ],
      },
    ],
  },
  {
    slug: 'security-and-facility',
    title: 'Security & Facility Management',
    shortLabel: 'Security & Facility',
    kicker: 'Sector Vacancies · Physical & Background Audited',
    summary:
      'Disciplined security officers, commercial HVAC maintenance specialists, and building management technicians serving corporate campuses and estates.',
    vettingProtocol: 'Physical Fitness Benchmark, Police Clearance & Technical Audit',
    imageSrc: kathmanduSkylineBanner,
    imageAlt: 'Kathmandu valley skyline representing Passion Human Resource headquarters',
    jobs: [
      {
        id: 'sec-01',
        title: 'SIRA-Eligible Corporate Security Officer',
        location: 'Dubai, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 2,250 – 2,650',
        openings: 40,
        demandLot: 'LT-2026-0803',
        employerType: 'Commercial Tower & Hospitality Security Provider',
        requirements: [
          'Height >= 170 cm, physically fit, clean criminal record & strong English',
          'Former Nepal Police / Armed Service / SIRA-experienced candidates prioritized',
        ],
        responsibilities: [
          'Manage visitor access control, CCTV desk monitoring, and perimeter patrols',
          'Draft concise incident logs and coordinate emergency building drills',
        ],
        benefits: [
          'SIRA licensing sponsorship, free accommodation, uniform & transport',
        ],
      },
      {
        id: 'sec-02',
        title: 'Building HVAC & BMS Maintenance Technician',
        location: 'Valletta, Malta',
        region: 'Europe',
        skillLevel: 'Skilled',
        contractType: 'Full-Time · 36 Months EU Permit',
        monthlySalary: 'EUR 1,350 – 1,600',
        openings: 10,
        demandLot: 'LT-2026-0811',
        employerType: 'Commercial Estates & Healthcare Facilities',
        requirements: [
          '3+ years servicing VRV/VRF chillers, AHUs, and split commercial AC units',
          'Able to read electrical schematics and log preventive maintenance tasks',
        ],
        responsibilities: [
          'Perform scheduled filter, refrigerant, and BMS sensor maintenance',
          'Respond to tenant facility tickets across commercial office blocks',
        ],
        benefits: [
          'EU work permit, shared apartment housing & annual leave pay',
        ],
      },
      {
        id: 'sec-03',
        title: 'PSBD Industrial Perimeter Guard',
        location: 'Abu Dhabi, UAE',
        region: 'Middle East & GCC',
        skillLevel: 'Semi-Skilled',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'AED 2,100 – 2,400',
        openings: 35,
        demandLot: 'LT-2026-0819',
        employerType: 'Energy & Logistics Park Security Division',
        requirements: [
          'Good spoken & written English; high school completion certificate',
          'Clean medical and police clearance verified prior to PSBD training',
        ],
        responsibilities: [
          'Verify vehicle gate passes, manifest seals, and visitor safety inductions',
          'Execute scheduled perimeter rounds and gatehouse shift logs',
        ],
        benefits: [
          'PSBD training fees, housing, meals & medical insurance covered',
        ],
      },
      {
        id: 'sec-04',
        title: 'Facility Operations & Soft-Services Lead',
        location: 'Doha, Qatar',
        region: 'Middle East & GCC',
        skillLevel: 'Supervisory',
        contractType: 'Full-Time · 24 Months',
        monthlySalary: 'QAR 3,200 – 3,800',
        openings: 8,
        demandLot: 'LT-2026-0827',
        employerType: 'Integrated Facilities Management Group',
        requirements: [
          '4+ years supervising commercial janitorial, pest-control, or FM crews',
          'Proficiency in daily inspection checklists and client SLA reporting',
        ],
        responsibilities: [
          'Allocate daily shift rosters across 25+ facility technicians and attendants',
          'Inspect chemical storage, equipment condition, and client floor standards',
        ],
        benefits: [
          'Supervisor accommodation, transport allowance & annual return flight',
        ],
      },
    ],
  },
];

export interface LeadershipMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  tenure: string;
  remit: string;
}

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'lead-01',
    initials: 'RS',
    name: 'Rajesh Shrestha',
    role: 'Managing & Recruitment Director',
    tenure: '14 Years Experience',
    remit: 'Oversees bilateral employer agreements, DOFE licensing compliance, and GCC mobilization.',
  },
  {
    id: 'lead-02',
    initials: 'SK',
    name: 'Sunita Karki',
    role: 'Placement & Orientation Director',
    tenure: '11 Years Experience',
    remit: 'Directs hospitality/EU permit pipelines, pre-departure orientation, and candidate welfare.',
  },
  {
    id: 'lead-03',
    initials: 'DS',
    name: 'Dinesh Sharma',
    role: 'Global Employer Relations Lead',
    tenure: '12 Years Experience',
    remit: 'Leads international HR consultations, demand attestations, and SLA tracking across 18 countries.',
  },
  {
    id: 'lead-04',
    initials: 'BT',
    name: 'Bimala Thapa',
    role: 'Trade Testing & Sourcing Head',
    tenure: '9 Years Experience',
    remit: 'Manages seven-province candidate registries, practical workshop trials, and medical clearances.',
  },
];

export const ACCREDITATION_CREDENTIALS = [
  {
    code: 'DOFE · 897/079/080',
    title: 'Department of Foreign Employment',
    detail: 'Licensed Class-A Overseas Recruitment Agency, Government of Nepal',
  },
  {
    code: 'NAFEA · Active Member',
    title: 'Nepal Association of Foreign Employment Agencies',
    detail: 'Adherent to ethical zero-unauthorized-fee placement charter',
  },
  {
    code: 'GAMCA / GCC Accredited',
    title: 'Medical & Health Clearance Desk',
    detail: 'Coordinated pre-departure fitness screening with approved medical panels',
  },
  {
    code: 'PDOT · Mandatory',
    title: 'Pre-Departure Orientation & Welfare',
    detail: 'Certified cultural, HSE safety, and host-country labor law briefing',
  },
];

export const EMPLOYER_DEMAND_DOCS = [
  {
    step: '01',
    doc: 'Formal Demand Letter',
    detail: 'Specifies trade titles, headcount, basic monthly wage, food/housing terms, and contract duration.',
  },
  {
    step: '02',
    doc: 'Power of Attorney (POA)',
    detail: 'Authorizes Passion Human Resource to source, trade-test, and clear candidates before DOFE.',
  },
  {
    step: '03',
    doc: 'Standard Employment Contract',
    detail: 'Bilateral offer template aligned with destination labor law and Nepal minimum wage floors.',
  },
  {
    step: '04',
    doc: 'Agency Recruitment Agreement',
    detail: 'Defines employer-paid mobilization schedule, timeline SLAs, and 90-day probation assurance.',
  },
  {
    step: '05',
    doc: 'Embassy Guarantee Letter',
    detail: 'Attested by local Chamber of Commerce and the Embassy of Nepal in the host country.',
  },
];

export interface ComplianceCredential {
  id: string;
  category: 'Government License' | 'ISO Certification' | 'Industry Accreditation';
  registrationNo: string;
  title: string;
  issuingBody: string;
  jurisdiction: string;
  validThrough: string;
  scope: string;
  verificationSummary: string;
  signatoryTitle: string;
}

export const COMPLIANCE_LICENSES: ComplianceCredential[] = [
  {
    id: 'lic-dofe',
    category: 'Government License',
    registrationNo: '897/079/080',
    title: 'Foreign Employment Recruitment License (Class-A)',
    issuingBody: 'Department of Foreign Employment (DOFE), Ministry of Labour, Employment and Social Security',
    jurisdiction: 'Government of Nepal',
    validThrough: 'Active · Renewed FY 2083/84',
    scope:
      'Authorized to source, trade-test, process embassy-attested Demand Letters, and mobilize skilled, semi-skilled, and general Nepalese manpower to approved overseas destinations.',
    verificationSummary: 'Listed on DOFE Public Foreign Employment Information Management System (FEIMS)',
    signatoryTitle: 'Director General, Department of Foreign Employment',
  },
  {
    id: 'cert-iso-9001',
    category: 'ISO Certification',
    registrationNo: 'ISO-9001-NP-8841',
    title: 'ISO 9001:2015 Quality Management System',
    issuingBody: 'International Accredited Management Systems Registrar',
    jurisdiction: 'International Standard (IAF MLA)',
    validThrough: 'Valid Through Nov 2027',
    scope:
      'Quality governance covering employer demand auditing, practical workshop trade testing, candidate documentation traceability, medical scheduling, and post-deployment SLA tracking.',
    verificationSummary: 'Annual surveillance audits passed with zero major non-conformities',
    signatoryTitle: 'Lead Quality Auditor, Management Systems Division',
  },
  {
    id: 'lic-ocr-tax',
    category: 'Government License',
    registrationNo: 'OCR 142890 · PAN 602481934',
    title: 'Corporate Registration & Annual Tax Clearance',
    issuingBody: 'Office of the Company Registrar & Inland Revenue Department',
    jurisdiction: 'Government of Nepal',
    validThrough: 'Current · FY 2082/83 Cleared',
    scope:
      'Statutory corporate incorporation as a Private Limited manpower enterprise with audited annual financial statements, paid-up security deposit compliance, and clean tax standing.',
    verificationSummary: 'Verified against Nepal Inland Revenue Department VAT & PAN registry',
    signatoryTitle: 'Tax Officer, Inland Revenue Office Kathmandu',
  },
  {
    id: 'acc-nafea',
    category: 'Industry Accreditation',
    registrationNo: 'NAFEA-MEM-0897',
    title: 'NAFEA Ethical Recruitment Charter Signatory',
    issuingBody: 'Nepal Association of Foreign Employment Agencies (NAFEA)',
    jurisdiction: 'National Industry Body',
    validThrough: 'Active Standing · 2026',
    scope:
      'Commits Passion Human Resource to transparent employer-pays fee schedules, standardized bilingual contract briefings, and zero unauthorized sub-agent solicitation.',
    verificationSummary: 'Good-standing member eligible for bilateral Ministry labor delegations',
    signatoryTitle: 'Executive Secretariat, NAFEA Kathmandu',
  },
];

export interface EthicalPolicyDocument {
  id: string;
  code: string;
  title: string;
  effectiveDate: string;
  standardRef: string;
  summary: string;
  clauses: string[];
  enforcement: string;
}

export const ETHICAL_POLICIES: EthicalPolicyDocument[] = [
  {
    id: 'pol-zero-fee',
    code: 'POL-ETH-01',
    title: 'Zero-Unauthorized-Fee & Employer-Pays Charter',
    effectiveDate: 'Revised January 2026',
    standardRef: 'ILO General Principles & Nepal Free-Visa-Free-Ticket Directive',
    summary:
      'Prohibits charging placement commissions or hidden brokerage fees to job applicants, ensuring recruitment costs are governed transparently within bilateral Employer Agency Agreements.',
    clauses: [
      'No candidate may be solicited through unregistered sub-agents or charged illegal placement deposits.',
      'All statutory government welfare contributions, insurance, and medical fees require official itemized receipts.',
      'For Employer-Pays corridors (GCC, EU hospitality, North America), visa, airfare, and agency fees are borne strictly by the hiring enterprise.',
    ],
    enforcement:
      'Audited prior to DOFE final labor clearance; any breach triggers immediate contract suspension and full restitution.',
  },
  {
    id: 'pol-contract',
    code: 'POL-ILO-02',
    title: 'Contract Transparency & Bilingual Briefing Policy',
    effectiveDate: 'Revised January 2026',
    standardRef: 'Foreign Employment Act 2064 (Section 21–24)',
    summary:
      'Guarantees that every departing worker reviews and signs an unmodified, embassy-attested Employment Contract in both English and Nepali before passport endorsement.',
    clauses: [
      'Contract substitution at destination or alteration of basic wage, overtime rate, or accommodation terms is strictly prohibited.',
      'Mandatory Pre-Departure Orientation Training (PDOT) verifies worker comprehension of working hours, rest days, and termination clauses.',
      'Signed copies are archived digitally in FEIMS and issued directly to the candidate and next of kin.',
    ],
    enforcement:
      'Verified by our Placement Director during pre-departure sign-off and checked during 30-day post-arrival welfare calls.',
  },
  {
    id: 'pol-passport',
    code: 'POL-DOC-03',
    title: 'Anti-Trafficking & Document Retention Prohibition',
    effectiveDate: 'Revised October 2025',
    standardRef: 'ILO Forced Labour Indicators & Kathmandu Ethical Code',
    summary:
      'Enforces absolute prohibition on coercive debt bondage, deceptive job offers, and unlawful confiscation of candidate identity documents.',
    clauses: [
      'Original passports are handled solely for embassy visa stamping and DOFE clearance with a signed, dated receipt issued to the applicant.',
      'Overseas employer partners must confirm workers retain unrestricted personal custody of passports and residence permits.',
      'Zero tolerance for forced labor, withheld wages, or restricted freedom of movement.',
    ],
    enforcement:
      'Explicitly written into every Employer Agency Agreement prior to Demand Letter acceptance.',
  },
  {
    id: 'pol-grievance',
    code: 'POL-WEL-04',
    title: 'Worker Grievance & 90-Day Post-Arrival Welfare Protocol',
    effectiveDate: 'Revised February 2026',
    standardRef: 'Dedicated Grievance Desk · welfare@passionhr.com',
    summary:
      'Establishes confidential, non-retaliatory escalation channels for deployed workers and employer HR teams throughout the overseas contract term.',
    clauses: [
      'Dedicated Kathmandu welfare officers conduct scheduled 30-day and 90-day cohort check-ins after mobilization.',
      'All grievances logged via welfare@passionhr.com or +977-1-4123456 receive formal acknowledgment within 24 hours.',
      'Unresolved contract breaches are escalated jointly to employer executive leadership and Nepalese diplomatic missions.',
    ],
    enforcement:
      'Tracked via our Compliance Director with mandatory monthly resolution reporting to Executive Leadership.',
  },
];

export const CORRIDOR_LEGAL_PROTOCOLS = [
  {
    region: 'GCC & Middle East',
    authority: 'MOFA · GAMCA · Embassy of Nepal',
    requirements: [
      'Chamber of Commerce & Ministry of Foreign Affairs attestation in destination state',
      'Mandatory GAMCA-accredited pre-departure medical fitness clearance',
      'FEIMS final labor sticker & Foreign Employment Welfare Fund enrollment',
    ],
  },
  {
    region: 'European Union',
    authority: 'National Labor Inspectorates · VFS / Consulates',
    requirements: [
      'Host-country Single Permit / Work Authorization verified prior to candidate mobilization',
      'Apostille / Consular legalization of educational and criminal clearance records',
      'EU-compliant housing, minimum wage parity, and statutory social security registration',
    ],
  },
  {
    region: 'North America & East Asia',
    authority: 'LMIA (Canada) · OTIT / SSW (Japan) · EPS',
    requirements: [
      'Employer Labour Market Impact Assessment (LMIA) or Japan SSW Certificate of Eligibility',
      'Verified language proficiency (IELTS / JLPT N4 / JFT-Basic) prior to visa filing',
      'Zero-fee employer-paid recruitment structure compliant with provincial/national labor laws',
    ],
  },
];

export type ServiceIconKey =
  | 'globe'
  | 'briefcase'
  | 'graduation'
  | 'wrench'
  | 'stethoscope'
  | 'filecheck'
  | 'plane'
  | 'shield';

export interface AgencyService {
  id: string;
  number: string;
  title: string;
  pillar: string;
  audience: 'Employers' | 'Candidates' | 'Employers & Candidates';
  sla: string;
  summary: string;
  deliverables: string[];
  iconKey: ServiceIconKey;
}

export const CORE_SERVICES: AgencyService[] = [
  {
    id: 'srv-overseas-recruitment',
    number: '01',
    title: 'Overseas Recruitment & Executive Sourcing',
    pillar: 'Talent Acquisition',
    audience: 'Employers & Candidates',
    sla: '14-Day Shortlist',
    summary:
      'End-to-end sourcing, screening, interviewing, and deployment of skilled, semi-skilled, unskilled, and supervisory Nepalese personnel for international corporations.',
    deliverables: [
      'Direct seven-province sourcing without unauthorized sub-agents',
      'Structured shortlisting across construction, logistics, hospitality & agri-tech',
      'Employer-led virtual or Kathmandu in-person selection drives',
    ],
    iconKey: 'globe',
  },
  {
    id: 'srv-hr-consultation',
    number: '02',
    title: 'HR & Manpower Consultation',
    pillar: 'Advisory Desk',
    audience: 'Employers',
    sla: '24-Hour Review',
    summary:
      'Strategic workforce advisory helping international employers structure quotas, benchmark corridor wages, draft compliant Demand portfolios, and plan project mobilization.',
    deliverables: [
      'Bilateral labor-law & minimum wage benchmarking across 18 markets',
      'Pre-submission audit of Demand Letters, POA & Employment Contracts',
      'Career counseling & transparent job-matching for Nepalese applicants',
    ],
    iconKey: 'briefcase',
  },
  {
    id: 'srv-trade-testing',
    number: '03',
    title: 'Practical Trade Testing & Skill Vetting',
    pillar: 'Technical Assessment',
    audience: 'Employers',
    sla: 'Recorded Scorecard',
    summary:
      'Hands-on technical evaluations at accredited Kathmandu workshops, heavy-equipment yards, and commercial hospitality kitchens to verify real-world job readiness.',
    deliverables: [
      'Live mechanical, welding, MEP, forklift & reach-truck yard trials',
      'Video-recorded culinary stations & spoken language evaluations',
      'Signed technical scorecard dossiers delivered prior to offer issuance',
    ],
    iconKey: 'wrench',
  },
  {
    id: 'srv-training-orientation',
    number: '04',
    title: 'Training & Pre-Departure Orientation (PDOT)',
    pillar: 'Readiness & Safety',
    audience: 'Candidates',
    sla: 'Mandatory Briefing',
    summary:
      'Comprehensive pre-departure orientation preparing selected cohorts on host-country labor statutes, workplace HSE protocols, cultural norms, and financial literacy.',
    deliverables: [
      'Occupational safety (PPE, site hazards) & host-country cultural modules',
      'Spoken English, Arabic, or Japanese workplace terminology coaching',
      'Line-by-line contract terms, wage & overtime verification briefing',
    ],
    iconKey: 'graduation',
  },
  {
    id: 'srv-medical-coordination',
    number: '05',
    title: 'Medical Examination & GAMCA Coordination',
    pillar: 'Health Compliance',
    audience: 'Candidates',
    sla: 'Accredited Labs',
    summary:
      'Streamlined scheduling and tracking with GAMCA-approved and destination-accredited medical centers in Kathmandu for mandatory pre-departure health fitness clearances.',
    deliverables: [
      'Appointment coordination with GAMCA & EU/Asia accredited clinics',
      'Full pathology, chest X-ray, vaccination & biometric health verification',
      'Fast-track medical fitness reporting directly into employer HR batch logs',
    ],
    iconKey: 'stethoscope',
  },
  {
    id: 'srv-visa-documentation',
    number: '06',
    title: 'Documentation, Visa & DOFE Clearance',
    pillar: 'Legal Processing',
    audience: 'Employers & Candidates',
    sla: '3–5 Day DOFE Filing',
    summary:
      'Complete regulatory administration covering Chamber and Embassy attestation, FEIMS filing, Foreign Employment Welfare Fund insurance, and visa stamping.',
    deliverables: [
      'Embassy of Nepal & Department of Foreign Employment (DOFE) approvals',
      'Police clearance, Apostille legalization & VFS / consular visa stamping',
      'Mandatory Foreign Employment Welfare Fund & term life insurance setup',
    ],
    iconKey: 'filecheck',
  },
  {
    id: 'srv-travel-management',
    number: '07',
    title: 'Travel, Ticketing & Departure Management',
    pillar: 'Mobilization Logistics',
    audience: 'Employers & Candidates',
    sla: 'On-Time Dispatch',
    summary:
      'Coordinated group ticketing, pre-flight document folder preparation, and Tribhuvan International Airport marshaling to guarantee punctual arrival on site.',
    deliverables: [
      'Competitive group flight booking & routing synchronized with shifts',
      'Kathmandu airport departure assistance & pre-boarding kit verification',
      'Real-time flight arrival manifest shared with employer receiving teams',
    ],
    iconKey: 'plane',
  },
  {
    id: 'srv-post-arrival-welfare',
    number: '08',
    title: 'Post-Arrival Welfare & Probation Assurance',
    pillar: 'Retention & Care',
    audience: 'Employers & Candidates',
    sla: '90-Day Guarantee',
    summary:
      'Ongoing post-deployment support featuring scheduled 30-day and 90-day worker check-ins, confidential grievance resolution, and structured probation replacement coverage.',
    deliverables: [
      '24/7 welfare helpline (+977-1-4123456) for workers & family support',
      '30-day & 90-day accommodation, safety & payroll parity check-ins',
      'Structured 90-day probation replacement warranty under Agency Agreement',
    ],
    iconKey: 'shield',
  },
];






