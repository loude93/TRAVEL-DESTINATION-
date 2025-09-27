
import React, { useState, useEffect } from 'react';
import ArrowUpIcon from './icons/ArrowUpIcon';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        fixed bottom-8 right-8
        bg-brand-orange text-white
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg
        hover:bg-brand-orange-dark hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange
        transition-all duration-300 ease-in-out
      `}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;
