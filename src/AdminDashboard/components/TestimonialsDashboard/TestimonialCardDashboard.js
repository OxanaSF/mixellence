import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { enableDeleteActions } from '../../../store/enable-delete-slice';
import { alertMessageActions } from '../../../store/alert-message-slice';
import { ToastContainer, toast } from 'react-toastify';
import EditTestimonial from '../ui/AddEditDelete/EditTestimonial';
import DeleteData from '../ui/AddEditDelete/DeleteData';

import 'react-toastify/dist/ReactToastify.css';
import classes from './TestimonialCardDashboard.module.css';

const TestimonialCardDashboard = ({ 
  id, 
  linkImg, 
  name, text, 
  rating 
}) => {

  const num = +rating;

  const [visible, setVisible] = useState(false);

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const notify = () => toast(alertMessage);

  const ref = useRef();

  let style = { visibility: 'visible' };
  if (!visible) style.visibility = 'hidden';

  const updateDataHandler = () => {
    console.log('onClick');
    dispatch(addDataModalActions.open());
  };

  const handleStyleClick = () => {
    console.log('handleStyleClick');
    setVisible(!visible);
  };

  const handleBlur = () => {
    console.log('onBlur');
    setVisible(false);
  };

  // * Start Delete

  const deleteTestimonial = async (id) => {
    await deleteDoc(doc(db, 'testimonials', id));
  };

  const testimonialDeleteHandler = () => {
    deleteTestimonial(id);
    dispatch(enableDeleteActions.disable());
    dispatch(
      alertMessageActions.alertMessageUpdate(
        'You SUCCESSFULLY deleted the testimonial!'
      )
    );
    notify();
  };
  // * End Delete

  return (
    <button
      className={classes.testimonial_card_container}
      id={id}
      onClick={handleStyleClick}
      onBlur={handleBlur}
    >
      <header style={style} className={classes.testimonial_card_header}>
        <DeleteData 
        onClick={testimonialDeleteHandler} 
        />

        <EditTestimonial navigate={`/testimonials-dashboard/${id}/modal`} />
      </header>

      <div className={classes.testimonial_card} onInvalid={id}>
        <div className={classes.card_info}>
          <p className={classes.text}> {text}</p>

          <div>
            <div className={classes.stars}>
              {[...Array(num)].map((el, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/images/pointed-star.png`}
                  alt="star"
                />
              ))}
            </div>
            <p className={classes.card_name}>{name}</p>
          </div>
        </div>

        <div className={classes.card_img}>
          <img src={linkImg} alt={name} />
        </div>
      </div>
    </button>
  );
};

export default TestimonialCardDashboard;
