import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateBtnToggleActions } from '../../../store/update-data-btn-toggle-slice';

import { db } from '../../../firebase';

import {
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';

import { notify } from '../../../utils/alertMessage';

import { Loader, Button } from 'semantic-ui-react';

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


  const [aboutData, setAboutData] = useState(initialAboutState);
  const { mainParagraph, phoneParagraph, place, businessOwned } = aboutData;
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    try {
      console.log('aboutData', aboutData);
      await updateDoc(doc(db, 'about', id), {
        ...aboutData,
        timestamp: serverTimestamp(),
      });
      setIsSubmitted(false);
      notify('🍷 You SUCCESSFULLY Updated the About page!');
    } catch (error) {
      alert.log(error);
    }
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
