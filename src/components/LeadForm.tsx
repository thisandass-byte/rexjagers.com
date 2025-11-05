import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, CheckCircleIcon } from './Icons.tsx';
import SectionTitle from './SectionTitle.tsx';
import AnimatedSection from './AnimatedSection.tsx';

const LeadForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            console.log('Lead captured:', email);
            setStatus('success');
        }, 1500);
    };

    return (
        <AnimatedSection className="py-20 md:py-28 bg-light-slate dark:bg-dark-bg-section">
            <div className="container mx-auto px-6">
                <div className="bg-light-slate dark:bg-dark-bg-section p-8 md:p-12 rounded-lg border border-navy/15 dark:border-slate/30 shadow-lg text-center relative overflow-hidden">
                    {status === 'success' ? (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CheckCircleIcon className="w-16 h-16 text-gold mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Thank You!</h3>
                            <p className="text-navy/75 dark:text-slate">Your download is on its way. Check your inbox for our latest white paper.</p>
                        </motion.div>
                    ) : (
                        <>
                            <SectionTitle>Get Our Latest White Paper</SectionTitle>
                            <p className="mt-4 max-w-2xl mx-auto text-navy/75 dark:text-slate mb-8">
                                "The Future of Leadership: Navigating the C-Suite in the AI Era"
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                                <label htmlFor="lead-email" className="sr-only">Email address</label>
                                <input
                                    type="email"
                                    id="lead-email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your email address"
                                    className="flex-grow w-full bg-white dark:bg-navy border border-slate/50 dark:border-slate/50 rounded-md py-3 px-4 text-navy dark:text-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-light-slate dark:focus:ring-offset-dark-bg-section transition-all duration-300"
                                    disabled={status === 'submitting'}
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gold text-navy rounded-md font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-light-slate dark:focus-visible:ring-offset-dark-bg-section disabled:bg-slate/50 disabled:scale-100 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        'Submitting...'
                                    ) : (
                                        <>
                                            <DownloadIcon className="w-5 h-5 mr-2" />
                                            Download Now
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default LeadForm;
