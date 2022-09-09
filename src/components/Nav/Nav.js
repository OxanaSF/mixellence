import React from 'react';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

const Nav = () => {


  return (
    <nav className={classes.navbar}>
      <h1>
        <Link to="/" className={classes.logo}>
          Mixellence
        </Link>
      </h1>

      <ul className={classes.nav__links}>
        <li>
          <Link to="#about-us" className={classes.nav__item}>
            About us
          </Link>
        </li>
        <li>
          <a href="#services" className={classes.nav__item}>
            Services
          </a>
        </li>
        <li>
          <button className={classes.contact__us}>
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
