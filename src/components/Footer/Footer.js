import React from 'react';
import { useContext } from 'react';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth-context'
import ModalContext from '../../context/modal-context';
import classes from './Footer.module.css';

const Footer = () => {
  const authCtx = useContext(AuthContext);
  const modalCtx = useContext(ModalContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_content__line}>
          <MiddleLink className={classes.services} to="/#services">Services</MiddleLink>
          <MiddleLink className={classes.testimonials} to="/#testimonials">Testimonials</MiddleLink>
        </div>

        <div className={classes.footer_content__line}>
          <MiddleLink className={classes.signatureDrinks} to="/#gallery">Signature Drinks</MiddleLink>
          <button onClick={modalCtx.modalHandler} className={classes.bookConsultation}>
            Book a Consultation
          </button>
        </div>
      </div>

      <div className={classes.copyright}>

        {isLoggedIn && <Link to="admin-dashboard">
          &copy; MIXELLENCE {new Date().getFullYear()}
        </Link>}

        {!isLoggedIn && <Link to="login">
          &copy; MIXELLENCE {new Date().getFullYear()}
        </Link>}
      
      </div>
    </footer>
  );
};

export default Footer;
