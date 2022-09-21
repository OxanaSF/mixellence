import React from 'react';
import { useContext } from 'react';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../../context/auth-context'
import ModalContext from '../../../context/modal-context';
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

        {isLoggedIn && <NavLink to="about-dashboard"
          className={({ isActive }) =>
          isActive ? classes.nav_link_active : classes.nav_link
        }
        >
          &copy; MIXELLENCE {new Date().getFullYear()}
        </NavLink>}

        {!isLoggedIn && <NavLink to="login">
          &copy; MIXELLENCE {new Date().getFullYear()}
        </NavLink>}
      
      </div>
    </footer>
  );
};

export default Footer;
