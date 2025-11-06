import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { INSIGHTS_ARTICLES } from '../lib/schema.ts';
import { useSEO } from '../lib/seo.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import NotFound from './NotFound.tsx';
import { ChevronLeftIcon } from '../components/Icons.tsx';

const InsightArticle: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const article = INSIGHTS_ARTICLES.find(a => a.id === articleId);

    useSEO({
        title: article ? `${article.title} | RexJagers` : 'Article Not Found',
        description: article ? article.excerpt : 'The requested article could not be found.',
        imageUrl: article?.image,
        type: 'article',
    });

    if (!article) {
        return <NotFound />;
    }

    return (
        <div className="bg-white dark:bg-navy">
            {/* Article Header */}
            <section className="relative h-[50vh] min-h-[400px] flex items-end justify-center text-center p-6 text-white">
                <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <motion.div 
                    className="relative z-10 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{article.title}</h1>
                    <div className="text-md text-slate-light">
                        <span>By {article.author}</span> | <span>{article.date}</span>
                    </div>
                </motion.div>
            </section>

            {/* Article Content */}
            <AnimatedSection className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-12">
                             <Link to="/insights" className="text-gold font-semibold text-lg hover:underline group flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                                <motion.span className="inline-block" whileHover={{ x: -5 }}><ChevronLeftIcon className="w-5 h-5 mr-1" /></motion.span> Back to Insights
                            </Link>
                        </div>
                        {/* FIX: Use dangerouslySetInnerHTML to render the HTML string from article.content */}
                        <article 
                           className="prose lg:prose-xl dark:prose-invert max-w-none"
                           dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default InsightArticle;
