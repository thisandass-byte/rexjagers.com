import React from 'react';
import { useSEO } from '../lib/seo.tsx';
import PageHeader from '../components/PageHeader.tsx';
import AnimatedSection from '../components/AnimatedSection.tsx';
import SectionTitle from '../components/SectionTitle.tsx';

const TermsOfService: React.FC = () => {
    const pageHeaderData = {
        title: "Terms of Service",
        subtitle: "Please read these terms carefully before using our services.",
        imageUrl: "https://images.pexels.com/photos/7412098/pexels-photo-7412098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        imageAlt: "A gavel and legal book representing terms and conditions"
    };

    useSEO({
        title: 'Terms of Service | RexJagers Executive Search',
        description: 'Review the terms of service for using the RexJagers website and engaging with our recruitment services.',
        imageUrl: pageHeaderData.imageUrl,
        imageAlt: pageHeaderData.imageAlt
    });

    return (
        <div>
            <PageHeader {...pageHeaderData} />

            <AnimatedSection className="py-20 md:py-28">
                <div className="container mx-auto px-6 max-w-4xl space-y-6 leading-relaxed text-gray-700 dark:text-slate-light">
                    <div>
                        <SectionTitle>Agreement to Terms</SectionTitle>
                        <p className="mt-4">
                            By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Use of Our Website</h2>
                        <p>
                            The content on this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Intellectual Property</h2>
                        <p>
                            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Limitation of Liability</h2>
                        <p>
                            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Disclaimer</h2>
                        <p>
                            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Governing Law</h2>
                        <p>
                            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gold mt-8 mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at <a href="mailto:contact@rexjagers.com" className="text-gold hover:underline">contact@rexjagers.com</a>.
                        </p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default TermsOfService;