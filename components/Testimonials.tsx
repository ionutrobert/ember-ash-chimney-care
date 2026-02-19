
import React from 'react';

const reviews = [
  {
    author: "Eleanor Vance",
    location: "Winchester",
    content: "Absolutely spotless. I was worried about soot on my white carpets, but Ember & Ash were incredibly professional. My log burner has never looked better.",
    rating: 5
  },
  {
    author: "Marcus Thorne",
    location: "Guildford",
    content: "The CCTV inspection revealed a crack we didn't know about. They likely saved our home from a chimney fire. Can't thank them enough for the thorough job.",
    rating: 5
  },
  {
    author: "Sarah Jenkins",
    location: "Alresford",
    content: "Punctual, friendly, and very knowledgeable. The booking process was seamless and the AI assistant actually helped me identify my fuel-dampness issue!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Loved by Homeowners</h2>
        <div className="flex justify-center gap-1">
          {[1,2,3,4,5].map(i => (
             <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-orange-500">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div key={idx} className="glass rounded-3xl p-8 border border-white/5 relative flex flex-col justify-between">
            <div className="absolute top-6 right-8 text-6xl font-serif text-white/5 leading-none">“</div>
            <p className="text-gray-300 italic mb-8 relative z-10">{review.content}</p>
            <div>
              <p className="font-bold text-lg">{review.author}</p>
              <p className="text-gray-500 text-sm">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
