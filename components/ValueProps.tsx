
import React from 'react';
import PriceTagIcon from './icons/PriceTagIcon';
import ChecklistIcon from './icons/ChecklistIcon';
import GemIcon from './icons/GemIcon';
import HeadsetIcon from './icons/HeadsetIcon';

interface BenefitBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitBlock: React.FC<BenefitBlockProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="bg-brand-blue text-white rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-dark-gray mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ValueProps: React.FC = () => {
  const benefits = [
    {
      icon: <PriceTagIcon className="w-8 h-8" />,
      title: "Unbeatable Prices",
      description: "Our smart search technology compares thousands of options to find you the absolute lowest prices on flights and hotels."
    },
    {
      icon: <ChecklistIcon className="w-8 h-8" />,
      title: "Effortless Planning",
      description: "Save time and stress. Find everything you need for your trip in one place, with a user-friendly experience."
    },
    {
      icon: <GemIcon className="w-8 h-8" />,
      title: "Exclusive Deals",
      description: "Access special offers and hidden gems you won't find anywhere else, curated just for our members."
    },
    {
      icon: <HeadsetIcon className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Travel with confidence knowing our dedicated support team is always there for you, anytime and anywhere."
    }
  ];

  return (
    <section id="features" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark-gray">Discover Our Advantage</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Why we are your best travel companion for every journey.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitBlock key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;