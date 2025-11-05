import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, TwitterIcon, MailIcon } from './Icons.tsx';
import Logo from './Logo.tsx';
import { motion } from 'framer-motion';
import { NAV_LINKS, SECTORS } from '../lib/schema.ts';

const Footer: React.FC = () => {
    const footerSectors = SECTORS.slice(0, 4);

    return (
        <footer className="bg-navy text-slate py-16 dark:bg-dark-bg-section">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Column 1: Brand & Social */}
                    <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
                        <Link to="/" className="inline-block mb-4 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy dark:focus-visible:ring-offset-dark-bg-section" aria-label="RexJagers Home">
                            <Logo variant="inverse" />
                        </Link>
                        <p className="text-sm text-slate/80 mb-6 max-w-xs">
                            Architects of Leadership. A premier executive search firm dedicated to identifying and placing visionary leaders.
                        </p>
                        <div className="flex space-x-6">
                            <motion.a whileHover={{ y: -2, scale: 1.1 }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-slate hover:text-gold transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy dark:focus-visible:ring-offset-dark-bg-section"><TwitterIcon className="h-6 w-6" /></motion.a>
                            <motion.a whileHover={{ y: -2, scale: 1.1 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-slate hover:text-gold transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy dark:focus-visible:ring-offset-dark-bg-section"><LinkedinIcon className="h-6 w-6" /></motion.a>
                            <motion.a whileHover={{ y: -2, scale: 1.1 }} href="mailto:contact@rexjagers.com" aria-label="Email Us" className="text-slate hover:text-gold transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy dark:focus-visible:ring-offset-dark-bg-section"><MailIcon className="h-6 w-6" /></motion.a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate/90 hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3: Sectors */}
                    <div>
                         <h3 className="text-lg font-semibold text-gold mb-4">Sectors</h3>
                         <ul className="space-y-2">
                             {footerSectors.map(sector => (
                                <li key={sector.name}>
                                    <Link to="/sectors" className="text-slate/90 hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                        {sector.name}
                                    </Link>
                                </li>
                            ))}
                             <li>
                                <Link to="/sectors" className="text-slate/90 font-semibold hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                    View All
                                </Link>
                             </li>
                         </ul>
                    </div>

                    {/* Column 4: Our Commitment */}
                    <div>
                        <h3 className="text-lg font-semibold text-gold mb-4">Our Commitment</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy-policy" className="text-slate/90 hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                    Discretion & Confidentiality
                                </Link>
                            </li>
                             <li>
                                <Link to="/about" className="text-slate/90 hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                    Diversity & Inclusion
                                </Link>
                            </li>
                             <li>
                                <Link to="/candidates" className="text-slate/90 hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                    Candidate Partnership
                                </Link>
                            </li>
                             <li>
                                <Link to="/about" className="text-slate/90 hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">
                                    Unyielding Integrity
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-gold mb-4">Get In Touch</h3>
                        <ul className="space-y-2 text-slate/90">
                            <li>Chennai, India</li>
                            <li>Bangalore, India</li>
                            <li className="pt-2">
                                <a href="mailto:contact@rexjagers.com" className="hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">contact@rexjagers.com</a>
                            </li>
                            <li>
                                <a href="tel:+917845423555" className="hover:text-gold transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">+91 78454 23555</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate/30 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                    <p className="text-xs text-slate/80 mb-4 sm:mb-0">&copy; {new Date().getFullYear()} RexJagers Executive Search. All Rights Reserved.</p>
                    <div className="text-xs text-slate/80 flex space-x-4">
                        <Link to="/privacy-policy" className="hover:text-gold transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms-of-service" className="hover:text-gold transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
