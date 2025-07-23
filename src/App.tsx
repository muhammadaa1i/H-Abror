import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contacts = lazy(() => import('./components/Contacts'));
const Footer = lazy(() => import('./components/Footer'));
const TelegramContactWidget = lazy(() => import('./components/TelegramContactWidget'));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="loading-spinner" role="status" aria-label="Loading">
    <span className="sr-only">Loading...</span>
  </div>
);

function App() {
  return (
    <>
      {/* Critical above-the-fold components loaded immediately */}
      <Header />
      <Hero />
      
      {/* Below-the-fold components lazy loaded */}
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <WhyUs />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contacts />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <TelegramContactWidget />
      </Suspense>
    </>
  );
}

export default App
