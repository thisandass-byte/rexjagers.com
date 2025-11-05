import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/About.tsx'));
const Services = React.lazy(() => import('./pages/Services.tsx'));
const Sectors = React.lazy(() => import('./pages/Sectors.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Candidates = React.lazy(() => import('./pages/Candidates.tsx'));
const Insights = React.lazy(() => import('./pages/Insights.tsx'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy.tsx'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService.tsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.tsx'));

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="sectors" element={<Sectors />} />
      <Route path="candidates" element={<Candidates />} />
      <Route path="insights" element={<Insights />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
