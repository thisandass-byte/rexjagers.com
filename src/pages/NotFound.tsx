import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import CTAButton from '../components/CTAButton.tsx';
import { useSEO } from '../lib/seo.tsx';

const NotFound: React.FC = () => {
  const pageHeaderData = {
    title: "404: Page Not Found",
    subtitle: "The page you are looking for does not exist or has been moved.",
    imageUrl: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "A person looking at a map, looking lost"
  };

  useSEO({
    title: 'Page Not Found | RexJagers', 
    description: 'The page you are looking for does not exist.',
    imageUrl: pageHeaderData.imageUrl,
    imageAlt: pageHeaderData.imageAlt
  });

  return (
    <div>
      <PageHeader {...pageHeaderData} />
      <AnimatedSection className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-6">
          <p className="text-lg mb-8 text-gray-700 dark:text-slate-light">It seems you've taken a wrong turn. Let's get you back on track.</p>
          <CTAButton to="/">Go to Homepage</CTAButton>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;