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

import classes from './EditDrinks.module.css';

const initialState = {
  title: '',
  img: '',
  description: '',
};

const EditDrinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);
  let notify = () => toast('');

  const [drinksData, setDrinksData] = useState(initialState);
  const { title, description, img } = drinksData;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    id && getDrinkById();
    console.log('id', id);
  }, [id]);

  const getDrinkById = async () => {
    const docRef = doc(db, 'drinks', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setDrinksData({ ...snapshot.data() });
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
            setDrinksData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadImgFile();
  }, [file]);

  const handleChange = (event) => {
    setDrinksData({
      ...drinksData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!title) {
      errors.name = 'Drink title is Required';
    }
    if (!description) {
      errors.rating = 'Drink description is Required';
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
        console.log('drinksData', drinksData);
        await addDoc(collection(db, 'drinks'), {
          ...drinksData,
          timestamp: serverTimestamp(),
        });
        dispatch(addDataModalActions.close());
        // dispatch(
        //   alertMessageActions.alertMessageUpdate(
        //     'You SUCCESSFULLY ADDED the testimonial!'
        //   )
        // );
        // notify = () => toast(alertMessage);
        // alert('You SUCCESSFULLY ADDED the testimonial!');
      } catch (error) {
        alert.log(error);
      }
    } else {
      try {
        console.log('drinksData', drinksData);
        await updateDoc(doc(db, 'drinks', id), {
          ...drinksData,
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
    navigate('/drinks-dashboard');
  };

  return (
    <div className={classes.testimonial_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{'Update Drink'}</h3>

          <Form onSubmit={handleSubmit} className={classes.testimonial_form}>
            <div className={classes.testimonial_form_text}>
              <Form.Input
                error={errors.title && !id ? { content: errors.title } : null}
                placeholder={id && title ? title : 'Enter drink name'}
                name="title"
                onChange={handleChange}
                defaultValue={title || ''}
                autoFocus
              ></Form.Input>

              <div className={classes.drop_zone}>
                {id ? (
                  <div>
                    <img src={img} alt={title} />
                  </div>
                ) : (
                  <div>
                    {' '}
                    <img
                      src={img}
                      alt="drink"
                    />
                  </div>
                )}
              </div>
              <Form.Input
                className={classes.upload}
                accept="image/gif, image/jpeg, image/png"
                fileName={img}
                // error={errors.file && !id ? { content: errors.file } : null}
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></Form.Input>
            </div>

            <Form.TextArea
              className={classes.review}
             
              error={errors.quote && !id ? { content: errors.review } : null}
              placeholder={id && description ? description : 'Enter a drink description'}
              name="description"
              onChange={handleChange}
              value={description || ''}
              autoFocus
            ></Form.TextArea>

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

export default EditDrinks;
