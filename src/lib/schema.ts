import React, { type ComponentType } from 'react';
import { BriefcaseIcon, UsersIcon, LightBulbIcon, BuildingLibraryIcon } from '../components/Icons.tsx';

// Types
export interface NavLink {
  name: string;
  path?: string; // Optional for dropdown headers
  children?: {
    name: string;
    path: string;
  }[];
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
  id: string;
  image: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}


// Constants
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Expertise',
    children: [
      { name: 'Our Services', path: '/services' },
      { name: 'Industry Sectors', path: '/sectors' },
    ]
  },
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
    id: 'future-of-the-c-suite-2024',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'The Future of the C-Suite: 5 Trends Shaping Executive Leadership in 2024',
    author: 'Aarav Sharma',
    date: 'August 15, 2024',
    excerpt: 'The modern C-suite is evolving at an unprecedented pace. We explore the critical trends, from AI integration to sustainability, that are redefining what it means to be a leader.',
    content: `
        <p>The executive landscape is in a constant state of flux, driven by technological advancements, shifting market dynamics, and evolving stakeholder expectations. As we move through 2024, it's clear that the roles within the C-suite are not just changing; they are being fundamentally redefined. Leaders who wish to remain effective must adapt to these new realities. Here are five critical trends that are shaping the future of executive leadership.</p>
        <h3>1. The AI-Integrated Executive</h3>
        <p>Artificial intelligence is no longer a tool for the IT department alone. C-suite leaders, from the CEO to the CMO, must now be AI-literate. This means understanding how AI can drive strategy, optimize operations, and create new revenue streams. The most effective leaders will be those who can champion AI initiatives, manage the ethical implications, and foster a culture of data-driven decision-making throughout the organization.</p>
        <h3>2. Sustainability as a Core Mandate</h3>
        <p>Environmental, Social, and Governance (ESG) considerations have moved from the periphery to the core of corporate strategy. The C-suite is now directly accountable for the company's environmental impact, social responsibility, and ethical governance. This requires a new breed of leader who can balance profitability with purpose, and who can effectively communicate the company's ESG story to investors, customers, and employees.</p>
        <h3>3. The Rise of the Chief People Officer</h3>
        <p>The war for talent has elevated the role of the Chief Human Resources Officer (CHRO) to that of a strategic partner to the CEO. Now often titled the Chief People Officer, this role is critical in shaping company culture, driving employee engagement, and building a resilient, agile workforce. The focus has shifted from traditional HR functions to a more holistic approach that encompasses employee well-being, diversity and inclusion, and future-of-work planning.</p>
        <h3>4. Radical Adaptability and Resilience</h3>
        <p>The pace of change has never been faster. Leaders must be able to navigate ambiguity, pivot quickly in response to market disruptions, and lead their teams through periods of uncertainty. This requires a high degree of emotional intelligence, resilience, and a commitment to continuous learning. The traditional top-down, command-and-control style of leadership is giving way to a more agile, collaborative, and empowering approach.</p>
        <h3>5. The Hyper-Personalized Customer Experience</h3>
        <p>In a crowded marketplace, customer experience is the key differentiator. The entire C-suite, not just the CMO, must be obsessed with the customer. This means leveraging data and technology to create hyper-personalized experiences, and empowering employees at all levels to deliver exceptional service. The leaders who succeed will be those who can build a truly customer-centric organization.</p>
        <p>In conclusion, the C-suite of the future will be more technologically adept, socially conscious, people-focused, and adaptable than ever before. As executive search partners, our role is to identify and cultivate these next-generation leaders who possess the skills, mindset, and vision to navigate the complexities of the modern business world.</p>
    `
  },
  {
    id: 'esg-core-competency-for-cfos',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Beyond the Balance Sheet: Why ESG is Now a Core Competency for CFOs',
    author: 'Priya Mehta',
    date: 'July 22, 2024',
    excerpt: 'Financial leaders are no longer just guardians of the bottom line. Discover why expertise in Environmental, Social, and Governance (ESG) is critical for today’s CFO.',
    content: `
        <p>For decades, the Chief Financial Officer (CFO) has been the ultimate guardian of the bottom line, focused on financial reporting, capital allocation, and shareholder returns. While these responsibilities remain crucial, a new, equally important mandate has emerged: Environmental, Social, and Governance (ESG). Today, a CFO's ability to integrate ESG principles into financial strategy is no longer a "nice-to-have" but a core competency essential for long-term value creation.</p>
        <h3>The Shift in Investor Expectations</h3>
        <p>The primary driver of this shift is the investment community. Investors increasingly recognize that companies with strong ESG performance are better positioned to mitigate risks, capitalize on new opportunities, and deliver sustainable, long-term returns. They are demanding more than just financial data; they want transparent, standardized reporting on ESG metrics. The CFO, as the primary liaison with investors, is now expected to articulate the company's ESG story and demonstrate its link to financial performance.</p>
        <h3>ESG as a Risk Management Framework</h3>
        <p>From climate-related physical risks to supply chain disruptions and regulatory changes, ESG factors represent significant financial risks. A forward-thinking CFO understands that a robust ESG strategy is a powerful risk management tool. By proactively addressing these issues, companies can avoid costly fines, reputational damage, and operational disruptions. The CFO's role is to quantify these risks and ensure they are integrated into the company's enterprise risk management (ERM) framework.</p>
        <h3>Unlocking New Opportunities</h3>
        <p>ESG is not just about mitigating risk; it's also about creating value. A strong commitment to sustainability can drive innovation, attract and retain top talent, enhance brand reputation, and open up new markets. For example, investing in renewable energy can lead to significant cost savings, while a commitment to diversity and inclusion can foster a more innovative and productive workforce. The CFO is uniquely positioned to identify these opportunities and allocate capital to the initiatives that will generate the highest returns.</p>
        <p>The modern CFO must be a strategic partner to the CEO, capable of seeing beyond the traditional balance sheet. They must be able to speak the language of sustainability and translate ESG performance into financial terms. As companies navigate the complexities of the 21st-century business landscape, the ESG-savvy CFO will be one of their most valuable assets.</p>
    `
  },
  {
    id: 'building-resilient-leadership-teams',
    image: 'https://images.pexels.com/photos/7841807/pexels-photo-7841807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Building a Resilient Leadership Team in the Age of Disruption',
    author: 'Rohan Desai',
    date: 'June 05, 2024',
    excerpt: 'In a volatile market, leadership resilience is paramount. We outline key strategies for assessing and developing the adaptive capacity of your executive team.',
    content: `
        <p>Disruption is the new normal. From pandemics and geopolitical instability to rapid technological shifts and changing consumer behaviors, the challenges facing businesses today are more complex and unpredictable than ever before. In this volatile environment, the single most important asset an organization can have is a resilient leadership team. But what exactly is leadership resilience, and how can you build it within your organization?</p>
        <h3>Defining Leadership Resilience</h3>
        <p>Leadership resilience is more than just the ability to bounce back from adversity. It's the capacity to anticipate, adapt, and thrive in the face of change. Resilient leaders are not just tough; they are also agile, optimistic, and emotionally intelligent. They are able to maintain a sense of calm and purpose in the midst of chaos, and they inspire their teams to do the same.</p>
        <h3>Assessing for Resilience in the Hiring Process</h3>
        <p>Building a resilient leadership team starts with the hiring process. When assessing candidates for senior roles, it's essential to look beyond their technical skills and experience. We employ competency-based interviewing techniques to probe for the key traits of resilience:</p>
        <ul>
          <li><strong>Adaptability:</strong> Ask for examples of times they have had to pivot quickly in response to unexpected challenges.</li>
          <li><strong>Optimism:</strong> Look for a realistic yet positive outlook, and a tendency to view setbacks as learning opportunities.</li>
          <li><strong>Emotional Intelligence:</strong> Assess their ability to manage their own emotions and empathize with others, especially under pressure.</li>
          <li><strong>Problem-Solving:</strong> Evaluate their ability to think critically and creatively to find solutions to complex problems.</li>
        </ul>
        <h3>Developing Resilience Within Your Existing Team</h3>
        <p>Resilience is not a fixed trait; it can be developed and strengthened over time. Organizations can foster resilience within their leadership teams through a variety of strategies:</p>
        <ul>
          <li><strong>Promote Psychological Safety:</strong> Create a culture where leaders feel safe to take risks, admit mistakes, and ask for help.</li>
          <li><strong>Invest in Leadership Development:</strong> Provide training and coaching on topics such as mindfulness, emotional regulation, and stress management.</li>
          <li><strong>Encourage Strong Networks:</strong> Foster a sense of camaraderie and mutual support among your leadership team.</li>
          <li><strong>Clarify Purpose and Values:</strong> A strong sense of purpose can be a powerful anchor in times of uncertainty.</li>
        </ul>
        <p>In the age of disruption, building a resilient leadership team is not just a strategic advantage; it's a strategic imperative. By making resilience a key criterion in your hiring and development processes, you can build an organization that is not just able to survive, but to thrive in the face of whatever challenges the future may hold.</p>
    `
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
