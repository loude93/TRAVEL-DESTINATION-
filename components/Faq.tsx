
import React, { useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

const faqs = [
  {
    question: "How do you find the best deals?",
    answer: "We use a powerful search engine that scans and compares prices from hundreds of airlines and travel agencies in real-time. This ensures you see the most competitive prices available for your desired route and dates."
  },
  {
    question: "Is this service completely free?",
    answer: "Yes, our flight and hotel search service is 100% free to use. We find you the best deals, and you book directly with the airline or agency. There are no hidden fees or extra charges from our side."
  },
  {
    question: "What is the Plus membership plan?",
    answer: "The Plus membership is a premium membership that gives you cashback on flights, hotels, car rentals, and other travel services. It's a great way to save even more money on your travels."
  },
  {
    question: "How do I book a flight or hotel?",
    answer: "Once you find a deal you like on our site, we redirect you to the website of the airline or travel agency to complete your booking. This means your booking is directly with the provider, giving you peace of mind."
  },
  {
    question: "Can I trust the travel providers listed?",
    answer: "Absolutely. We partner with reputable and well-known airlines, hotel chains, and online travel agencies to ensure you have a safe and reliable booking experience."
  }
];

const FaqItem: React.FC<{ faq: { question: string, answer: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-dark-gray focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        {isOpen ? <MinusIcon className="w-6 h-6 text-brand-blue" /> : <PlusIcon className="w-6 h-6 text-gray-500" />}
      </button>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pt-4 text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark-gray">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. Here are some of the most common things we get asked.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;