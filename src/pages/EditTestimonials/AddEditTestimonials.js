import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addDataModalActions } from '../../store/add-data-modal-slice';
import { alertMessageActions } from '../../store/alert-message-slice';
import { enableEditActions } from '../../store/enable-edit-slice';
import { storage } from '../../firebase';
import { db } from '../../firebase';
import {
  getDoc,
  doc,
  addDoc,
  updateDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { Form, Loader, Button } from 'semantic-ui-react';

import classes from './AddEditTestimonials.module.css';

const initialState = {
  name: '', // The name of the person leaving the review
  rating: '', // the rating out of 5 the person left
  review: '', // The text of our review the user left
  img: '',
};



const AddEditTestimonials = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);
  let notify = () => toast('');

  const [testimonialData, setTestimonialData] = useState(initialState);
  const { name, rating, review, img } = testimonialData;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const num = +rating;

  const { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    id && getTestimonialById();
    console.log('id', id);
  }, [id]);

  const getTestimonialById = async () => {
    const docRef = doc(db, 'testimonials', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setTestimonialData({ ...snapshot.data() });
      console.log('snapshot', snapshot);
    }
  };

  useEffect(() => {
    const uploadImgFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is Paused');
              break;
            case 'running':
              console.log('Upload is Running', progress);
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setTestimonialData((prev) => ({ ...prev, img: downloadURL }));
            alert('Image was uploaded!');
          });
        }
      );
    };

    file && uploadImgFile();
  }, [file]);

  const handleChange = (event) => {
    setTestimonialData({
      ...testimonialData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    if (!id) {
      try {
        console.log('testimonialData', testimonialData);
        await addDoc(collection(db, 'testimonials'), {
          ...testimonialData,
          timestamp: serverTimestamp(),
        });
        dispatch(addDataModalActions.close());
        // dispatch(
        //   alertMessageActions.alertMessageUpdate(
        //     'You SUCCESSFULLY ADDED the testimonial!'
        //   )
        // );
        // notify = () => toast(alertMessage);
        alert('You SUCCESSFULLY ADDED the testimonial!');
      } catch (error) {
        alert.log(error);
      }
    } else {
      try {
        console.log('testimonialData', testimonialData);
        await updateDoc(doc(db, 'testimonials', id), {
          ...testimonialData,
          timestamp: serverTimestamp(),
        });
        // dispatch(
        //   alertMessageActions.alertMessageUpdate(
        //     'You SUCCESSFULLY UPDATED the bartender!'
        //   )
        // );
        // notify = () => toast(alertMessage);
        // alert('You SUCCESSFULLY UPDATED the testimonial!');
      } catch (error) {
        alert.log(error);
      }
    }
    setIsSubmitted(false);
    dispatch(enableEditActions.disable());
    // notify()
    navigate('/testimonials-dashboard');
  };

  return (
    <div className={classes.testimonial_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{id ? 'Update Testimonial' : 'Add Testimonial'}</h3>

          <form onSubmit={handleSubmit} className={classes.testimonial_form}>
            <div className={classes.testimonial_card}>
              <div className={classes.card_info}>
                <p className={classes.text}>
                  <textarea
                    error={
                      errors.review && !id ? { content: errors.review } : null
                    }
                    placeholder={id && review ? review : 'Enter Review'}
                    name="review"
                    onChange={handleChange}
                    value={review || ''}
                    required={!id ? true : false}
                  ></textarea>
                </p>

                {id ? (
                  <div className={classes.stars}>
                    {[...Array(num)].map((el, index) => (
                      <img
                        key={index}
                        src={`${process.env.PUBLIC_URL}/images/pointed-star.png`}
                        alt="star"
                      />
                    ))}
                  </div>
                ) : (
                  <div className={classes.stars}>
                    {[...Array(5)].map((el, index) => (
                      <img
                        key={index}
                        src={`${process.env.PUBLIC_URL}/images/pointed-star.png`}
                        alt="star"
                      />
                    ))}
                  </div>
                )}
                <div className={classes.rating}>
                  <input
                    error={
                      errors.rating && !id ? { content: errors.rating } : null
                    }
                    type='number'
                    min="1"
                    max="5"
                    placeholder="rating"
                    name="rating"
                    onChange={handleChange}
                    defaultValue={rating || ''}
                    required={!id ? true : false}
                  ></input>
                </div>

                <p className={classes.card_name}>
                  <input
                    error={errors.name && !id ? { content: errors.name } : null}
                    placeholder={id && name ? name : 'Enter Name'}
                    name="name"
                    onChange={handleChange}
                    defaultValue={name || ''}
                    required={!id ? true : false}
                  ></input>
                </p>
              </div>

              <div>
                <div className={classes.drop_zone}>
                  {id ? (
                    <div className={classes.card_img}>
                      <img src={img} alt="user" />
                    </div>
                  ) : (
                    <div className={classes.card_img}>
                      {' '}
                      <img
                        src={`${process.env.PUBLIC_URL}/images/drink_placeholder.jpg`}
                        alt="drink"
                      />
                    </div>
                  )}
                </div>
                <div className={classes.upload}>
                  <input
                    accept="image/gif, image/jpeg, image/png"
                    fileName={img}
                    error={errors.file && !id ? { content: errors.file } : null}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    required={!id ? true : false}
                  ></input>
                </div>
              </div>
            </div>

            <Button
              secondary
              type="submit"
              // disabled={progress !== null && progress < 101}
              disabled={progress !== null && progress < 100}
            >
              Submit
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddEditTestimonials;
