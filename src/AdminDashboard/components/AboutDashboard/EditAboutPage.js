import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateBtnToggleActions } from '../../../store/update-data-btn-toggle-slice';
import { addDataModalActions } from '../../../store/add-data-modal-slice';
import { alertMessageActions } from '../../../store/alert-message-slice';
import { enableEditActions } from '../../../store/enable-edit-slice';
import { storage } from '../../../firebase';
import { db } from '../../../firebase';

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

import classes from './EditAboutPage.module.css';

const initialAboutState = {
  mainParagraph: '',
  phoneParagraph: '',
  place: '',
  businessOwned: '',
};

const EditAboutPage = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);
  let notify = () => toast('');

  const [aboutData, setAboutData] = useState(initialAboutState);
  const { mainParagraph, phoneParagraph, place, businessOwned } = aboutData;
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   const { id } = useParams();

  const getAboutById = async () => {
    const docRef = doc(db, 'about', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setAboutData({ ...snapshot.data() });
      console.log('snapshot', snapshot);
    }
  };

  useEffect(() => {
    id && getAboutById();
    console.log('id', id);
  }, [id]);

  const handleChange = (event) => {
    setAboutData({
      ...aboutData,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!mainParagraph) {
      errors.mainParagraph = 'Main Paragraph is Required';
    }
    if (!phoneParagraph) {
      errors.phoneParagraph = 'Paragraph with phone number is Required';
    }
    if (!place) {
      errors.place = 'Place is Required';
    }
    if (!businessOwned) {
      errors.businessOwned = 'Short info about business is Required';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    try {
      console.log('aboutData', aboutData);
      await updateDoc(doc(db, 'about', id), {
        ...aboutData,
        timestamp: serverTimestamp(),
      });
      setIsSubmitted(false);
      dispatch(
        alertMessageActions.alertMessageUpdate(
          'You SUCCESSFULLY UPDATED About page information!'
        )
      );
      // notify = () => toast(alertMessage);
    } catch (error) {
      alert.log(error);
    }

    // dispatch(enableEditActions.disable());
    // notify()
    dispatch(updateBtnToggleActions.updateBtnToggle());
    navigate('/about-dashboard');
  };

  const closeModalHandler = () => {
    dispatch(updateBtnToggleActions.updateBtnToggle());
  };

  return (
    <div className={classes.about_info_wrapper}>
      <div className={classes.about__info}>
        <button className={classes.modalCancelBtn} onClick={closeModalHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/cancel.png`}
            alt="cancel"
          />
        </button>
        {isSubmitted ? (
          <Loader active inline="centered" size="huge" />
        ) : (
          <>
            <h3>Update</h3>

            <form onSubmit={handleSubmit}>
              <div className={classes.par1}>
                <textarea
                  error={
                    errors.mainParagraph && !id
                      ? { content: errors.mainParagraph }
                      : null
                  }
                  placeholder="main paragraph"
                  name="mainParagraph"
                  onChange={handleChange}
                  value={mainParagraph || ''}
                ></textarea>
              </div>

              <div className={classes.par2}>
                <textarea
                  error={
                    errors.phoneParagraph && !id
                      ? { content: errors.phoneParagraph }
                      : null
                  }
                  placeholder="paragraph with phone number"
                  name="phoneParagraph"
                  onChange={handleChange}
                  value={phoneParagraph || ''}
                ></textarea>
              </div>

              <footer className={classes.about__footer}>
                <textarea
                  error={errors.quote && !id ? { content: errors.quote } : null}
                  placeholder="area, city, state"
                  name="place"
                  onChange={handleChange}
                  value={place || ''}
                ></textarea>

                <textarea
                  error={
                    errors.businessOwned && !id
                      ? { content: errors.businessOwned }
                      : null
                  }
                  placeholder="native business info"
                  name="businessOwned"
                  onChange={handleChange}
                  value={businessOwned || ''}
                ></textarea>
              </footer>

              <Button
                className={classes.submitBtn}
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
    </div>
  );
};

export default EditAboutPage;
