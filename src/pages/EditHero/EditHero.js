import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { enableEditActions } from '../../store/enable-edit-slice';
import { storage } from '../../firebase';
import { db } from '../../firebase';
import {
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';

import { notify } from '../../utils/alertMessage';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { Loader, Button } from 'semantic-ui-react';

import classes from './EditHero.module.css';

const initialState = {
  img: '',
};

const EditDrinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const [imagesData, setImagesData] = useState(initialState);
  const { img } = imagesData;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    id && getImageById();
    console.log('id', id);
  }, [id]);

  const getImageById = async () => {
    const docRef = doc(db, 'bgImages', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setImagesData({ ...snapshot.data() });
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
            setImagesData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadImgFile();
  }, [file]);

  const handleChange = (event) => {
    setImagesData({
      ...imagesData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!img) {
      errors.name = 'Drink title is Required';
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    try {
      console.log('drinksData', imagesData);
      await updateDoc(doc(db, 'drinks', id), {
        ...imagesData,
        timestamp: serverTimestamp(),
      });
      setIsSubmitted(false);
      notify('🍷 You SUCCESSFULLY Updated the Hero page!');
    } catch (error) {
      alert.log(error);
    }

   
    dispatch(enableEditActions.disable());
    navigate('/hero-dashboard');
  };

  return (
    <div className={classes.hero_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{'Update image'}</h3>

          <form onSubmit={handleSubmit}>
            <div className={classes.hero_card}>
             
              <div className={classes.card_img}>
                <img src={img} alt='party' />
              </div>
              <div
               className={classes.upload}
              >
              <input
               
                accept="image/gif, image/jpeg, image/png"
                filename={img}
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
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
