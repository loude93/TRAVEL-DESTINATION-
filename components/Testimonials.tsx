
import React from 'react';
import QuoteIcon from './icons/QuoteIcon';

const testimonials = [
  {
    quote: "This is the best travel site I've ever used. I found a flight to Bali for 50% less than I could find anywhere else. The process was seamless!",
    name: "Sarah L.",
    title: "World Traveler",
    avatar: "https://i.pravatar.cc/150?img=1" 
  },
  {
    quote: "The interface is so simple and intuitive. I planned our entire family vacation in under an hour without any stress. Highly recommended!",
    name: "Michael B.",
    title: "Family Vacation Planner",
    avatar: "https://i.pravatar.cc/150?img=28"
  },
  {
    quote: "I was skeptical at first, but the deals are absolutely real. I saved hundreds on my last-minute business trip to London. Thank you!",
    name: "Jessica P.",
    title: "Spontaneous Adventurer",
    avatar: "https://i.pravatar.cc/150?img=45"
  }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, title, avatar }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center h-full">
            <img src={avatar} alt={`Avatar of ${name}`} className="w-20 h-20 rounded-full mb-4 border-4 border-brand-blue-dark" />
            <QuoteIcon className="w-8 h-8 text-brand-blue opacity-50 mb-4" />
            <p className="text-gray-600 italic mb-6 flex-grow">"{quote}"</p>
            <div>
                <p className="font-bold text-lg text-dark-gray">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
            </div>
        </div>
    );
};


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-dark-gray">What Our Travelers Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Real stories from travelers who saved big and traveled happy with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;