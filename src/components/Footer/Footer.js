import React from 'react';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_content__line}>
          <MiddleLink className={classes.services} to="/#services">Services</MiddleLink>
          <MiddleLink className={classes.testimonials} to="/#testimonials">Testimonials</MiddleLink>
        </div>

        <div className={classes.footer_content__line}>
          <MiddleLink className={classes.signatureDrinks} to="/#gallery">Signature Drinks</MiddleLink>
          <button className={classes.bookConsultation}>
            Book a Consultation
          </button>
        </div>
      </div>

      <div className={classes.copyright}>
        <Link to="admin-dashboard">
          &copy; MIXELLENCE {new Date().getFullYear()}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
