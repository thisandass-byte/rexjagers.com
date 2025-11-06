import React, { ErrorInfo, ReactNode } from 'react';
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
const InsightArticle = React.lazy(() => import('./pages/InsightArticle.tsx'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy.tsx'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService.tsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.tsx'));

// Error Boundary Component
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  // FIX: Switched to class property for state initialization.
  // This is the modern approach and correctly types `this.state` and `this.props` for the component,
  // resolving multiple TypeScript errors.
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy text-white flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl font-serif text-gold mb-4">Something went wrong.</h1>
            <p className="mb-8">We've encountered an unexpected error. Please try refreshing the page.</p>
            <button
                onClick={this.handleRefresh}
                className="px-6 py-3 bg-gold text-navy rounded-md font-semibold"
            >
                Refresh Page
            </button>
        </div>
      )
    }

    return this.props.children;
  }
}


const AppRoutes: React.FC = () => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="sectors" element={<Sectors />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:articleId" element={<InsightArticle />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </ErrorBoundary>
);

export default AppRoutes;