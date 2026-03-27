export const config = {
  business: {
    name: 'Qual IT Resources',
    slug: 'qualit-resources',
    tagline: 'Your Trusted Partner for STEM Recruiting & Consulting Services',
    description: 'Qual IT Resources specializes in IT and STEM staffing solutions with 20+ years of experience serving enterprise organizations across the Cincinnati area and nationwide.',
    yearFounded: 2017,
    owner: 'Qual IT Resources',
  },

  contact: {
    phone: '(800) 615-4139',
    phoneRaw: '+18006154139',
    email: 'info@qualitresources.com',
    address: {
      street: '6610 Corporate Dr',
      city: 'Blue Ash',
      state: 'OH',
      zip: '45242',
      country: 'US',
    },
    coordinates: { lat: 39.2320, lng: -84.3882 },
  },

  hours: {
    monday: '8:00 AM - 5:00 PM',
    tuesday: '8:00 AM - 5:00 PM',
    wednesday: '8:00 AM - 5:00 PM',
    thursday: '8:00 AM - 5:00 PM',
    friday: '8:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },

  services: [
    {
      name: 'IT Staffing & Recruiting',
      slug: 'it-staffing-recruiting',
      shortDescription: 'End-to-end IT staffing solutions connecting top technology talent with enterprise organizations.',
    },
    {
      name: 'STEM Consulting',
      slug: 'stem-consulting',
      shortDescription: 'Strategic STEM consulting services to help organizations build and optimize their technical teams.',
    },
    {
      name: 'Quality Assurance',
      slug: 'quality-assurance',
      shortDescription: 'Comprehensive QA staffing for manual testing, automation, and software quality management.',
    },
    {
      name: 'Data & Analytics',
      slug: 'data-analytics',
      shortDescription: 'Data professionals including DBAs, architects, data scientists, and analytics specialists.',
    },
    {
      name: 'ERP Implementations',
      slug: 'erp-implementations',
      shortDescription: 'Experienced ERP implementation specialists for SAP, Oracle, and enterprise system deployments.',
    },
    {
      name: 'Program Management',
      slug: 'program-management',
      shortDescription: 'Program managers and business analysts to drive complex initiatives from planning to delivery.',
    },
  ],

  serviceAreas: {
    primary: ['Blue Ash', 'Cincinnati', 'Mason', 'West Chester'],
    secondary: ['Dayton', 'Columbus', 'Nationwide'],
  },

  seo: {
    siteUrl: 'https://qualit-resources.pages.dev',
    titleTemplate: '%s | Qual IT Resources',
    defaultTitle: 'Qual IT Resources — STEM Recruiting & IT Consulting in Cincinnati',
    defaultDescription: 'Qual IT Resources specializes in IT and STEM staffing solutions with 20+ years of experience serving enterprise organizations across the Cincinnati area and nationwide.',
    defaultImage: '/images/logo_og.png',
  },

  schema: {
    type: 'ProfessionalService' as const,
    priceRange: '$$',
    paymentAccepted: ['Check', 'Credit Card', 'Wire Transfer'],
    sameAs: [] as string[],
    aggregateRating: { value: 5.0, count: 12, best: 5 },
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  cta: {
    primary: {
      label: 'Get Started Today',
      href: '/contact',
    },
    phone: {
      label: 'Call (800) 615-4139',
      href: 'tel:+18006154139',
    },
  },

  testimonials: [
    {
      quote: 'Qual IT Resources found us the perfect development team in record time. Their understanding of our technical requirements was outstanding.',
      author: 'Director of Engineering',
      location: 'Cincinnati, OH',
    },
    {
      quote: 'We have been partnering with Qual IT for over three years. Their STEM recruiting expertise is unmatched in the region.',
      author: 'VP of Technology',
      location: 'Blue Ash, OH',
    },
    {
      quote: 'The quality of candidates they deliver consistently exceeds our expectations. True professionals who understand the IT landscape.',
      author: 'CTO',
      location: 'Mason, OH',
    },
  ],
} as const;

export type Config = typeof config;
