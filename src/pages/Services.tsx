import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../lib/schema.ts';
import { useSEO } from '../lib/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import ProcessStepper from '../components/ProcessStepper.tsx';


const Services: React.FC = () => {
  const pageHeaderData = {
    title: "Our Services",
    subtitle: "Tailored solutions to build and empower your leadership teams.",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Diverse team putting hands together, representing partnership and teamwork"
  };

  useSEO({
    title: 'Our Services | RexJagers Executive Search',
    description: 'Explore our signature services including executive search, leadership consulting, talent mapping, and board advisory, designed to build your organization\'s leadership foundation.',
    imageUrl: pageHeaderData.imageUrl,
    imageAlt: pageHeaderData.imageAlt
  });

  return (
    <div>
      <PageHeader {...pageHeaderData} />

      {/* Services Grid */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 p-4 bg-navy/5 dark:bg-slate/10 rounded-full">
                  <service.icon className="h-10 w-10 text-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="leading-relaxed text-gray-700 dark:text-slate-light">
                    {service.description} Our approach is always bespoke, ensuring that we understand the nuances of your organization and the market landscape. We go beyond the job description to identify leaders with the right competencies, experience, and cultural alignment to drive your business forward. We are not just recruiters; we are strategic partners in your long-term success.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
        <ProcessStepper />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 md:py-28 bg-white dark:bg-navy">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>Ready to Build Your Dream Team?</SectionTitle>
            <p className="max-w-3xl mx-auto mb-8 mt-4 text-gray-700 dark:text-slate-light">
              Let's discuss how our bespoke executive search and leadership consulting services can help you achieve your strategic goals.
            </p>
            <Link to="/contact" className="mt-4 inline-block px-8 py-4 bg-gold text-navy rounded-md text-lg font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy">
                Start a Conversation
            </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;