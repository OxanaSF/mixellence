import React, { useState, useEffect } from 'react';
import { useParam, useNavigate } from 'react-router-dom';
import { storage } from '../../firebase';



import classes from './AddBartender.module.css';



const initialBartenderState = {
  name: '',
  drink: '',
  city: '',
  quote: '',
  linkImg: '',
};

const AddBartender = () => {
  // const [bartenderData, setBartenderData] = useState(initialBartenderState);
  // const [imgFile, setImgFile] = useState(null);
  // const [progress, setProgress] = useState(null);
  // const [error, setError] = useState(null);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  return (
  <div className={classes.bartender_container}>
    <button>Bartenders</button>
  </div>
  )
};

export default AddBartender;
