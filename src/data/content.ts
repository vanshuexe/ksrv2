import { BusinessVertical, AgroProduct, OngoingProject, DirectorProfile } from '../types';
import riceProductsIcon from '../assets/images/products/rice-products.png';
import pulsesIcon from '../assets/images/products/pulses.png';
import milletsIcon from '../assets/images/products/millets.png';
import maizeIcon from '../assets/images/products/maize.png';
import chilliIcon from '../assets/images/products/chilli.png';
import turmericIcon from '../assets/images/products/turmeric.png';
import gingerIcon from '../assets/images/products/ginger.png';
import spicesIcon from '../assets/images/products/spices.png';
import cerealsIcon from '../assets/images/products/cereals.png';
import coldPressedOilsIcon from '../assets/images/products/cold-pressed-oils.png';
import ricePhoto from '../assets/images/products/rice-photo.jpg';
import pulsesPhoto from '../assets/images/products/pulses-photo.jpg';
import milletsPhoto from '../assets/images/products/millets-photo.jpg';
import chilliPhoto from '../assets/images/products/chilli-photo.jpg';
import turmericPhoto from '../assets/images/products/turmeric-photo.jpg';
import gingerPhoto from '../assets/images/products/ginger-photo.jpg';
import spicesPhoto from '../assets/images/products/spices-photo.jpg';
import cerealsPhoto from '../assets/images/products/cereals-photo.jpg';
import coldPressedOilPhoto from '../assets/images/products/cold-pressed-oil-photo.jpg';
import maizePhoto from '../assets/images/products/maize-photo.jpg';

export const SITE_METADATA = {
  companyName: 'KSR GROUPS',
  tagline: 'Building Businesses. Developing Industries. Creating Opportunities.',
  subtitle: 'Connecting resources, expertise and opportunities across multiple business sectors.',
  heroDescription:
    'KSR Groups is a diversified business group with interests across real estate, civil works and infrastructure, organic agriculture, agro-processing, commodity trading, export and import, poultry feed supply and industrial development. We aim to connect local resources with business opportunities, develop value-added products and support sustainable growth across the sectors in which we operate.',
  email: 'ksrgroupsofficial@gmail.com',
  phones: [
    { display: '99897 77631', tel: '+919989777631' },
    { display: '88853 74262', tel: '+918885374262' },
  ],
  emailDisplay: 'ksrgroupsofficial@gmail.com',
  website: 'www.ksrgroups.org',
  gstin: '36ADVFS4296E1ZE',
  officeAddress:
    '#33, Beside AMRC, Main Road, RL Nagar, Keesara Mandal, Medchal District, Hyderabad, Telangana - 501301',
};

export const PURPOSE_VISION_MISSION = [
  {
    number: '01',
    label: 'PURPOSE',
    title: 'Our Purpose',
    description:
      'Bring together resources, people, technology and market access to explore opportunities that contribute to long-term growth.',
  },
  {
    number: '02',
    label: 'VISION',
    title: 'Our Vision',
    description:
      'Build a trusted and diversified business group that develops opportunities across infrastructure, agriculture, processing and trade, while contributing to sustainable economic growth.',
  },
  {
    number: '03',
    label: 'MISSION',
    title: 'Our Mission',
    description:
      'Identify viable business opportunities, develop responsible partnerships, strengthen value chains and support projects that create long-term value for customers, partners and communities.',
  },
];

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: 'real-estate',
    title: 'Real Estate & Land Development',
    description:
      'Property development, construction, venture development, earthworks and land transactions, with opportunities coordinated from planning through execution.',
    tags: ['PROPERTY', 'LAND', 'DEVELOPMENT'],
    iconName: 'Building2',
  },
  {
    id: 'civil-infrastructure',
    title: 'Civil Works & Infrastructure',
    description:
      'Civil construction, electrical works, mechanical erection and industrial cable works, with scope assessed for each assignment.',
    tags: ['CIVIL', 'ELECTRICAL', 'MECHANICAL'],
    iconName: 'Hammer',
  },
  {
    id: 'organic-agro',
    title: 'Organic Agriculture & Agro Processing',
    description:
      'KSR Groups aims to participate across the agricultural value chain through processing, sourcing, buying, selling and marketing agricultural and organic agro products.',
    tags: ['PROCESSING', 'TRADING', 'VALUE ADDITION'],
    iconName: 'Wheat',
  },
  {
    id: 'export-import',
    title: 'Export & Import',
    description:
      'Developing domestic and international trade opportunities through sourcing, quality coordination, product preparation, buyer connections and trade facilitation, subject to applicable requirements.',
    tags: ['AGRO EXPORTS', 'GLOBAL TRADE'],
    iconName: 'Globe',
  },
  {
    id: 'poultry-feed',
    title: 'Poultry Feed Supply',
    description:
      'A proposed supply portfolio of maize, soya, broken rice and rice bran for poultry feed manufacturers and related businesses.',
    tags: ['FEED INGREDIENTS', 'SUPPLY'],
    iconName: 'Boxes',
  },
  {
    id: 'industrial-cluster',
    title: 'Industrial Development',
    description:
      'A proposed programme to help farmers, entrepreneurs and groups explore agro-processing and related industrial opportunities, subject to feasibility, approvals, finance and agreed terms.',
    tags: ['PARTNERSHIPS', 'INDUSTRY', 'AGRO-PROCESSING'],
    iconName: 'Factory',
  },
];

export const AGRO_PRODUCTS: AgroProduct[] = [
  {
    id: 'rice-products',
    name: 'Rice & Rice Products',
    description: 'Rice processing and rice products',
    icon: riceProductsIcon,
    image: ricePhoto,
    imageAlt: 'Uncooked white rice grains',
    category: 'grain',
    specPreview: 'Raw, parboiled and broken rice products; grades and specifications can be discussed on enquiry.',
  },
  {
    id: 'pulses',
    name: 'Pulses',
    description: 'Processing and trading of different pulses',
    icon: pulsesIcon,
    image: pulsesPhoto,
    imageAlt: 'Yellow split pulses',
    category: 'pulse',
    specPreview: 'Red gram, green gram, black gram and other pulse varieties.',
  },
  {
    id: 'millets',
    name: 'Millets',
    description: 'Millet cleaning, processing and value-added products',
    icon: milletsIcon,
    image: milletsPhoto,
    imageAlt: 'Pearl millet plants growing in a field',
    category: 'grain',
    specPreview: 'Finger millet (Ragi), Foxtail, Pearl millet (Bajra), Sorghum (Jowar)',
  },
  {
    id: 'maize',
    name: 'Maize',
    description: 'Maize sourcing, processing and trading',
    icon: maizeIcon,
    image: maizePhoto,
    imageAlt: 'Maize plants growing in a field',
    category: 'grain',
    specPreview: 'Maize for food, feed and other processing enquiries.',
  },
  {
    id: 'chilli',
    name: 'Chilli & Chilli Powder',
    description: 'Chilli and chilli powder',
    icon: chilliIcon,
    image: chilliPhoto,
    imageAlt: 'Dried red chillies and spices',
    category: 'spice',
    specPreview: 'Product forms, grades and specifications can be discussed on enquiry.',
  },
  {
    id: 'turmeric',
    name: 'Turmeric',
    description: 'Turmeric in whole and processed forms',
    icon: turmericIcon,
    image: turmericPhoto,
    imageAlt: 'Ground turmeric with fresh turmeric roots',
    category: 'spice',
    specPreview: 'Product forms and specifications can be discussed on enquiry.',
  },
  {
    id: 'ginger',
    name: 'Ginger',
    description: 'Ginger and other agricultural products',
    icon: gingerIcon,
    image: gingerPhoto,
    imageAlt: 'Fresh ginger root',
    category: 'spice',
    specPreview: 'Product forms and specifications can be discussed on enquiry.',
  },
  {
    id: 'spices',
    name: 'Spices',
    description: 'Spices including chilli, turmeric, ginger and others',
    icon: spicesIcon,
    image: spicesPhoto,
    imageAlt: 'Assorted spices arranged in bowls',
    category: 'spice',
    specPreview: 'Product forms, grades and specifications can be discussed on enquiry.',
  },
  {
    id: 'cereals',
    name: 'Cereals',
    description: 'Processing and trading of different cereal grains',
    icon: cerealsIcon,
    image: cerealsPhoto,
    imageAlt: 'Assorted cereal grains at a market',
    category: 'grain',
    specPreview: 'Cereal products and specifications can be discussed on enquiry.',
  },
  {
    id: 'cold-pressed-oils',
    name: 'Cold-Pressed Oils',
    description: 'Oil production from suitable oilseeds and related by-products',
    icon: coldPressedOilsIcon,
    image: coldPressedOilPhoto,
    imageAlt: 'Bottle of golden olive oil',
    category: 'oil',
    specPreview: 'Oilseed options, production and product details can be discussed on enquiry.',
  },
];

export const TARGET_EXPORT_COUNTRIES = [
  { name: 'USA', flag: '🇺🇸', code: 'US' },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'UK' },
  { name: 'Canada', flag: '🇨🇦', code: 'CA' },
  { name: 'Dubai / UAE', flag: '🇦🇪', code: 'AE' },
  { name: 'Taiwan', flag: '🇹🇼', code: 'TW' },
  { name: 'South Africa', flag: '🇿🇦', code: 'ZA' },
];

export const INDUSTRIAL_DEVELOPMENT_STEPS = [
  {
    step: '01',
    title: 'Submit Your Interest',
    description: 'Share your proposed location, contact details and business interests.',
  },
  {
    step: '02',
    title: 'Location & Resource Study',
    description: 'Review locally available crops, agricultural produce and raw materials.',
  },
  {
    step: '03',
    title: 'Industry Recommendation',
    description: 'Identify suitable processing or manufacturing opportunities for assessment.',
  },
  {
    step: '04',
    title: 'Land & Site Readiness',
    description: 'The prospective partner identifies or arranges suitable land for the proposed unit.',
  },
  {
    step: '05',
    title: 'Project & Technical Planning',
    description: 'Facilitate project planning, machinery selection and project documentation.',
  },
  {
    step: '06',
    title: 'Finance & Institutional Coordination',
    description: 'Eligible proposals may be connected with banks and relevant government departments or schemes, subject to appraisal and approvals.',
  },
  {
    step: '07',
    title: 'Establishment',
    description: 'Implementation follows feasibility, funding, statutory approvals and agreed partnership terms.',
  },
];

export const ONGOING_PROJECTS: OngoingProject[] = [];

export const DIRECTORS: DirectorProfile[] = [
];
