import React from 'react';

import TestimonialsSlider from './TestimonialsSlider';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';
import { TESTIMONIALS } from '../../data/testimonials';

function TestimonialsDisplay() {
  return (
    <div className="slider-container">
      <TestimonialsSlider>
        {TESTIMONIALS.map((item) => (
          <TestimonialCard
            key={item.id}
            linkImg={item.linkImg}
            alt={item.name}
            name={item.name}
            text={item.text}
          />
        ))}
      </TestimonialsSlider>
    </div>
  );
}

export default TestimonialsDisplay;
