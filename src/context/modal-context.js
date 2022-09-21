import React, { useState, useEffect } from "react"

//* Welcome to the Modal Context Store!
//* Here we will be able to call our Modal from our contact buttons

const ModalContext = React.createContext({ //* Initial values for our context
  modalIsOpen: false,
  modalHandler: () => {},
});

export const ModalContextProvider = (props) => { //* We will wrap our components which need access to this context

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return <ModalContext.Provider value={{
    modalIsOpen: modalIsOpen,
    modalHandler: modalHandler,
  }}>{props.children}
  </ModalContext.Provider>
}

export default ModalContext;

// TODO - REPLACE HERO STATE WITH CONTEXT
// STEPS TO REPLACE OUR LOCAL STATE WITH CONTEXT.
// //CURRENTLY MY BRANCH IS USING LOCAL STATE WITHIN THE HERO COMPONENT
// // I WILL NOW REMOVE THE FUNCTIONALITY OF DISPLAYING THE MODAL.
// MODAL STATE REMOVED
// MainDisplay WILL NOW RECEIVE OUR CONTEXT



// CONTEXT
// STEPS TO PROVIDE CONTEXT TO APP
// 1. We wrap our index/app around our context
// 2. We need to access our context where we need it, in this case the App.js