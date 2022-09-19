import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Loader } from 'semantic-ui-react'
import { db, storage } from "../../firebase"
import { useParams, useNavigate } from "react-router-dom"

import classes from './AddEditTestimonials.module.css'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const initialState = {
  name: "",
  email: "",
  info: "",
  contact: "",
}

export default function AddEditTestimonials() {
  const [data, setData] = useState(initialState);
  const { name, email, info, contact } = data;
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
    if (!email) {
      errors.email = "Email is Required"
    }
    if (!info) {
      errors.info = "Info is Required"
    }
    if (!contact) {
      errors.contact = "Contact is Required"
    }

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
                      label="Email"
                      error={errors.email ? { content: errors.email } : null}
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                    <Form.TextArea
                      label="Info"
                      error={errors.info ? { content: errors.info } : null}
                      placeholder="Enter Info"
                      name="info"
                      onChange={handleChange}
                      value={info}
                    />
                    <Form.Input
                      label="Contact"
                      error={errors.contact ? { content: errors.contact } : null}
                      placeholder="Enter Contact"
                      name="contact"
                      onChange={handleChange}
                      value={contact}
                    />
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
