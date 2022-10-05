import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


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

import { notify } from '../../utils/alertMessage';

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

    try {
      console.log('drinksData', drinksData);
      await updateDoc(doc(db, 'drinks', id), {
        ...drinksData,
        timestamp: serverTimestamp(),
      });
      notify('🍷 You SUCCESSFULLY Updated the DRINK!');
    } catch (error) {
      alert.log(error);
    }

    setIsSubmitted(false);
    dispatch(enableEditActions.disable());
    // notify()
    navigate('/drinks-dashboard');
  };

  return (
    <div className={classes.drinks_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{'Update Drink'}</h3>

          <form onSubmit={handleSubmit}>
            <div className={classes.drink_card} >
              <div className={classes.drink_card_title}>
                <input
                  error={errors.title && !id ? { content: errors.title } : null}
                  placeholder={id && title ? title : 'Enter drink name'}
                  name="title"
                  onChange={handleChange}
                  defaultValue={title || ''}
              
                ></input>
              </div>
              <div className={classes.card_img}>
                <img src={img} alt={title} />
              </div>
              <input
                className={classes.upload}
                accept="image/gif, image/jpeg, image/png"
                filename={img}
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>

              <div className={classes.drink_card_description}>
                <textarea
                  error={
                    errors.description && !id ? { content: errors.description} : null
                  }
                  name="description"
                  onChange={handleChange}
                  value={description || ''}
                
                >
                  {description}
                </textarea>
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

export default EditDrinks;
