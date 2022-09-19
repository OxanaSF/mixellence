import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavSide.module.css';

const NavSide = () => {
  return (
    <section className={classes.nav_container}>
      <header className={classes.nav_header}>
        <div className={classes.img}>
          <img
            src={`${process.env.PUBLIC_URL}/images/clients/client1.png`}
            alt="admin"
          />
        </div>
        <p>Hi, Roel</p>
      </header>

      <nav className={classes.nav_links}>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about-dashboard">About</NavLink>
          </li>
          <li>
            <NavLink to="/services-dashboard">Services</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/team-dashboard">Meet Our Team</NavLink>
          </li>
          <li>
            {' '}
            <NavLink to="/signature-drinks-dashboard">Signature Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials-dashboard">Testimonials</NavLink>
          </li>
        </ul>
      </nav>

      <div className={classes.logout}>
        <div>Log Out</div>
        <div className={classes.exit}>
          <img src={`${process.env.PUBLIC_URL}/images/exit.png`} alt="exit" />
        </div>
      </div>
    </section>
  );
};

export default NavSide;
