
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-taupe/30 pb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left py-2 group"
          >
            <span className="font-serif text-lg text-charcoal group-hover:text-taupe transition-colors duration-300">
              {item.question}
            </span>
            {activeIndex === index ? (
              <ChevronUp className="text-taupe w-5 h-5" />
            ) : (
              <ChevronDown className="text-taupe w-5 h-5" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
