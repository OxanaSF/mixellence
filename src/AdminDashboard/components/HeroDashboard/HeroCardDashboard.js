import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from '../../../firebase';

import { addDataModalActions } from '../../../store/add-data-modal-slice';

import { toast } from 'react-toastify';

import EditHeroBtn from './EditHeroBtn';

import 'react-toastify/dist/ReactToastify.css';

const HeroCardDashboard = ({ id, img }) => {
  const alertMessage = useSelector((state) => state.alertMessage.alertMessage);

  const dispatch = useDispatch();

  const ref = useRef();

  const updateDataHandler = () => {
    console.log('onClick');
    dispatch(addDataModalActions.open());
  };

  return (
    <>
      <EditHeroBtn navigate={`/hero-dashboard/${id}/modal`} img={img} />
    </>
  );
};

export default HeroCardDashboard;
