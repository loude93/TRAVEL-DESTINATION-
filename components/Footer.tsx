
import React from 'react';

const Footer: React.FC = () => {
  const affiliateLink = "https://wayaway.tpx.li/iVfBSncs";

  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">Travel</span>
            <p className="text-sm mt-1">Your journey, your way.</p>
          </div>
          <div className="flex space-x-6">
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">About</a>
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Contact</a>
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Travel. All rights reserved. This is an affiliate landing page.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
