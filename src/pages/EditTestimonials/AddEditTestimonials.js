import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Loader } from 'semantic-ui-react'
import { storage } from "../../firebase"
import { useParams, useNavigate } from "react-router-dom"

import classes from './AddEditTestimonials.module.css'

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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  return (
    <div className={classes.testimonials_container}>
      <Grid centered verticalAlign='middle' columns="3" style={{ height: "80vh" }}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmit ? <Loader active inline="centered" size="huge" />
                : <>
                  <h2>Add User</h2>
                  <Form>
                    <Form.Input
                      label="Name"
                      placeholder="Enter Name"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      autoFocus
                    />
                    <Form.Input
                      label="Email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                    />
                    <Form.TextArea
                      label="Info"
                      placeholder="Enter Info"
                      name="info"
                      onChange={handleChange}
                      value={info}
                    />
                    <Form.Input
                      label="Contact"
                      placeholder="Enter Contact"
                      name="contact"
                      onChange={handleChange}
                      value={contact}
                    />
                    <Form.Input
                      label="Upload"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])} />
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
