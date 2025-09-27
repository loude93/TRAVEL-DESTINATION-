
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-light-gray min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
