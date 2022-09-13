import React from 'react';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <ul className={classes.content}>
          <li>
            <MiddleLink to="/#services">Services</MiddleLink>
          </li>
          <li>
            <MiddleLink to="/#gallery">Gallery</MiddleLink>
          </li>
          <li>
            <MiddleLink to="/#testimonials">Testimonials</MiddleLink>
          </li>
        </ul>
        <button className={classes.bookConsultation}>
          Book a Consultation
        </button>
      </div>
      <div className={classes.copyright}>
        <Link to="admin-dashboard">&copy; MIXELLENCE {new Date().getFullYear()}</Link>
      </div>
    </footer>
  );
};

export default Footer;
