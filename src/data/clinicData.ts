// ============================================================================
// Elixir Aesthetics & Health Care — Central Clinic Data
// Edit everything here. No other file needs touching to update content.
// ============================================================================

export type ServiceCategory =
  | 'Facial Glow'
  | 'Skin Resurfacing'
  | 'Hair & Scalp'
  | 'Laser & Tattoo';

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  originalPrice: number;
  salePrice: number;
  downtime: string;
  duration: string;
  features: string[];
  image: string;
}

export interface Bundle {
  id: string;
  name: string;
  badge: string;
  treatments: string[];
  price: number;
  originalPrice: number;
  bestValue: boolean;
}

export interface BeforeAfterCase {
  id: string;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  caseNote: string;
  disclaimer: string;
  fitzpatrick: string;
  sessions: string;
  parameter: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  avatar: string;
  verified: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

// ---------------------------------------------------------------- Clinic Info
export const clinic = {
  name: 'Aura Medical Aesthetics',
  city: 'Prime Medical District',
  phone: '123-456-7890',
  whatsappNumber: '1234567890',
  tagline: 'Advanced Medical Aesthetics & Hair Restoration',
  rating: '5.0★ Google Rating',
  announcement:
    '✨ Limited-Time Seasonal Privilege: Up to 50% OFF Signature Hydra Facials & Laser | Book via WhatsApp',
  address: '123 Luxury Boulevard, Prime Medical District',
  timings: 'Mon – Sat: 1:00 PM – 9:00 PM',
  mapsQuery: 'Multan, Pakistan',
};

// ----------------------------------------------------------------- Hero Stats
export const heroStats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '5.0★', label: 'Google Rating' },
  { value: 'Specialist', label: 'Doctors' },
];

export const heroImage =
  'https://images.pexels.com/photos/16571735/pexels-photo-16571735.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80';

// ------------------------------------------------------------------- Services
export const services: Service[] = [
  {
    id: 'hydra-facial',
    title: 'Hydra Facial Glow',
    category: 'Facial Glow',
    description:
      'Medical-grade hydra-dermabrasion that cleanses, exfoliates, and hydrates for instant glass-skin radiance.',
    originalPrice: 15000,
    salePrice: 6000,
    downtime: 'No downtime',
    duration: '60 min',
    features: [
      'Deep pore cleansing',
      'Intense hydration boost',
      'Instant visible glow',
      'Suitable for all skin types',
    ],
    image:
      'https://images.pexels.com/photos/9775369/pexels-photo-9775369.jpeg?auto=compress&cs=tinysrgb&w=800&q=75',
  },
  {
    id: 'acne-scar',
    title: 'Acne Scar Resurfacing',
    category: 'Skin Resurfacing',
    description:
      'Advanced fractional resurfacing that targets deep acne scars, smooths texture, and restores even skin tone.',
    originalPrice: 25000,
    salePrice: 12000,
    downtime: '2-3 days',
    duration: '45 min',
    features: [
      'Fractional laser technology',
      'Collagen remodelling',
      'Smoother skin texture',
      'Visible results in 3 sessions',
    ],
    image:
      'https://images.pexels.com/photos/7789649/pexels-photo-7789649.jpeg?auto=compress&cs=tinysrgb&w=800&q=75',
  },
  {
    id: 'hair-restoration',
    title: 'Hair Density Restoration',
    category: 'Hair & Scalp',
    description:
      'Clinically-backed GFC and PRP therapy that revives dormant follicles and restores natural hair density.',
    originalPrice: 30000,
    salePrice: 15000,
    downtime: 'No downtime',
    duration: '75 min',
    features: [
      'GFC + PRP combination',
      'Stimulates dormant follicles',
      'Visible density in 6 weeks',
      'Minimal discomfort',
    ],
    image:
      'https://images.pexels.com/photos/28994563/pexels-photo-28994563.jpeg?auto=compress&cs=tinysrgb&w=800&q=75',
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    category: 'Laser & Tattoo',
    description:
      'FDA-cleared diode laser for safe, permanent hair reduction across all skin tones with lasting smoothness.',
    originalPrice: 20000,
    salePrice: 8000,
    downtime: 'No downtime',
    duration: '30 min',
    features: [
      'FDA-cleared diode laser',
      'Safe for all skin tones',
      'Permanent hair reduction',
      'Painless cooling tip',
    ],
    image:
      'https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&w=800&q=75',
  },
  {
    id: 'chemical-peel',
    title: 'Medical Chemical Peel',
    category: 'Skin Resurfacing',
    description:
      'Dermatologist-formulated peel that targets pigmentation, melasma, and uneven tone for a fresh, renewed complexion.',
    originalPrice: 18000,
    salePrice: 7000,
    downtime: '3-5 days',
    duration: '40 min',
    features: [
      'Targets pigmentation & melasma',
      'Dermatologist-formulated',
      'Renews skin surface',
      'Even, radiant complexion',
    ],
    image:
      'https://images.pexels.com/photos/6663600/pexels-photo-6663600.jpeg?auto=compress&cs=tinysrgb&w=800&q=75',
  },
  {
    id: 'tattoo-removal',
    title: 'Laser Tattoo Removal',
    category: 'Laser & Tattoo',
    description:
      'Picosecond laser technology that safely breaks down ink particles for effective, progressive tattoo fading.',
    originalPrice: 22000,
    salePrice: 10000,
    downtime: '1-2 days',
    duration: '30 min',
    features: [
      'Picosecond laser technology',
      'Breaks down stubborn ink',
      'Progressive fading',
      'Safe on all ink colours',
    ],
    image:
      'https://images.pexels.com/photos/7108227/pexels-photo-7108227.jpeg?auto=compress&cs=tinysrgb&w=800&q=75',
  },
];

export const filterTabs: ('All' | ServiceCategory)[] = [
  'All',
  'Facial Glow',
  'Skin Resurfacing',
  'Hair & Scalp',
  'Laser & Tattoo',
];

// -------------------------------------------------------------------- Bundles
export const bundles: Bundle[] = [
  {
    id: 'glow-up',
    name: 'Clear Skin & Radiance Protocol',
    badge: 'Signature Option',
    treatments: [
      '1x Hydra Facial Glow',
      '1x Chemical Peel (Lite)',
      'Skin analysis consultation',
    ],
    price: 12000,
    originalPrice: 33000,
    bestValue: false,
  },
  {
    id: 'clear-skin-glow',
    name: 'Signature Hair Revival Pack',
    badge: 'Best Seller',
    treatments: [
      '4x GFC Hair Therapy Sessions',
      '2x PRP Scalp Boosters',
      'Micro-needling & laser stimulation',
      'Doctor follow-up & analysis',
    ],
    price: 35000,
    originalPrice: 95000,
    bestValue: true,
  },
  {
    id: 'total-transformation',
    name: 'VIP Full Body Glow',
    badge: 'Premium Privilege',
    treatments: [
      '6x Laser Hair Removal (Full Body)',
      '2x Signature Hydra Facial Glow',
      '1x Body Polish & Radiance treatment',
      'Dedicated care coordinator',
    ],
    price: 75000,
    originalPrice: 220000,
    bestValue: false,
  },
];

// --------------------------------------------------------------- Before & After
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'hair-density',
    category: 'Hair Density',
    title: 'Crown & Hairline Follicular Density Restoration',
    beforeImage: '/images/hair_before.jpg',
    afterImage: '/images/hair_after.jpg',
    caseNote:
      'Male patient presenting with diffuse crown thinning and receding frontal hairline. Underwent 6 sessions of GFC + Autologous PRP protocol over 14 weeks. High follicular density restoration observed with zero surgical downtime.',
    disclaimer: 'Clinical photographic documentation of patient response at 14 weeks',
    fitzpatrick: 'Fitzpatrick Type IV',
    sessions: '6 Sessions (GFC + PRP)',
    parameter: 'Autologous GFC + 1540nm Scalp Laser',
  },
  {
    id: 'acne-scar',
    category: 'Acne Scars & Texture',
    title: 'Deep Rolling Acne Scar & Texture Resurfacing',
    beforeImage: '/images/acne_before.jpg',
    afterImage: '/images/acne_after.jpg',
    caseNote:
      'Close-up bilateral cheek profile with active erythema and grade-3 atrophic rolling acne scars. Treated with 4 sessions of Fractional Erbium-Glass Laser combined with cross-linked HA hydration. 78% depth reduction with radiant glass skin outcome.',
    disclaimer: 'Clinical photographic documentation under uniform medical lighting',
    fitzpatrick: 'Fitzpatrick Type III',
    sessions: '4 Sessions',
    parameter: '1540nm Fractional Er:Glass + Medical Peel',
  },
  {
    id: 'skin-radiance',
    category: 'Pigmentation & Melasma',
    title: 'Dermal Melasma & Epidermal Tone Harmonization',
    beforeImage: '/images/skin_before.jpg',
    afterImage: '/images/skin_after.jpg',
    caseNote:
      'Patient treated with dermatologist-formulated medical TCA depigmenting peel series and clinical antioxidant infusion. Deep melanin dispersion with even luminous skin tone.',
    disclaimer: 'Clinical photographic representation of results',
    fitzpatrick: 'Fitzpatrick Type IV',
    sessions: '3 Sessions',
    parameter: 'Medical Depigmentation Protocol',
  },
  {
    id: 'tattoo-removal',
    category: 'Laser Tattoo Fading',
    title: 'Picosecond Laser Dermal Pigment Clearance',
    beforeImage: '/images/tattoo_before.jpg',
    afterImage: '/images/tattoo_after.jpg',
    caseNote:
      'Targeted high-intensity picosecond Nd:YAG laser pulses shattering deep black ink particles into microscopic fragments cleared naturally via lymphatic drainage without dermal scarring.',
    disclaimer: 'Clinical photographic representation of results',
    fitzpatrick: 'Fitzpatrick Type III / IV',
    sessions: '5 Sessions',
    parameter: 'Picosecond Nd:YAG 1064nm Laser',
  },
];

// ------------------------------------------------------------- Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ayesha Khan',
    treatment: 'Hydra Facial Glow',
    rating: 5,
    review:
      'I have never seen my skin glow like this before. The hydra facial was so relaxing and the results were instant. Worth every penny, especially with the seasonal privilege deal!',
    avatar:
      'https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&w=200&q=75',
    verified: true,
  },
  {
    id: 't2',
    name: 'Fatima Riaz',
    treatment: 'Hair Density Restoration',
    rating: 5,
    review:
      'After 6 sessions of GFC therapy my hair density is visibly better. The doctors are highly professional and explain everything clearly. Highly recommend Aura Aesthetics.',
    avatar:
      'https://images.pexels.com/photos/16160809/pexels-photo-16160809.jpeg?auto=compress&cs=tinysrgb&w=200&q=75',
    verified: true,
  },
  {
    id: 't3',
    name: 'Sana Malik',
    treatment: 'Acne Scar Resurfacing',
    rating: 5,
    review:
      'My acne scars were something I was very conscious about. After 4 sessions at Aura, the difference is remarkable. My skin feels smooth and confident again.',
    avatar:
      'https://images.pexels.com/photos/14156484/pexels-photo-14156484.jpeg?auto=compress&cs=tinysrgb&w=200&q=75',
    verified: true,
  },
  {
    id: 't4',
    name: 'Hira Saleem',
    treatment: 'Laser Hair Removal',
    rating: 5,
    review:
      'Best decision I made! The laser sessions were painless and the staff made me feel so comfortable. Permanent results are showing already after 3 sessions.',
    avatar:
      'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&w=200&q=75',
    verified: true,
  },
  {
    id: 't5',
    name: 'Nimra Asghar',
    treatment: 'Clear Skin Protocol',
    rating: 5,
    review:
      'The clinical protocol was incredible. My skin texture has completely transformed. The medical team genuinely cares about scientific results.',
    avatar:
      'https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=200&q=75',
    verified: true,
  },
  {
    id: 't6',
    name: 'Zara Sheikh',
    treatment: 'Medical Chemical Peel',
    rating: 5,
    review:
      'My pigmentation has faded so much after the chemical peel sessions. The doctors at Aura are true specialists — they assessed my skin thoroughly before starting.',
    avatar:
      'https://images.pexels.com/photos/34761515/pexels-photo-34761515.jpeg?auto=compress&cs=tinysrgb&w=200&q=75',
    verified: true,
  },
];

export const socialStats = [
  { value: '500+', label: 'Patients Loved', numericTarget: 500, suffix: '+' },
  { value: '100+', label: 'Verified Reviews', numericTarget: 100, suffix: '+' },
  { value: '2.5K+', label: 'Instagram Community', numericTarget: 2.5, suffix: 'K+' },
  { value: '5.0★', label: 'Average Rating', numericTarget: 5.0, suffix: '★' },
];

// ----------------------------------------------------------------------- FAQs
export const faqs: Faq[] = [
  {
    id: 'faq1',
    question: 'Are the treatments safe for all skin types?',
    answer:
      'Yes. All our treatments are performed by qualified dermatologists using FDA-cleared technology. We conduct a thorough skin analysis before any procedure to ensure the treatment is safe and effective for your specific skin type and concern.',
  },
  {
    id: 'faq2',
    question: 'How many sessions will I need to see results?',
    answer:
      'It depends on the treatment and your individual condition. Hydra facials show instant glow after one session, while hair restoration and acne scar treatments typically show visible results after 3-6 sessions. Your doctor will give you a personalised plan during your consultation.',
  },
  {
    id: 'faq3',
    question: 'Is there any downtime after the procedures?',
    answer:
      'Most of our treatments have zero downtime — you can resume your daily activities immediately. Some intensive treatments like chemical peels and fractional laser resurfacing may have 2-5 days of mild redness or peeling, which is completely normal and temporary.',
  },
  {
    id: 'faq4',
    question: 'How do the seasonal privilege discounts work?',
    answer:
      'Our Limited-Time Seasonal Privilege offers up to 50% OFF on select treatments. Simply book your appointment via WhatsApp and mention the seasonal privilege. The discount is applied at the clinic. The offer is available for a limited time only.',
  },
  {
    id: 'faq5',
    question: 'Do I need a consultation before booking a treatment?',
    answer:
      'We highly recommend a consultation so our specialists can assess your skin or hair condition and recommend the best treatment plan. Consultations are free when you book via WhatsApp during the seasonal privilege period.',
  },
];

// ----------------------------------------------------------- Navigation Links
export const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Why Medical', href: '#why-medical' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
];

export interface Doctor {
  id: string;
  name: string;
  title: string;
  credentials: string;
  pmcReg: string;
  experience: string;
  portrait: string;
  specialties: string[];
}

export const doctors: Doctor[] = [
  {
    id: 'dr-farrukh',
    name: 'Board-Certified Dermatologist',
    title: 'Lead Specialist Physician',
    credentials: 'Board Certified Dermatologist, Fellow of Aesthetic Medicine',
    pmcReg: 'Board Certified: #89241',
    experience: '12+ Years Clinical Experience',
    portrait: '/images/doctor_farrukh.jpg',
    specialties: ['Fractional Laser Resurfacing', 'GFC & Autologous PRP Therapy', 'Clinical Dermatology & Dermal Fillers'],
  },
  {
    id: 'dr-amna',
    name: 'Lead Aesthetic Physician',
    title: 'Aesthetic Consultant & Laser Specialist',
    credentials: 'Board Certified Aesthetic Medicine Specialist',
    pmcReg: 'Board Certified: #91045',
    experience: '10+ Years Clinical Experience',
    portrait: '/images/doctor_amna.jpg',
    specialties: ['Hydra Facial Radiance Protocols', 'Medical Chemical Peels & Melasma', 'Non-Surgical Skin Rejuvenation'],
  },
];

export interface QuizProtocol {
  title: string;
  price: number;
  savings: string;
  duration: string;
  downtime: string;
  message: string;
}

export const quizProtocols: Record<string, Record<string, QuizProtocol>> = {
  'acne-scars': {
    'zero-downtime': {
      title: 'Dermal Micro-Needling & Soothing Protocol',
      price: 9000,
      savings: 'Save 40%',
      duration: '45 min',
      downtime: 'Mild redness (few hours)',
      message: 'I want to claim the Dermal Micro-Needling Acne Scar Protocol (Price: Rs. 9,000). My skin is sensitive.',
    },
    'intensive': {
      title: '1540nm Fractional Laser Resurfacing',
      price: 12000,
      savings: 'Save 50%',
      duration: '60 min',
      downtime: '2-3 days peeling',
      message: 'I want to claim the 1540nm Fractional Laser Acne Scar Protocol (Price: Rs. 12,000). My skin is normal/tolerant.',
    },
  },
  'hair-thinning': {
    'zero-downtime': {
      title: 'PRP Scalp Revive & Oxygenation',
      price: 8000,
      savings: 'Save 45%',
      duration: '50 min',
      downtime: 'No downtime',
      message: 'I want to claim the PRP Scalp Revive Hair Protocol (Price: Rs. 8,000). My scalp is sensitive.',
    },
    'intensive': {
      title: 'GFC Dual Action Density Restore',
      price: 15000,
      savings: 'Save 50%',
      duration: '75 min',
      downtime: 'No downtime (mild soreness)',
      message: 'I want to claim the GFC Dual Action Density Restore Protocol (Price: Rs. 15,000). My scalp is normal/tolerant.',
    },
  },
  'pigmentation': {
    'zero-downtime': {
      title: 'Signature Hydra Facial Glow Dual Action',
      price: 6000,
      savings: 'Save 60%',
      duration: '60 min',
      downtime: 'Zero downtime',
      message: 'I want to claim the Signature Hydra Facial Glow Pigmentation Protocol (Price: Rs. 6,000). My skin is sensitive.',
    },
    'intensive': {
      title: 'Medical TCA Pigmentation Peel',
      price: 7000,
      savings: 'Save 60%',
      duration: '45 min',
      downtime: '3-5 days skin peeling',
      message: 'I want to claim the Medical TCA Pigmentation Peel Protocol (Price: Rs. 7,000). My skin is normal/tolerant.',
    },
  },
  'anti-aging': {
    'zero-downtime': {
      title: 'Exosome Facial Infusion & Lift',
      price: 18000,
      savings: 'Save 30%',
      duration: '60 min',
      downtime: 'No downtime',
      message: 'I want to claim the Exosome Facial Lift Anti-Aging Protocol (Price: Rs. 18,000). My skin is sensitive.',
    },
    'intensive': {
      title: 'Full Face RF Collagen Resurfacing',
      price: 25000,
      savings: 'Save 40%',
      duration: '90 min',
      downtime: '1-2 days mild swelling',
      message: 'I want to claim the RF Collagen Resurfacing Anti-Aging Protocol (Price: Rs. 25,000). My skin is normal/tolerant.',
    },
  },
};
