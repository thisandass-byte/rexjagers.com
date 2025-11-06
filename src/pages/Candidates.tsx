import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../lib/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import { CheckCircleIcon } from '../components/Icons.tsx';

const CANDIDATE_COMMITMENTS = [
  {
    title: 'Absolute Confidentiality',
    text: 'Your profile and conversations are held in the strictest confidence. We will never share your information without your explicit consent.'
  },
  {
    title: 'Strategic Guidance',
    text: 'We provide honest feedback and market intelligence to help you make informed career decisions.'
  },
  {
    title: 'Transparent Process',
    text: 'We keep you informed at every stage of the search process, providing clear communication and timely updates.'
  },
  {
    title: 'Long-Term Partnership',
    text: 'We aim to be a resource for you throughout your career, not just for a single placement.'
  }
];

const Candidates: React.FC = () => {
  const pageHeaderData = {
    title: "For Candidates",
    subtitle: "Your partner in career advancement.",
    imageUrl: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Executive professional walking towards a modern building, symbolizing career growth"
  };

  useSEO({
    title: 'For Candidates | RexJagers Executive Search',
    description: 'Advance your career with RexJagers. We partner with exceptional leaders, offering confidential guidance and access to premier executive opportunities.',
    imageUrl: pageHeaderData.imageUrl,
    imageAlt: pageHeaderData.imageAlt
  });

  return (
    <div>
      <PageHeader {...pageHeaderData} />

      {/* Main Content */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <SectionTitle>A Confidential & Strategic Partnership</SectionTitle>
          </div>
          <div className="space-y-6 leading-relaxed mt-6 text-navy dark:text-slate-light">
            <p>
              At RexJagers, we build long-term relationships with exceptional leaders. We understand that a career move is a significant life decision. As such, we operate with the utmost discretion, providing you with transparent, insightful, and strategic guidance throughout your journey.
            </p>
            <p>
              When you partner with us, you gain more than just access to premier opportunities. You gain a trusted advisor dedicated to understanding your aspirations, strengths, and long-term goals. We connect you with organizations where you can make a meaningful impact and achieve your full potential.
            </p>
          </div>

          <div className="mt-12 p-8 bg-light-slate dark:bg-dark-bg-section border border-navy/15 dark:border-slate/30 rounded-lg">
            <h3 className="text-2xl font-bold text-gold mb-6">Our Commitment to You</h3>
            <ul className="space-y-5 text-navy dark:text-slate-light">
              {CANDIDATE_COMMITMENTS.map((item) => (
                <li key={item.title} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>{item.title}:</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 text-center">
            <SectionTitle>Join Our Exclusive Network</SectionTitle>
            <p className="max-w-2xl mx-auto mb-8 mt-4 text-navy dark:text-slate-light">If you are a senior executive or an emerging leader, we invite you to connect with us. Submit your profile to be considered for current and future leadership opportunities.</p>
            <Link to="/contact?subject=Candidate Profile Submission" className="inline-block px-8 py-4 bg-gold text-navy rounded-md text-lg font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy">
              Submit Your Profile
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Candidates;