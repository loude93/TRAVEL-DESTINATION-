import React from 'react';

const CtaSection: React.FC = () => {
  const affiliateLink = "https://wayaway.tpx.li/iVfBSncs";

  return (
    <section id="cta" className="bg-brand-blue py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Save Big on Your Next Trip?</h2>
          <p className="text-lg mb-8 text-white max-w-2xl mx-auto opacity-90">
            Don't wait! The adventure of a lifetime is just a few clicks away. Find the best deals now.
          </p>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange text-white font-bold text-xl py-4 px-10 rounded-full hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-dark transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
          >
            Search Flights & Hotels
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;