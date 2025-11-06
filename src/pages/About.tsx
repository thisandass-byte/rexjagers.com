import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../lib/schema.ts';
import { useSEO } from '../lib/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';
import { LinkedinIcon, FocusIcon, HandshakeIcon, GlobeIcon, DiversityIcon } from '../components/Icons.tsx';

const WHY_CHOOSE_US = [
  {
    icon: FocusIcon,
    title: 'Deep Sector Specialization',
    description: 'Our consultants are true industry experts, not generalists. This depth allows us to understand the nuances of your sector and deliver leaders with proven, relevant experience.'
  },
  {
    icon: HandshakeIcon,
    title: 'Partner-Led Dedication',
    description: 'Every search is directly managed by a senior partner from inception to completion. This ensures you receive the highest level of expertise, accountability, and strategic counsel.'
  },
  {
    icon: GlobeIcon,
    title: 'Unrivaled Network Access',
    description: 'We cultivate long-term relationships with the market’s most influential and high-performing leaders, providing you with exclusive access to a curated pool of passive, top-tier talent.'
  },
  {
    icon: DiversityIcon,
    title: 'Commitment to Diversity',
    description: 'We are dedicated to building diverse leadership teams. Our inclusive search process identifies and attracts a broad range of candidates, fostering innovation and better business outcomes.'
  }
];

const About: React.FC = () => {
  const pageHeaderData = {
    title: "About RexJagers",
    subtitle: "Connecting vision with leadership to shape the future of industries.",
    imageUrl: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "A team of executives in a modern bright office, representing RexJagers' leadership focus"
  };

  useSEO({
    title: 'About Us | RexJagers Executive Search',
    description: 'Learn about RexJagers\' mission, vision, and the expert leadership team driving our success in connecting visionary talent with top-tier organizations.',
    imageUrl: pageHeaderData.imageUrl,
    imageAlt: pageHeaderData.imageAlt
  });

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <PageHeader {...pageHeaderData} />

      {/* Our Mission & Vision */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle>Our Mission</SectionTitle>
            <p className="mb-6 mt-4 text-navy dark:text-slate-light">
              To serve as a trusted advisor to our clients, delivering transformative talent that creates lasting value and competitive advantage. We are committed to a process that is rigorous, transparent, and tailored to the unique needs of every organization we partner with.
            </p>
            <SectionTitle>Our Vision</SectionTitle>
            <p className="mt-4 text-navy dark:text-slate-light">
              To be India’s most respected executive search firm, renowned for our deep industry expertise, unwavering integrity, and our pivotal role in shaping the leadership landscape of tomorrow.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="A diverse team of professionals collaborating around a table, symbolizing RexJagers' strategic and partner-led approach." loading="lazy" className="rounded-lg shadow-2xl object-cover w-full h-[500px]"/>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Our Approach */}
       <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>The RexJagers Difference</SectionTitle>
            <p className="max-w-3xl mx-auto mb-12 mt-4 text-navy dark:text-slate-light">
               Our methodology is built on a foundation of deep partnership and precision. We invest time to understand your strategic objectives, company culture, and the specific challenges of a role.
            </p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Partner-Led Engagement</h3>
                    <p className="text-sm text-navy dark:text-slate-light">Every search is led by a senior partner, ensuring you benefit from our deepest experience and accountability from start to finish.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Research-Driven Insight</h3>
                    <p className="text-sm text-navy dark:text-slate-light">We combine proprietary data with rigorous, real-time market research to identify and engage candidates who are not actively seeking new roles.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Holistic Assessment</h3>
                    <p className="text-sm text-navy dark:text-slate-light">Our evaluation goes beyond the resume. We assess for cultural fit, leadership competencies, and long-term potential to ensure a successful placement.</p>
                </motion.div>
            </motion.div>
        </div>
      </AnimatedSection>

      {/* Why Choose RexJagers? */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>Why Choose RexJagers?</SectionTitle>
            <p className="max-w-3xl mx-auto mb-12 mt-4 text-navy dark:text-slate-light">
              In a competitive landscape, our clients choose us for our unparalleled commitment, deep market insight, and proven results. Here’s what sets us apart:
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {WHY_CHOOSE_US.map((item) => (
                <motion.div key={item.title} variants={itemVariants} className="flex items-start gap-6 bg-light-slate dark:bg-dark-bg-section p-8 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                  <div className="flex-shrink-0">
                    <item.icon className="w-10 h-10 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-navy dark:text-slate-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Core Values */}
      <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
        <div className="container mx-auto px-6 text-center">
            <SectionTitle>Our Core Values</SectionTitle>
            <p className="max-w-3xl mx-auto mb-12 mt-4 text-navy dark:text-slate-light">
               The principles that guide every action, decision, and partnership we undertake.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Integrity</h3>
                    <p className="text-sm text-navy dark:text-slate-light">We operate with unwavering honesty, transparency, and ethical standards, building relationships founded on trust.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Excellence</h3>
                    <p className="text-sm text-navy dark:text-slate-light">We are relentless in our pursuit of quality, delivering exceptional results and exceeding expectations in every search.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Partnership</h3>
                    <p className="text-sm text-navy dark:text-slate-light">We function as a seamless extension of our clients' teams, fostering collaborative relationships to achieve shared goals.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="bg-white dark:bg-navy p-6 rounded-lg border border-navy/15 dark:border-slate/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:box-shadow-gold">
                    <h3 className="text-xl font-bold text-gold mb-2">Discretion</h3>
                    <p className="text-sm text-navy dark:text-slate-light">We handle every engagement with the utmost confidentiality, respecting the sensitivity of our work for clients and candidates.</p>
                </motion.div>
            </motion.div>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTitle>Meet Our Leadership</SectionTitle>
            <p className="mt-4 max-w-2xl mx-auto text-navy dark:text-slate-light">A team of seasoned professionals dedicated to your success.</p>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="group relative bg-white dark:bg-dark-bg-section rounded-lg overflow-hidden border border-navy/15 dark:border-slate/30 text-center shadow-md">
                <div className="relative">
                  <img src={member.image} alt={`Portrait of ${member.name}, ${member.title} at RexJagers`} loading="lazy" className="w-full h-80 object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <a 
                        href={member.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 text-white backdrop-blur-sm rounded-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                      View Profile
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gold mb-4">{member.title}</p>
                  <p className="text-sm text-navy dark:text-slate-light">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;