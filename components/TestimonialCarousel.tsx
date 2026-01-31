
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface Props {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { clearInterval(timer); };
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden w-full max-w-xl mx-auto px-6 py-12">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-full flex flex-col items-center text-center px-4">
            <Quote className="text-taupe/40 mb-6 w-12 h-12" />
            <p className="font-serif italic text-xl text-charcoal mb-6 leading-relaxed">
              "{t.text}"
            </p>
            <h4 className="font-sans font-semibold text-charcoal uppercase tracking-widest text-sm">{t.name}</h4>
            <span className="font-sans text-xs text-taupe mt-1">{t.role}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="flex items-center justify-center w-12 h-12"
            aria-label={`Ir para depoimento ${i + 1}`}
          >
            <span className={`h-1 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-taupe' : 'w-2 bg-taupe/30'}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
