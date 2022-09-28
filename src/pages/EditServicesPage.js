import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addDataModalActions } from '../store/add-data-modal-slice';
import { alertMessageActions } from '../store/alert-message-slice';
import { enableEditActions } from '../store/enable-edit-slice';
import { storage } from '../firebase';
import { db } from '../firebase';
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

import classes from './EditServicesPage.module.css';

const initialServicesState = {
  title: '',
  description: '',
  par1: '',
  par2: '',
};

const EditServicesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);
  // let notify = () => toast('');

  const [servicesData, setServicesData] = useState(initialServicesState);
  const { title, description, par1, par2 } = servicesData;

  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    id && getServiceById();
    console.log('id', id);
  }, [id]);

  const getServiceById = async () => {
    const docRef = doc(db, 'services', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setServicesData({ ...snapshot.data() });
      console.log('snapshot', snapshot);
    }
  };

 

  const handleChange = (event) => {
    setServicesData({
      ...servicesData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!title) {
      errors.name = "Service's title is Required";
    }
    if (!description) {
      errors.drink = 'Short description description is Required';
    }
    if (!par1) {
      errors.city = 'First paragraph is Required';
    }
    if (!par2) {
      errors.quote = 'Second paragraph is Required';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    try {
      console.log('servicesData', servicesData);
      await updateDoc(doc(db, 'services', id), {
        ...servicesData,
        timestamp: serverTimestamp(),
      });
      dispatch(
        alertMessageActions.alertMessageUpdate(
          'You SUCCESSFULLY UPDATED the service!'
        )
      );
      // notify = () => toast(alertMessage);
    } catch (error) {
      alert.log(error);
    }

    dispatch(enableEditActions.disable());
    // notify()
    navigate('/services-dashboard');
  };

  return (
    <div className={classes.service_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>Update service</h3>

          <Form onSubmit={handleSubmit}>
            <div className={`${classes.service_header_wrapper}`}>
              <div className={`${classes.service_header}`}>
                <Form.TextArea
                className={classes.service_header_title}
                  error={errors.tile && !id ? { content: errors.title } : null}
                  placeholder={id && title ? title : 'Enter Title'}
                  name="title"
                  onChange={handleChange}
                  defaultValue={title || ''}
                  autoFocus
                ></Form.TextArea>
                <Form.TextArea
                className={classes.service_header_description}
                  error={
                    errors.description && !id
                      ? { content: errors.description }
                      : null
                  }
                  placeholder="description"
                  name="description"
                  onChange={handleChange}
                  defaultValue={description || ''}
                  autoFocus
                ></Form.TextArea>
              </div>
            </div>

            <div className={`${classes.service_body_wrapper}`}>
              <div className={`${classes.service_body}`}>
                <Form.TextArea
                className={classes.par1}
                  error={errors.par1 && !id ? { content: errors.par1 } : null}
                  placeholder="first paragraph"
                  name="par1"
                  onChange={handleChange}
                  defaultValue={par1 || ''}
                  autoFocus
                ></Form.TextArea>
                <Form.TextArea
                  className={classes.quote}
                  error={errors.par2 && !id ? { content: errors.par2 } : null}
                  placeholder="Second paragraph"
                  name="par2"
                  onChange={handleChange}
                  defaultValue={par2 || ''}
                  autoFocus
                ></Form.TextArea>
              </div>
            </div>
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

export default EditServicesPage;
