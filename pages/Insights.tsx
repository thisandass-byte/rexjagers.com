import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { INSIGHTS_ARTICLES } from '../constants';
import usePageMeta from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import GatedContent from '../components/GatedContent';
import type { InsightArticle } from '../types';

const ArticleCard: React.FC<{ article: InsightArticle }> = ({ article }) => (
    <motion.div
        className="h-full"
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
    >
        <Link to="#" className="group bg-white dark:bg-navy rounded-lg overflow-hidden border border-navy/15 dark:border-slate/30 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold/10 flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy">
            <div className="overflow-hidden">
                <img src={article.image} alt={`Article titled ${article.title}`} loading="lazy" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy dark:text-white leading-tight group-hover:text-gold transition-colors mb-2">{article.title}</h3>
                <div className="text-sm text-navy/75 dark:text-slate mb-4">
                    <span>By {article.author}</span> | <span>{article.date}</span>
                </div>
                <p className="text-navy/75 dark:text-slate text-sm flex-grow">{article.excerpt}</p>
            </div>
        </Link>
    </motion.div>
);

const Insights: React.FC = () => {
    usePageMeta(
        'Insights | RexJagers Executive Search',
        'Explore thought leadership on C-suite trends, governance, and talent acquisition from the experts at RexJagers.'
    );

    const listVariants = {
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };

    return (
        <div className="bg-white dark:bg-navy text-navy/75 dark:text-slate">
            <PageHeader
                title="Thought Leadership"
                subtitle="Expert insights on the trends shaping executive talent and corporate governance."
                imageUrl="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                imageAlt="Professionals collaborating over a tablet, symbolizing research and insights"
            />

            <AnimatedSection className="py-20 md:py-28">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <SectionTitle>Our Latest Articles</SectionTitle>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {INSIGHTS_ARTICLES.map((article) => (
                            <ArticleCard key={article.title} article={article} />
                        ))}
                    </motion.div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
                <div className="container mx-auto px-6">
                    <GatedContent />
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Insights;