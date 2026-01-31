
// Add missing React import to ensure the React namespace is available for type definitions
import React from 'react';

export interface ServiceCardProps {
  title: string;
  icon?: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}
