import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Loader } from 'semantic-ui-react'
import { db, storage } from "../../firebase"
import { useParams, useNavigate } from "react-router-dom"

import classes from './AddEditTestimonials.module.css'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

//  TODO change video tutorial's data
// TODO (cont.)  We need a name, rating, review, and picture in firebase


const initialState = {
  name: "", // The name of the person leaving the review
  rating: "", // the rating out of 5 the person left
  review: "", // The text of our review the user left
  // contact: "", // contact is not needed
}

export default function AddEditTestimonials() {
  const [data, setData] = useState(initialState);
  const { name, rating, review } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is Paused");
            break;
          case "running":
            console.log("Upload is Running");
          default:
            break;
        }
      }, (error) => {
        console.log(error);
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          });
        }
      );
    };

    file && uploadFile();
  }, [file])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is Required"
    }
    if (!rating) {
      errors.rating = "Rating is Required"
    }
    if (!review) {
      errors.review = "Review is Required"
    }
    // if (!contact) {
    //   errors.contact = "Contact is Required"
    // }

    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    await addDoc(collection(db, "testimonials"), {
      ...data,
      timestamp: serverTimestamp()
    })
    navigate("/");
  };


  return (
    <div className={classes.testimonials_container}>
      <Grid centered verticalAlign='middle' columns="3" style={{ height: "80vh" }}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmit ? <Loader active inline="centered" size="huge" />
                : <>
                  <h2>Add User</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Input
                      label="Name"
                      placeholder="Enter Name"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      error={errors.name ? { content: errors.name } : null}
                      autoFocus
                    />
                    <Form.Input
                      label="Rating"
                      error={errors.rating ? { content: errors.rating } : null}
                      placeholder="Enter Rating"
                      name="rating"
                      onChange={handleChange}
                      value={rating}
                    />
                    <Form.TextArea
                      label="Review"
                      error={errors.review ? { content: errors.review } : null}
                      placeholder="Enter Review"
                      name="review"
                      onChange={handleChange}
                      value={review}
                    />
                    {/* <Form.Input
                      label="Contact"
                      error={errors.contact ? { content: errors.contact } : null}
                      placeholder="Enter Contact"
                      name="contact"
                      onChange={handleChange}
                      value={contact}
                    /> */}
                    <Form.Input
                      label="Upload"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])} />
                    <Button
                      primary
                      type="submit"
                      disabled={progress !== null && progress < 100}>
                      Submit
                    </Button>
                  </Form>
                </>
              }
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
