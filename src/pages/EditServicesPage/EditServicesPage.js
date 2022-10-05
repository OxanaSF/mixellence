import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


import { notify } from '../../utils/alertMessage';

import { enableEditActions } from '../../store/enable-edit-slice';
import { db } from '../../firebase';
import {
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';


import { Loader, Button } from 'semantic-ui-react';

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



  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    try {
      console.log('servicesData', servicesData);
      await updateDoc(doc(db, 'services', id), {
        ...servicesData,
        timestamp: serverTimestamp(),
      });
      notify('🍷 You SUCCESSFULLY Updated the Service page!');
    } catch (error) {
      alert.log(error);
    }

    dispatch(enableEditActions.disable());
    navigate('/services-dashboard');
  };

  return (
    <div className={classes.service_container}>
      {isSubmitted ? (
         <div className={classes.loading_box}> <Loader active size="huge" /></div>
      ) : (
        <>
          <h3>Update service</h3>

          <form onSubmit={handleSubmit}>
            <div className={classes.service__item__container}>
              <header className={classes.service__item__header}>
                <h3>
                  <textarea
                    className={classes.service_header_title}
                    error={
                      errors.tile && !id ? { content: errors.title } : null
                    }
                    placeholder={id && title ? title : 'Enter Title'}
                    name="title"
                    onChange={handleChange}
                    defaultValue={title || ''}
            
                  ></textarea>
                </h3>
                <p>
                  <textarea
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
                   
                  ></textarea>
                </p>
              </header>

              <div className={classes.service__item__body}>
                <p className={classes.par1}>
                  <textarea
                    error={errors.par1 && !id ? { content: errors.par1 } : null}
                    placeholder="first paragraph"
                    name="par1"
                    onChange={handleChange}
                    defaultValue={par1 || ''}
                 
                  ></textarea>
                </p>
                <p>
                  <textarea
                    error={errors.par2 && !id ? { content: errors.par2 } : null}
                    placeholder="Second paragraph"
                    name="par2"
                    onChange={handleChange}
                    defaultValue={par2 || ''}
             
                  ></textarea>
                </p>
              </div>
            </div>

            <Button
              secondary
              type="submit"
              disabled={progress !== null && progress < 101}
            >
              Submit
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditServicesPage;
