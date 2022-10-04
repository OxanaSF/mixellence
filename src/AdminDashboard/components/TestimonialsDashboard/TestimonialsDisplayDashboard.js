import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { AddUpdateDataModal } from '../ui/AddUpdateModal/AddUpdateDataModal';
import TestimonialCardDashboard from './TestimonialCardDashboard';

import classes from './TestimonialsDisplayDashboard.module.css';
import ReactResponsiveCarousel from './ReactResponsiveCarousel';

function TestimonialsDisplay() {
  const location = useLocation();

  const dispatch = useDispatch();

  const addDataModal = useSelector((state) => state.addDataModal.addDataModal);

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(addDataModalActions.updateReturnLink('/testimonials-dashboard'));
    const unsub = onSnapshot(
      collection(db, 'testimonials'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
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
    };
  }, []);

  return (
    <div className={classes.card_display_wrapper}>
      <h1>Testimonials</h1>

      <Link to="modal" state={{ background: location }}></Link>
      <Outlet />

      <div className={classes.card_display_container}>
        
        {/* TODO  Can we change the amount of cards displayed in the carousel?? */}
        {/* ADD some margin between dots and carousel card  */}

        <ReactResponsiveCarousel className={classes.reactCarousel}>
          {testimonials &&
            testimonials.map((item) => (
              <TestimonialCardDashboard
                id={item.id}
                key={item.id}
                linkImg={item.img}
                alt={`${item.name} review`}
                name={item.name}
                text={item.review}
                rating={item.rating}
              />
            ))}
        </ReactResponsiveCarousel>
      </div>

      {addDataModal && <AddUpdateDataModal />}
    </div >
  );
}

export default TestimonialsDisplay;
