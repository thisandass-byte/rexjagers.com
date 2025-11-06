import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { CheckCircleIcon } from '../components/Icons';

const Contact: React.FC = () => {
  usePageMeta(
    'Contact Us | RexJagers Executive Search',
    'Connect with RexJagers to discuss your leadership needs or explore career opportunities. Reach our teams in Chennai and Bangalore.'
  );
  
  const location = useLocation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subject = params.get('subject');
    if (subject) {
      setFormState(prevState => ({ ...prevState, subject }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) newErrors.name = "Full Name is required.";
    if (!formState.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formState.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setTimeout(() => {
      // Simulate form submission
      console.log('Form data submitted:', formState);
      setStatus('success');
    }, 1500);
  };

  const inputStyles = 'w-full bg-white dark:bg-navy border rounded-md py-3 px-4 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-slate dark:focus:ring-offset-dark-bg-section transition-all duration-300';
  const normalBorder = 'border-slate/50 dark:border-slate/50 focus:border-gold focus:ring-gold';
  const errorBorder = 'border-red-500 focus:border-red-500 focus:ring-red-500';

  return (
    <div className="dark:text-slate">
      <PageHeader
        title="Contact Us"
        subtitle="Let's connect and build the future of leadership together."
        imageUrl="https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Professional woman smiling on a call, symbolizing communication and contact"
      />

      {/* Contact Form & Info */}
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <SectionTitle>Get in Touch</SectionTitle>
              <p className="dark:text-slate mt-4">
                Whether you are an organization seeking transformative leadership, or a senior executive considering your next career move, we would be delighted to hear from you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-2">Our Offices</h3>
              <p className="dark:text-slate">Chennai, India</p>
              <p className="dark:text-slate">Bangalore, India</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gold mb-2">Email</h3>
              <a href="mailto:contact@rexjagers.com" className="text-navy dark:text-white hover:text-gold transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">contact@rexjagers.com</a>
            </div>
             <div>
              <h3 className="text-xl font-bold text-gold mb-2">Phone</h3>
              <a href="tel:+917845423555" className="text-navy dark:text-white hover:text-gold transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold">+91 78454 23555</a>
            </div>
          </div>

          {/* Contact Form Container */}
          <div 
            className="bg-light-slate dark:bg-dark-bg-section p-8 border border-navy/15 dark:border-slate/30 rounded-lg flex items-center justify-center shadow-lg"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircleIcon className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Thank You!</h3>
                  <p className="dark:text-slate">Your message has been sent successfully. We will be in touch shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="w-full"
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <fieldset disabled={status === 'submitting'} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-white mb-2">Full Name</label>
                      <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required className={`${inputStyles} ${errors.name ? errorBorder : normalBorder}`} />
                      {errors.name && <p className="text-red-600 dark:text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-white mb-2">Email Address</label>
                      <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} required className={`${inputStyles} ${errors.email ? errorBorder : normalBorder}`} />
                      {errors.email && <p className="text-red-600 dark:text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-navy dark:text-white mb-2">Subject</label>
                      <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleInputChange} required className={`${inputStyles} ${errors.subject ? errorBorder : normalBorder}`} />
                      {errors.subject && <p className="text-red-600 dark:text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-white mb-2">Message</label>
                      <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleInputChange} required className={`${inputStyles} ${errors.message ? errorBorder : normalBorder}`}></textarea>
                      {errors.message && <p className="text-red-600 dark:text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                  </fieldset>
                  <div className="mt-6">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full px-8 py-3 bg-gold text-navy rounded-md font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-light-slate dark:focus-visible:ring-offset-dark-bg-section disabled:bg-slate/50 disabled:text-slate/80 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;