import React from 'react';
import { usePageMeta } from '../lib/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';

const PrivacyPolicy: React.FC = () => {
    usePageMeta(
        'Privacy Policy | RexJagers Executive Search',
        'Read the privacy policy for RexJagers, outlining how we collect, use, and protect your personal and professional data.'
    );

    return (
        <div className="text-navy/75 dark:text-slate">
            <PageHeader
                title="Privacy Policy"
                subtitle="Your trust and confidentiality are paramount to us."
                imageUrl="https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                imageAlt="A key and lock symbolizing security and privacy"
            />

            <AnimatedSection className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-4xl space-y-6 leading-relaxed">
                    <div>
                        <SectionTitle>Introduction</SectionTitle>
                        <p className="mt-4">
                            RexJagers Executive Search ("we," "us," or "our") is committed to protecting the privacy and security of your personal data. This Privacy Policy describes how we collect, use, and share your information when you use our website or engage with our executive search services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Information We Collect</h2>
                        <p>
                            We may collect personal information that you provide to us, such as your name, contact details, professional experience, resume/CV, and other information relevant to the recruitment process. We may also collect information from publicly available sources and third parties as part of our research.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>To provide our executive search and leadership consulting services.</li>
                            <li>To assess your suitability for client opportunities.</li>
                            <li>To communicate with you about relevant roles and our services.</li>
                            <li>To improve our website and services.</li>
                            <li>To comply with legal and regulatory obligations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Data Sharing and Confidentiality</h2>
                        <p>
                            We treat all personal data with the strictest confidentiality. Your information will only be shared with a client with your explicit consent for a specific opportunity. We do not sell or lease your personal data to third parties.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Data Security</h2>
                        <p>
                            We have implemented appropriate technical and organizational measures to protect your personal data from unauthorized access, use, or disclosure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Your Rights</h2>
                        <p>
                            You have the right to access, correct, or request the deletion of your personal data. Please contact us to exercise these rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@rexjagers.com" className="text-gold hover:underline">privacy@rexjagers.com</a>.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default PrivacyPolicy;
