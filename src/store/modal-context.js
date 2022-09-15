import React, { useState, useEffect } from "react"

//* Welcome to the Modal Context Store!
//* Here we will be able to call our Modal from our contact buttons

const ModalContext = React.createContext({ //* Initial values for our context
  modalIsOpen: false,
});

export const ModalContextProvider = (props) => { //* We will wrap our components which need access to this context

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true);
  }

  return <ModalContext.Provider value={{
    modalIsOpen,
    setModalIsOpen,
  }}>{props.children}
  </ModalContext.Provider>
}

export default ModalContext;