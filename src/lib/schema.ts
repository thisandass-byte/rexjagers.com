import type { ComponentType } from 'react';
import { BriefcaseIcon, UsersIcon, LightBulbIcon, BuildingLibraryIcon } from '../components/Icons.tsx';

// Types
export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Sector {
  image: string;
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedinUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  location: string;
  description: string;
  requirements: string[];
}

export interface InsightArticle {
  image: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}


// Constants
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Industry Sectors', path: '/sectors' },
  { name: 'For Candidates', path: '/candidates' },
  { name: 'Insights', path: '/insights' },
  { name: 'Careers', path: '/careers' },
];

export const SERVICES: Service[] = [
  {
    icon: BriefcaseIcon,
    title: 'Executive Search',
    description: 'Our core expertise lies in identifying and attracting high-impact leaders, C-suite executives, and board members who align with your strategic goals.'
  },
  {
    icon: UsersIcon,
    title: 'Leadership Consulting',
    description: 'We provide advisory services to help you build and develop high-performing leadership teams, fostering a culture of excellence and innovation.'
  },
  {
    icon: LightBulbIcon,
    title: 'Talent Mapping & Intelligence',
    description: 'Gain a competitive edge with our in-depth market intelligence and talent mapping services, identifying future leaders and succession pipelines.'
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Board Advisory',
    description: 'We assist in building and diversifying boards, ensuring a robust governance structure that drives long-term value and strategic oversight.'
  }
];

export const SECTORS: Sector[] = [
  {
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Information Technology',
    description: 'From SaaS pioneers to enterprise tech giants, we recruit visionary CIOs, CTOs, and tech leaders who drive digital transformation.'
  },
  {
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Banking & Financial Services',
    description: 'We navigate the complexities of the financial world to find leaders for investment banking, asset management, fintech, and more.'
  },
  {
    image: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Healthcare & Life Sciences',
    description: 'Identifying compassionate and strategic leaders for hospitals, pharmaceuticals, and biotech firms to advance patient care and innovation.'
  },
  {
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Manufacturing & Industrials',
    description: 'We source top-tier operations, supply chain, and engineering executives who optimize efficiency and drive industrial growth.'
  },
  {
    image: 'https://images.pexels.com/photos/5728551/pexels-photo-5728551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Engineering & R&D',
    description: 'Connecting groundbreaking companies with the engineering and research leaders who are shaping the future of technology and infrastructure.'
  },
  {
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Consumer & Retail',
    description: 'Finding innovative leaders for the dynamic consumer and retail sectors who can navigate market trends and enhance brand value.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aarav Sharma',
    title: 'Managing Partner',
    image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'With over two decades of experience in executive search, Aarav has a proven track record of placing transformative leaders across the technology and financial services sectors.',
    linkedinUrl: 'https://linkedin.com/in/aaravsharma-placeholder'
  },
  {
    name: 'Priya Mehta',
    title: 'Senior Partner, Healthcare',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Priya leads our Healthcare practice, bringing deep industry knowledge and a passion for connecting organizations with leaders who are dedicated to improving lives.',
    linkedinUrl: 'https://linkedin.com/in/priyamehta-placeholder'
  },
  {
    name: 'Rohan Desai',
    title: 'Partner, Industrials',
    image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Rohan specializes in the manufacturing and engineering verticals. His strategic approach helps clients build robust leadership teams that drive operational excellence.',
    linkedinUrl: 'https://linkedin.com/in/rohandesai-placeholder'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "RexJagers understood our unique culture and delivered a slate of candidates that was second to none. Their process was seamless and highly professional. We found our new CTO in record time.",
    name: "Vikram Singh",
    company: "CEO, Innovatech Solutions"
  },
  {
    quote: "The team at RexJagers are true partners. Their market intelligence and consultative approach were invaluable in our search for a new Head of Operations. I highly recommend them.",
    name: "Anjali Verma",
    company: "CHRO, Global Manufacturing Co."
  },
  {
    quote: "As a candidate, I was thoroughly impressed by the professionalism and transparency of RexJagers. They provided excellent guidance and support throughout the entire process.",
    name: "Siddharth Rao",
    company: "CFO, Apex Financials"
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'sr-consultant-tech',
    title: 'Senior Consultant - Technology Practice',
    location: 'Bangalore, India',
    description: 'We are seeking an experienced Senior Consultant to join our growing Technology Practice. You will be responsible for managing the full lifecycle of executive search assignments, from client engagement to candidate placement, for senior-level roles in the tech industry.',
    requirements: [
      '8+ years of experience in executive search or talent acquisition within the technology sector.',
      'Proven track record of placing C-level and VP-level executives.',
      'Deep understanding of the Indian technology landscape.',
      'Exceptional client management and communication skills.',
      'Strong research and analytical abilities.'
    ]
  },
  {
    id: 'research-analyst-bfs',
    title: 'Research Analyst - Banking & Financial Services',
    location: 'Chennai, India',
    description: 'As a Research Analyst, you will play a crucial role in our search process by identifying, mapping, and engaging with top-tier talent in the Banking and Financial Services (BFS) sector. You will support our partners in delivering market intelligence and building strong candidate pipelines.',
    requirements: [
      '3-5 years of experience in a research-oriented role within a search firm or corporate recruiting team.',
      'Knowledge of the BFS industry is highly preferred.',
      'Excellent research skills using various online tools and databases.',
      'Strong organizational skills and attention to detail.',
      'A degree in Business, Finance, or a related field.'
    ]
  },
  {
    id: 'associate-healthcare',
    title: 'Associate - Healthcare & Life Sciences',
    location: 'Chennai, India',
    description: 'The Associate will support the full executive search process within our Healthcare & Life Sciences practice. This role involves project management, candidate assessment, and client communication, offering a clear path for growth into a consultant role.',
    requirements: [
      '5+ years of professional experience, with at least 2 years in recruitment or the healthcare industry.',
      'Strong project management and interpersonal skills.',
      'Ability to assess candidate qualifications and cultural fit.',
      'High level of professionalism and discretion.',
      'MBA or equivalent advanced degree is a plus.'
    ]
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'The Future of the C-Suite: 5 Trends Shaping Executive Leadership in 2024',
    author: 'Aarav Sharma',
    date: 'August 15, 2024',
    excerpt: 'The modern C-suite is evolving at an unprecedented pace. We explore the critical trends, from AI integration to sustainability, that are redefining what it means to be a leader.'
  },
  {
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Beyond the Balance Sheet: Why ESG is Now a Core Competency for CFOs',
    author: 'Priya Mehta',
    date: 'July 22, 2024',
    excerpt: 'Financial leaders are no longer just guardians of the bottom line. Discover why expertise in Environmental, Social, and Governance (ESG) is critical for today’s CFO.'
  },
  {
    image: 'https://images.pexels.com/photos/7841807/pexels-photo-7841807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Building a Resilient Leadership Team in the Age of Disruption',
    author: 'Rohan Desai',
    date: 'June 05, 2024',
    excerpt: 'In a volatile market, leadership resilience is paramount. We outline key strategies for assessing and developing the adaptive capacity of your executive team.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Discovery & Strategy',
    description: 'We begin with a deep dive into your organization, culture, and strategic goals to create a comprehensive search profile that defines success.'
  },
  {
    title: 'Market Research & Sourcing',
    description: 'Our team conducts exhaustive, real-time market research, identifying and discreetly engaging a diverse slate of high-caliber, often passive, candidates.'
  },
  {
    title: 'Assessment & Selection',
    description: 'We employ a rigorous, competency-based assessment methodology to evaluate candidates, presenting you with a shortlist of finalists who are a precise fit.'
  },
  {
    title: 'Offer & Integration',
    description: 'We act as a trusted advisor during the offer stage and provide post-placement support to ensure a smooth and successful integration for your new leader.'
  }
];
