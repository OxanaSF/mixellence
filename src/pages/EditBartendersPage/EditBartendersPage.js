import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

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

import classes from './AddBartender.module.css';

const initialBartenderState = {
  name: '',
  drink: '',
  city: '',
  quote: '',
  img: '',
};

const EditBartendersPage = () => {
  const dispatch = useDispatch();
  const navigare = useNavigate();

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

  // const deleteBartender = async (id) => {
  //   await deleteDoc(doc(db, 'bartenders', id));
  // };

  // useEffect(() => {
  //   if(id && props.deleteBartender) {
  //     deleteBartender()
  //   }
  //   console.log('id', id);
  //   props.setDeketeBartender(false)
  // }, [id, ]);

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

  // const validate = () => {
  //   let errors = {};
  //   if (!name) {
  //     errors.name = 'Name is Required';
  //   }
  //   if (!drink) {
  //     errors.drink = 'Signature drink is Required';
  //   }
  //   if (!city) {
  //     errors.drink = 'City is Required';
  //   }
  //   if (!quote) {
  //     errors.quote = 'Quote is Required';
  //   }

  //   return errors;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // let errors = validate();
    // if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmitted(true);

    if (!id) {
      try {
        console.log('bartenderData', bartenderData);
        await addDoc(collection(db, 'bartenders'), {
          ...bartenderData,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log('bartenderData', bartenderData);
        await updateDoc(doc(db, 'bartenders', id), {
          ...bartenderData,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(enableEditActions.disable());
    navigare('/team-dashboard');
  };

  return (
    <div className={classes.bartender_container}>
      <Grid
        centered
        verticalAlign="middle"
        columns={3}
        style={{ height: '80vh' }}
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmitted ? (
                <Loader active inline="centered" size="huge" />
              ) : (
                <>
                  <h3>{id ? 'Update ' : 'Add'}</h3>
                  <Form onSubmit={handleSubmit}>
                    <Form.Input
                      label="name"
                      error={errors.name ? { content: errors.name } : null}
                      placeholder={id && name ? name : 'Enter Name'}
                      name="name"
                      onChange={handleChange}
                      value={name || ''}
                      autoFocus
                    ></Form.Input>
                    <Form.Input
                      label="drink"
                      error={errors.drink ? { content: errors.drink } : null}
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
                    <Form.TextArea
                      label="quote"
                      error={errors.quote ? { content: errors.quote } : null}
                      placeholder="quote"
                      name="quote"
                      onChange={handleChange}
                      value={quote || ''}
                      autoFocus
                    ></Form.TextArea>
                    <Form.Input
                      label="upload"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default EditBartendersPage;
