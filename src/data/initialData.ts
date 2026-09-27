import { Project, Story, Partner, ImpactMetric, Testimonial, VolunteerApplication, Enquiry } from '../types';

export const INITIAL_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'm-1',
    metric: 'Learners Supported',
    value: '1,450+',
    numericValue: 1450,
    description: 'Children and young people actively participating in educational support and literacy programmes.',
    category: 'Education',
    verifiedDate: '2026-06'
  },
  {
    id: 'm-2',
    metric: 'Communities Engaged',
    value: '18',
    numericValue: 18,
    description: 'Rural and peri-urban community clusters across Mukono, Wakiso, and Mpigi districts.',
    category: 'Community Development',
    verifiedDate: '2026-06'
  },
  {
    id: 'm-3',
    metric: 'Demonstration & School Gardens',
    value: '14',
    numericValue: 14,
    description: 'Active agricultural learning spaces producing fresh food and teaching ecological farming skills.',
    category: 'Agriculture',
    verifiedDate: '2026-05'
  },
  {
    id: 'm-4',
    metric: 'International & Local Volunteers',
    value: '120+',
    numericValue: 120,
    description: 'German, international, and Ugandan volunteers collaborating side-by-side in cultural exchange.',
    category: 'Volunteer Exchange',
    verifiedDate: '2026-06'
  },
  {
    id: 'm-5',
    metric: 'Community Projects Completed',
    value: '26',
    numericValue: 26,
    description: 'Locally led initiatives spanning clean water access, classroom refurbishments, and seed banks.',
    category: 'General',
    verifiedDate: '2026-06'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'School Ecological Farm & Nutrition Gardens',
    location: 'Mukono District, Uganda',
    category: 'Agriculture',
    description: 'Establishing sustainable permaculture and vegetable gardens in partner primary schools to enhance student nutrition, develop agricultural skills, and provide practical ecological science training.',
    objectives: [
      'Equip 350+ learners with regenerative soil care and vegetable cultivation techniques',
      'Supplement daily school lunches with organic greens, beans, and sweet potatoes',
      'Engage international and local volunteers in building drip irrigation and compost facilities'
    ],
    progress: 85,
    impactSummary: '14 schools now maintaining productive seasonal beds with zero chemical fertilizers.',
    image: 'https://i.postimg.cc/d3SGRX4d/edited-seedling-volunteers.png',
    volunteerOpportunities: 'Garden preparation, companion planting, rainwater harvesting workshops, and agro-ecology teaching.',
    status: 'Active',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Literacy & Creative Learning Hubs',
    location: 'Wakiso District, Uganda',
    category: 'Education',
    description: 'Partnering with local educators to establish vibrant reading corners, student libraries, and interactive English & creative arts clubs that nurture inquisitive, confident young minds.',
    objectives: [
      'Supply 2,000+ locally relevant and African-authored storybooks to rural schools',
      'Facilitate daily reading circles and bilingual phonics support alongside Ugandan teachers',
      'Host weekly sports, debate, drama, and intercultural storytelling sessions'
    ],
    progress: 78,
    impactSummary: 'Reading comprehension scores improved by 42% across participating cohort schools.',
    image: 'https://i.postimg.cc/8ctsL6kR/3W8A9559.jpg',
    volunteerOpportunities: 'Classroom reading support, art & music workshop leadership, educational resource development.',
    status: 'Ongoing',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Youth Livelihoods & Vocational Skills Lab',
    location: 'Mpigi District, Uganda',
    category: 'Youth',
    description: 'Providing out-of-school young people with practical technical training in carpentry, tailoring, sustainable agribusiness, and basic digital literacy to build self-reliant livelihoods.',
    objectives: [
      'Train 80 young people annually in marketable vocational crafts and bookkeeping',
      'Provide startup equipment mentorship and peer savings circles for new community enterprises',
      'Foster youth leadership and community civic engagement'
    ],
    progress: 90,
    impactSummary: '64 graduates currently running independent small workshops and agricultural cooperatives.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80',
    volunteerOpportunities: 'Mentorship in workshop mechanics, design, entrepreneurship, and digital communications.',
    status: 'Active',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Clean Water & Community Sanitation Infrastructure',
    location: 'Luwero Triangle, Uganda',
    category: 'Community Development',
    description: 'Collaborating with village development committees to rehabilitate shallow wells, install rainwater storage systems at schools, and train local water maintenance committees.',
    objectives: [
      'Rehabilitate 8 community water points providing reliable potable water to 4,200 residents',
      'Train community water safety officers and establish maintenance funding reserves',
      'Deliver dignified hygiene and sanitation workshops in partnership with village health teams'
    ],
    progress: 65,
    impactSummary: 'Drastically reduced waterborne illnesses among 6 partner primary school populations.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1000&q=80',
    volunteerOpportunities: 'Field assessment assistance, water testing logging, community hygiene workshops.',
    status: 'Ongoing',
    featured: false
  },
  {
    id: 'proj-5',
    title: 'Community Tree Nursery & Agroforestry Network',
    location: 'Kayunga District, Uganda',
    category: 'Environment',
    description: 'Community-run nurseries propagating indigenous fruit and timber trees to restore deforested buffer zones and provide shade and fruit yields for local smallholder families.',
    objectives: [
      'Propagate and plant 15,000 indigenous and fruit tree seedlings per rainy season',
      'Educate community members on nitrogen-fixing agroforestry species for soil replenishment',
      'Involve school environmental clubs in tree tagging and ongoing monitoring'
    ],
    progress: 72,
    impactSummary: 'Over 28,000 trees distributed and monitored with an 84% survival rate across three sub-counties.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    volunteerOpportunities: 'Seedling potting, grafting training, tree distribution logistics, and environmental club outreach.',
    status: 'Active',
    featured: false
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'Learning Both Ways: A German Volunteer’s Journey in Mukono',
    slug: 'learning-both-ways-german-volunteer-journey',
    category: 'Volunteer Stories',
    excerpt: 'Lukas from Freiburg shares how working alongside Ugandan teachers redefined his understanding of education, resilience, and community partnership.',
    content: `When I arrived in Uganda from southern Germany, I came with notes, lesson plans, and eager expectations. Within my first three days at St. Jude Primary in Mukono, I quickly realized that the greatest value of my placement would not be what I "taught," but what we created together.

Under the guidance of Teacher Sarah, a veteran educator with twenty years of classroom mastery, we co-designed an English storytelling and drama club. While I supported small reading groups with pronunciation games, Teacher Sarah taught me how Ugandan proverbs, rhythm, and song can command a classroom of 45 children with profound warmth and respect.

In the afternoons, we worked in the school’s Growing Futures demonstration garden. Together with students, we built raised garden beds using locally available bamboo and organic compost. 

Growing Futures isn’t a one-way aid project; it is a living bridge between Germany and Uganda. We shared meals, learned Luganda greetings, talked about our hopes, and built mutual trust that will last for years.`,
    author: 'Lukas Meier',
    authorRole: 'Growing Minds Volunteer, Germany',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
    readTime: '4 min read'
  },
  {
    id: 'story-2',
    title: 'How School Gardens Transformed Our Afternoon Energy',
    slug: 'school-gardens-transformed-afternoon-energy',
    category: 'Agriculture Stories',
    excerpt: 'Headteacher Florence explains how cultivating indigenous vegetables directly at school increased student attendance and revitalized hands-on science classes.',
    content: `For many of our young learners, walking two to three kilometers to school on an empty stomach makes concentrating during afternoon lessons very challenging.

When Hands of Mercy Uganda introduced the Growing Food & Futures initiative at our school, it was not merely about donating produce. Our teachers, learners, and community elders sat together to plan a two-acre permaculture plot right beside our classrooms.

Today, our pupils learn soil biology, seed preservation, and moisture conservation firsthand. Best of all, our school kitchen now harvests fresh spinach, sukuma wiki, pumpkin leaves, and sweet potatoes three times each week.

Attendance has noticeably surged, especially among our younger classes. Our pupils take pride in picking vegetables they planted themselves. This is practical education that feeds both the body and the mind.`,
    author: 'Florence Namubiru',
    authorRole: 'Headteacher, Mukono Community Primary',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=1000&q=80',
    readTime: '5 min read'
  },
  {
    id: 'story-3',
    title: 'From Apprentice to Cooperative Lead: Ivan’s Story',
    slug: 'from-apprentice-to-cooperative-lead',
    category: 'Community Stories',
    excerpt: 'After completing the youth carpentry and sustainable timber fellowship, 22-year-old Ivan established a workshop employing four other local youths.',
    content: `Ivan grew up in Mpigi district. After finishing secondary school, opportunities for formal employment were limited, and many young people in his village were struggling without clear direction.

Ivan enrolled in the Hands of Mercy Uganda Youth Livelihoods programme, specializing in sustainable carpentry and furniture design. Over ten months, he mastered timber selection, joinery, and small business bookkeeping.

Upon graduation, with support from our starter equipment loan circle, Ivan opened a small workshop producing sturdy, affordable desks for local community schools and durable household furniture. Today, his workshop employs four other young men from the village.

"Hands of Mercy Uganda gave me the confidence to stand on my own feet," Ivan says. "Now, we are building desks for the younger generation so they never have to sit on bare floors."`,
    author: 'Ivan Ssempijja',
    authorRole: 'Youth Workshop Director & Alumnus',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    readTime: '3 min read'
  }
];

export const INITIAL_PARTNERS: Partner[] = [
  {
    id: 'p-1',
    name: 'Uganda Ministry of Education & Sports (District Liaison)',
    logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=300&q=80',
    category: 'Institutional Partners',
    description: 'Coordinating curriculum alignment, teacher professional support, and official school placement verification.',
    website: 'https://education.go.ug',
    country: 'Uganda',
    isActive: true
  },
  {
    id: 'p-2',
    name: 'Freundeskreis Uganda e.V.',
    logo: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=300&q=80',
    category: 'International Partners',
    description: 'German volunteer liaison group facilitating pre-departure orientation, intercultural preparation, and long-term project support.',
    website: 'https://freundeskreis-uganda.org',
    country: 'Germany',
    isActive: true
  },
  {
    id: 'p-3',
    name: 'Mukono Smallholder Farmers Cooperative',
    logo: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=300&q=80',
    category: 'Community Partners',
    description: 'Providing indigenous heirloom seeds, compost resources, and local farming wisdom to school garden hubs.',
    website: '#',
    country: 'Uganda',
    isActive: true
  },
  {
    id: 'p-4',
    name: 'Stuttgart Youth & Cultural Exchange Forum',
    logo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80',
    category: 'Volunteer Partners',
    description: 'Connecting university students and skilled young professionals from Baden-Württemberg with Ugandan community fellowships.',
    website: '#',
    country: 'Germany',
    isActive: true
  },
  {
    id: 'p-5',
    name: 'Kyambogo Agricultural Outreach Institute',
    logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80',
    category: 'Education Partners',
    description: 'Providing technical validation on soil microbiology, organic pest management, and climate-resilient crop varieties.',
    website: '#',
    country: 'Uganda',
    isActive: true
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Hannah Weber',
    role: 'Growing Minds Volunteer',
    country: 'Munich, Germany',
    quote: 'My three months in Uganda changed my perspective on cooperation. Hands of Mercy Uganda creates an atmosphere of genuine equality where local teachers lead and international volunteers learn and support alongside them.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    category: 'Volunteer'
  },
  {
    id: 't-2',
    name: 'Teacher Grace Nakanwagi',
    role: 'Senior Science Teacher',
    country: 'Mukono, Uganda',
    quote: 'The Growing Futures school garden has made biology our pupils’ favorite subject. When German volunteers join us, our students love explaining the local medicinal plants to them. It is a true mutual exchange of respect.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    category: 'Teacher'
  },
  {
    id: 't-3',
    name: 'Dr. Michael Schultze',
    role: 'Intercultural Partnership Director',
    country: 'Frankfurt, Germany',
    quote: 'Hands of Mercy Uganda stands out because of their unwavering integrity and community ownership. Every initiative emerges from community listening rather than external imposition.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    category: 'Partner'
  }
];

export const INITIAL_APPLICATIONS: VolunteerApplication[] = [
  {
    id: 'app-101',
    fullName: 'Sophie Lindemann',
    dateOfBirth: '2001-04-12',
    nationality: 'German',
    country: 'Germany',
    email: 'sophie.lindemann@example.de',
    phone: '+49 176 4598213',
    address: 'Bergmannstraße 42, 10961 Berlin',
    preferredProgramme: 'Growing Minds (Education Volunteering)',
    preferredStartDate: '2026-10-01',
    preferredEndDate: '2026-12-15',
    skills: 'English tutoring, primary art activities, sports coaching, basic French',
    educationProfession: 'BA in Educational Science (Freie Universität Berlin)',
    previousExperience: 'Youth summer camp counselor in Brandenburg, community reading tutor.',
    interests: 'Intercultural education, literacy, youth sports, sustainable community development.',
    motivationWhy: 'I wish to experience community education outside Europe, learn about Ugandan pedagogy, and contribute respectfully under local teacher leadership.',
    motivationLearn: 'I hope to learn how communities create resilient, vibrant learning spaces with modest material resources.',
    motivationShare: 'Creative phonics exercises, interactive reading games, and basic classroom organization tools.',
    emergencyContact: 'Klaus Lindemann (Father): +49 171 2345678',
    dietaryRequirements: 'Vegetarian',
    accessibilityRequirements: 'None',
    otherInfo: 'Valid passport and up-to-date Yellow Fever vaccination card ready.',
    consentAgreed: true,
    status: 'Under Review',
    adminNotes: 'Interview scheduled via Google Meet for next Tuesday at 3:00 PM EAT. Clear focus on classroom support.',
    createdAt: '2026-09-12'
  },
  {
    id: 'app-102',
    fullName: 'Julian Becker',
    dateOfBirth: '1998-11-20',
    nationality: 'German',
    country: 'Germany',
    email: 'julian.becker@example.de',
    phone: '+49 151 9876543',
    address: 'Kaiserstraße 18, 76133 Karlsruhe',
    preferredProgramme: 'Growing Food & Futures (Agriculture)',
    preferredStartDate: '2026-11-05',
    preferredEndDate: '2027-02-10',
    skills: 'Permaculture design, organic horticulture, woodworking, irrigation setup',
    educationProfession: 'Degree in Sustainable Agriculture & Resource Management',
    previousExperience: 'Organic CSA farm apprentice in Baden-Württemberg; community garden organizer.',
    interests: 'Soil microbiology, agroforestry, companion planting, youth agricultural education.',
    motivationWhy: 'I am deeply inspired by Hands of Mercy Uganda’s emphasis on school gardens as learning environments and wish to contribute practical hands-on farming support.',
    motivationLearn: 'Traditional tropical soil management, indigenous pest repellent methods, and drought resilience.',
    motivationShare: 'Compost tea preparation, gravity-fed drip watering, and garden bed planning.',
    emergencyContact: 'Elke Becker (Mother): +49 721 876543',
    dietaryRequirements: 'None',
    accessibilityRequirements: 'None',
    otherInfo: 'Flexible with dates; happy to reside at community homestay.',
    consentAgreed: true,
    status: 'Accepted',
    adminNotes: 'Pre-departure briefing sent. Assigned to St. Jude Primary School agriculture demonstration plot in Mukono.',
    createdAt: '2026-09-08'
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Markus Vogel',
    email: 'm.vogel@stuttgart-partner.de',
    phone: '+49 711 554321',
    subject: 'Institutional Partnership with Baden-Württemberg University',
    message: 'Hello Hands of Mercy Uganda team. We are exploring a credit-bearing internship framework for students of social work and international development for the upcoming spring term. We would value a 30-minute coordination call.',
    preferredContactMethod: 'Email',
    status: 'New',
    createdAt: '2026-09-15'
  },
  {
    id: 'enq-2',
    name: 'Betty Nakitende',
    email: 'betty.nakitende@mukonodistrict.gov.ug',
    phone: '+256 772 884190',
    subject: 'Expanding School Garden Scheme to Kyampisi Sub-county',
    message: 'Greetings. The district education committee was very impressed with the vegetable yields at the pilot school in Mukono. We would like to invite your team to inspect two additional primary schools in Kyampisi.',
    preferredContactMethod: 'WhatsApp',
    status: 'Responded',
    createdAt: '2026-09-10'
  }
];

export const FAQ_ITEMS = [
  {
    category: 'Volunteering',
    question: 'Who can volunteer with Hands of Mercy Uganda?',
    answer: 'We welcome enthusiastic, respectful individuals aged 18 and above from Uganda, Germany, and across the globe. We seek open-minded volunteers who are eager to listen, learn alongside local teams, and respect Ugandan culture and child protection standards.'
  },
  {
    category: 'Volunteering',
    question: 'How long are volunteer placements?',
    answer: 'Placements typically range from 4 weeks to 6 months. We recommend a minimum stay of 6 to 8 weeks to allow for meaningful cultural immersion, strong relationships, and genuine contribution.'
  },
  {
    category: 'Volunteering',
    question: 'Do I replace a Ugandan teacher or local professional?',
    answer: 'Never. Our volunteers serve strictly in collaborative, supportive roles under the direct supervision of qualified Ugandan teachers, community leaders, and agricultural coordinators. Our philosophy is co-learning and mutual reinforcement.'
  },
  {
    category: 'Accommodation',
    question: 'Where do volunteers stay during their placement?',
    answer: 'Volunteers stay in vetted community host homes or secure volunteer guest residences located within easy walking or commuter distance of partner schools and projects. Accommodations provide private lockable bedrooms, clean wash facilities, and home-cooked Ugandan meals.'
  },
  {
    category: 'Uganda',
    question: 'What is the local language and how do we communicate?',
    answer: 'English is the official language of instruction across Uganda and is widely spoken in schools and community centers. Luganda is the primary local language in central Uganda. Our team provides beginner Luganda language lessons during your first orientation week!'
  },
  {
    category: 'Safeguarding',
    question: 'What safeguarding policies do all volunteers commit to?',
    answer: 'We uphold a zero-tolerance safeguarding policy for the protection of children and vulnerable individuals. Every volunteer must complete background checks, sign our Code of Conduct, adhere to strict photography permissions, and maintain professional boundaries at all times.'
  }
];
