import React, { useState } from 'react';

import AddUpdateModal from './AddUpdateModal';


const Rules = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    console.log('setShowModal(false)!!')
    setShowModal(false);
  };

  return (
    <section>
      {showModal && <AddUpdateModal onClick={hideModalHandler} />}

      <button showModal={showModal} onClick={showModalHandler} />
    </section>
  );
};

export default Rules;