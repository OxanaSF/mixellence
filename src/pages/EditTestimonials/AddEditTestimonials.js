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
  img: ''
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
              break
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

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = 'Name is Required';
    }
    if (!rating) {
      errors.rating = 'Rating is Required';
    }
    if (!review) {
      errors.review = 'Review is Required';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = validate();
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
        alert('You SUCCESSFULLY UPDATED the testimonial!');
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
    <div className={classes.bartender_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{id ? 'Update ' : 'Add'}</h3>

          <Form onSubmit={handleSubmit}>
            <Form.TextArea
              error={errors.review && !id ? { content: errors.review } : null}
              placeholder={id && review ? review : 'Enter review'}
              name="review"
              onChange={handleChange}
              defaultValue={review || ''}
              autoFocus
            ></Form.TextArea>

            <Form.TextArea
              error={errors.rating && !id ? { content: errors.rating } : null}
              placeholder="rating"
              name="rating"
              onChange={handleChange}
              defaultValue={rating || ''}
              autoFocus
            ></Form.TextArea>

            <Form.TextArea
              error={errors.name && !id ? { content: errors.name } : null}
              placeholder="name"
              name="name"
              onChange={handleChange}
              defaultValue={name || ''}
              autoFocus
            ></Form.TextArea>

         


            <div className="drop-zone">
              <span className="drop-zone__prompt">
                Drop file here or click to upload
              </span>

              <Form.Input
                className={classes.upload}
                defaultValue={img || ''}
                error={errors.file && !id ? { content: errors.file } : null}
                label="upload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></Form.Input>
            </div>



            <Button
              secondary
              type="submit"
              // disabled={progress !== null && progress < 101}
              disabled={progress !== null && progress < 100}
            >
              Submit
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default AddEditTestimonials;
