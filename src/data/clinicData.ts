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
  name: 'Elixir Aesthetics & Health Care',
  city: 'Multan',
  phone: '0307 0902211',
  whatsappNumber: '923070902211',
  tagline: 'Best in Class Medical Aesthetics | Non-Surgical & Surgical Transformation',
  rating: '4.9★ (73+ Google Reviews)',
  announcement:
    '🎉 1st Anniversary Special: Up to 70% OFF on Hydra Facials, Hair Therapies & Laser! Book via WhatsApp.',
  address: 'Model Town Road, B Block, Multan',
  timings: 'Mon – Sat: 1:00 PM – 9:00 PM',
  mapsQuery: 'Model Town Road, B Block, Multan',
};

// ----------------------------------------------------------------- Hero Stats
export const heroStats = [
  { value: '1,000+', label: 'Happy Clients' },
  { value: '4.9★', label: 'Google Rating' },
  { value: 'Specialist', label: 'Doctors' },
];

export const heroImage =
  'https://images.pexels.com/photos/16571735/pexels-photo-16571735.jpeg?auto=compress&cs=tinysrgb&w=900';

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
      'https://images.pexels.com/photos/9775369/pexels-photo-9775369.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'https://images.pexels.com/photos/7789649/pexels-photo-7789649.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'https://images.pexels.com/photos/28994563/pexels-photo-28994563.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'https://images.pexels.com/photos/6663600/pexels-photo-6663600.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'https://images.pexels.com/photos/7108227/pexels-photo-7108227.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    name: 'Glow Up Starter',
    badge: 'Great Value',
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
    name: 'Clear Skin & Glow Bundle',
    badge: 'Best Seller',
    treatments: [
      '3x Hydra Facial Sessions',
      '2x Acne Scar Resurfacing',
      '1x Chemical Peel',
      'Free skin analysis & follow-up',
    ],
    price: 35000,
    originalPrice: 95000,
    bestValue: true,
  },
  {
    id: 'total-transformation',
    name: 'Total Transformation',
    badge: 'Premium',
    treatments: [
      '6x Laser Hair Removal (Full Body)',
      '3x Hair Density Restoration',
      '2x Hydra Facial',
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
    category: 'Hair Restoration',
    title: 'Hair Density Restoration',
    beforeImage:
      'https://images.pexels.com/photos/1586989/pexels-photo-1586989.jpeg?auto=compress&cs=tinysrgb&w=1000',
    afterImage:
      'https://images.pexels.com/photos/35267456/pexels-photo-35267456.jpeg?auto=compress&cs=tinysrgb&w=1000',
    caseNote:
      'Patient underwent 6 sessions of GFC + PRP therapy over 3 months. Visible density improvement observed from session 3 onward.',
    disclaimer: 'Stylized representation for demonstration purposes',
  },
  {
    id: 'acne-scar',
    category: 'Acne Scars',
    title: 'Acne Scar Clearance',
    beforeImage:
      'https://images.pexels.com/photos/6706877/pexels-photo-6706877.jpeg?auto=compress&cs=tinysrgb&w=1000',
    afterImage:
      'https://images.pexels.com/photos/3762761/pexels-photo-3762761.jpeg?auto=compress&cs=tinysrgb&w=1000',
    caseNote:
      'Patient received 4 fractional laser resurfacing sessions combined with medical peels. Scar depth reduced by ~70% with improved skin texture.',
    disclaimer: 'Stylized representation for demonstration purposes',
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
      'I have never seen my skin glow like this before. The hydra facial was so relaxing and the results were instant. Worth every rupee, especially with the anniversary discount!',
    avatar:
      'https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
  },
  {
    id: 't2',
    name: 'Fatima Riaz',
    treatment: 'Hair Density Restoration',
    rating: 5,
    review:
      'After 6 sessions of GFC therapy my hair density is visibly better. The doctors are highly professional and explain everything clearly. Highly recommend Elixir Aesthetics.',
    avatar:
      'https://images.pexels.com/photos/16160809/pexels-photo-16160809.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
  },
  {
    id: 't3',
    name: 'Sana Malik',
    treatment: 'Acne Scar Resurfacing',
    rating: 5,
    review:
      'My acne scars were something I was very conscious about. After 4 sessions at Elixir, the difference is remarkable. My skin feels smooth and confident again.',
    avatar:
      'https://images.pexels.com/photos/14156484/pexels-photo-14156484.jpeg?auto=compress&cs=tinysrgb&w=200',
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
      'https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
  },
  {
    id: 't5',
    name: 'Nimra Asghar',
    treatment: 'Clear Skin & Glow Bundle',
    rating: 5,
    review:
      'The bundle was incredible value. I got multiple treatments at a fraction of the cost. My skin has completely transformed. The team genuinely cares about results.',
    avatar:
      'https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
  },
  {
    id: 't6',
    name: 'Zara Sheikh',
    treatment: 'Medical Chemical Peel',
    rating: 5,
    review:
      'My pigmentation has faded so much after the chemical peel sessions. The doctors at Elixir are true specialists — they assessed my skin thoroughly before starting.',
    avatar:
      'https://images.pexels.com/photos/34761515/pexels-photo-34761515.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true,
  },
];

export const socialStats = [
  { value: '490+', label: 'Patients Loved' },
  { value: '73+', label: 'Google Reviews' },
  { value: '2.5K+', label: 'Instagram Followers' },
  { value: '4.9★', label: 'Average Rating' },
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
    question: 'How does the anniversary special discount work?',
    answer:
      'Our 1st Anniversary Special offers up to 70% OFF on select treatments and bundles. Simply book your appointment via WhatsApp and mention the anniversary deal. The discount is applied at the clinic. The offer is available for a limited time only.',
  },
  {
    id: 'faq5',
    question: 'Do I need a consultation before booking a treatment?',
    answer:
      'We highly recommend a consultation so our specialists can assess your skin or hair condition and recommend the best treatment plan. Consultations are free when you book via WhatsApp during the anniversary special period.',
  },
];

// ----------------------------------------------------------- Navigation Links
export const navLinks = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
];
