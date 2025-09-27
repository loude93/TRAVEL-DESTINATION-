
import React from 'react';

const Hero: React.FC = () => {
  const ctaLink = "https://wayaway.tpx.li/iVfBSncs"; 

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1018&grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center w-full">
        <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Fly Smart, Pay Less
            </h1>
            <p className="text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto drop-shadow-md">
              Discover unbeatable prices on flights and hotels. Your next adventure starts here.
            </p>
            <a 
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-white font-bold text-xl py-4 px-10 rounded-full hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
            >
              Find Deals Now
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;