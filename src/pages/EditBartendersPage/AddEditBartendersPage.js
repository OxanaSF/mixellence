import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { addDataModalActions } from '../../store/add-data-modal-slice';
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

import { Loader, Button } from 'semantic-ui-react';

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

  const [bartenderData, setBartenderData] = useState(initialBartenderState);
  const { name, drink, city, quote, img } = bartenderData;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    id && getBartenderById();
    console.log('id', id);
  }, [id]);

  const getBartenderById = async () => {
    const docRef = doc(db, 'bartenders', id);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      setBartenderData({ ...snapshot.data() });
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
          console.log('Progress', progress);

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('downloadURL', downloadURL);

            setBartenderData((prev) => ({ ...prev, img: downloadURL }));
            setProgress(100);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
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
        notify('🍷 You SUCCESSFULLY Added a BARTENDER!');
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
        notify('🍷 You SUCCESSFULLY Updated the BARTENDER!');
        setIsSubmitted(false);
      } catch (error) {
        alert.log(error);
      }
    }
    setIsSubmitted(false);
    dispatch(enableEditActions.disable());
    navigate('/team-dashboard');
  };

  return (
    <div className={classes.bartender_container}>
      {isSubmitted ? (
        <Loader active inline="centered" size="huge" />
      ) : (
        <>
          <h3>{id ? 'Update a bartender' : 'Add a bartender'}</h3>
          <button onClick={notify}>On Click</button>

          <form onSubmit={handleSubmit} className={classes.bartender_form}>
            <div className={classes.drop_zone}>
              {id ? (
                <div className={classes.bartender_card_img}>
                  <img src={img} alt="bartender" />
                </div>
              ) : (
                <div>
                  {' '}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/drink_placeholder.jpg`}
                    alt="drink"
                  />
                </div>
              )}

              <div className={classes.bartender_card_info}>
                <input
                  accept="image/gif, image/jpeg, image/png"
                  filename={img}
                  error={errors.file && !id ? { content: errors.file } : null}
                  // label="upload"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required={!id ? true : false}
                ></input>
              </div>
            </div>

            <input
              error={errors.name && !id ? { content: errors.name } : null}
              placeholder={id && name ? name : 'Enter Name'}
              name="name"
              onChange={handleChange}
              defaultValue={name || ''}
              required={!id ? true : false}
            ></input>
            <input
              error={errors.drink && !id ? { content: errors.drink } : null}
              placeholder={id && drink ? drink : 'Enter Drink'}
              name="drink"
              onChange={handleChange}
              value={drink || ''}
              required={!id ? true : false}
            ></input>
            <input
              error={errors.city && !id ? { content: errors.city } : null}
              placeholder={id && city ? city : 'Enter City'}
              name="city"
              onChange={handleChange}
              value={city || ''}
              required={!id ? true : false}
            ></input>
            <textarea
              error={errors.quote && !id ? { content: errors.quote } : null}
              placeholder={id && quote ? quote : 'Enter Quote'}
              name="quote"
              onChange={handleChange}
              value={quote || ''}
              required={!id ? true : false}
              minLength="18"
            ></textarea>

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

export default AddEditBartendersPage;
