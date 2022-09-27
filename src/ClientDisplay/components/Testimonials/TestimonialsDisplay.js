import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

import TestimonialsSlider from './TestimonialsSlider';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';


function TestimonialsDisplay() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "testimonials"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      });
      setTestimonials(list);
      setLoading(false);
    },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    }
  }, []);
  
  return (
    <div className="slider-container">
      <TestimonialsSlider>
        {testimonials && testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            linkImg={item.img}
            alt={`${item.name} review`}
            name={item.name}
            text={item.review}
          />
        ))}
      </TestimonialsSlider>
    </div>
  );
}

export default TestimonialsDisplay;
