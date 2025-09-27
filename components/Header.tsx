
import React, { useState, useEffect } from 'react';

const PlaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.34 9.32l-8.22-8.22C11.53.5 10.56 0 9.5 0 7.42 0 6.01 1.41 6.01 3.5c0 .4.08.77.22 1.12L2.5 8.35v.02c-.37.37-.6.88-.6 1.43 0 .55.23 1.06.6 1.43l3.29 3.29-3.3 3.16v.02c-.37.37-.6.88-.6 1.43 0 .55.23 1.06.6 1.43l1.83 1.83c.37.37.88.6 1.43.6.55 0 1.06-.23 1.43-.6l3.16-3.3 3.29 3.29c.37.37.88.6 1.43.6.55 0 1.06-.23 1.43-.6l.02-.02L22.88 15c.35-.23.63-.55.82-.92.36-.71.4-1.52.1-2.28-.31-.75-.8-1.39-1.46-1.98z" />
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `
    ${isScrolled ? 'fixed bg-white text-dark-gray shadow-md' : 'absolute bg-black bg-opacity-20 text-white'}
    top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" aria-label="Home">
            <PlaneIcon className="w-8 h-8 mr-2 text-brand-orange" />
          </a>
          <span className="text-2xl font-bold tracking-tight">Travel</span>
        </div>
      </div>
    </header>
  );
};

export default Header;