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

import { Form, Grid, Loader, Button } from 'semantic-ui-react';

import classes from './AddEditBartender.module.css';

const initialBartenderState = {
  name: '',
  drink: '',
  city: '',
  quote: '',
  img: '',
};

const AddEditBartendersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);
  let notify = () => toast('');

  const [bartenderData, setBartenderData] = useState(initialBartenderState);
  const { name, drink, city, quote } = bartenderData;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { id } = useParams();

  console.log('id', id);

  const getBartenderById = async () => {
    const docRef = doc(db, 'bartenders', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setBartenderData({ ...snapshot.data });
      console.log('snapshot', snapshot);
    }
  };

  useEffect(() => {
    id && getBartenderById();
    console.log('id', id);
  }, [id]);

  useEffect(() => {
    const uploadImgFile = () => {
      // const name = new Date().getTime() + file.name;
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
          console.log('Progress', progress);

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('downloadURL', downloadURL);

            setBartenderData((prev) => ({ ...prev, img: downloadURL }));
            setProgress(101);
          });
        }
      );
    };
    file && uploadImgFile();
  }, [file]);

  const handleChange = (event) => {
    setBartenderData({
      ...bartenderData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!file) {
      errors.file = 'Image is Required';
    }
    if (!name) {
      errors.name = 'Name is Required';
    }
    if (!drink) {
      errors.drink = 'Signature drink is Required';
    }
    if (!city) {
      errors.city = 'City is Required';
    }
    if (!quote) {
      errors.quote = 'Quote is Required';
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
        console.log('bartenderData', bartenderData);
        await addDoc(collection(db, 'bartenders'), {
          ...bartenderData,
          timestamp: serverTimestamp(),
        });
        dispatch(addDataModalActions.close());
        dispatch(
          alertMessageActions.alertMessageUpdate(
            'You SUCCESSFULLY ADDED the bartender!'
          )
        );
        // notify = () => toast(alertMessage);
      } catch (error) {
        alert.log(error);
      }
    } else {
      try {
        console.log('bartenderData', bartenderData);
        await updateDoc(doc(db, 'bartenders', id), {
          ...bartenderData,
          timestamp: serverTimestamp(),
        });
        dispatch(
          alertMessageActions.alertMessageUpdate(
            'You SUCCESSFULLY UPDATED the bartender!'
          )
        );
        // notify = () => toast(alertMessage);
      } catch (error) {
        alert.log(error);
      }
    }
    dispatch(enableEditActions.disable());
    // notify()
    navigate('/team-dashboard');
  };

  // useEffect (() => {
  //   notify();
  // }, [])

  return (
    <div className={classes.bartender_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{id ? 'Update ' : 'Add'}</h3>

          <Form onSubmit={handleSubmit}>
            <div className="drop-zone">
              <span className="drop-zone__prompt">
                Drop file here or click to upload
              </span>
              <Form.Input
                className={classes.upload}
                error={errors.file && !id ? { content: errors.file } : null}
                label="upload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              ></Form.Input>
            </div>

            <Form.Input
              label="name"
              error={errors.name && !id ? { content: errors.name } : null}
              placeholder={id && name ? name : 'Enter Name'}
              name="name"
              onChange={handleChange}
              value={name || ''}
              autoFocus
            ></Form.Input>
            <Form.Input
              label="drink"
              error={errors.drink && !id ? { content: errors.drink } : null}
              placeholder="drink"
              name="drink"
              onChange={handleChange}
              value={drink || ''}
              autoFocus
            ></Form.Input>
            <Form.Input
              label="city"
              error={errors.city ? { content: errors.city } : null}
              placeholder="city"
              name="city"
              onChange={handleChange}
              value={city || ''}
              autoFocus
            ></Form.Input>
            <Form.Input
              className={classes.quote}
              label="quote"
              error={errors.quote && !id ? { content: errors.quote } : null}
              placeholder="quote"
              name="quote"
              onChange={handleChange}
              value={quote || ''}
              autoFocus
            ></Form.Input>

            <Button
              secondary
              type="submit"
              disabled={progress !== null && progress < 101}
            >
              Submit
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default AddEditBartendersPage;
