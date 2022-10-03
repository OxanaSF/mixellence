import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import classes from './DashboardHeader.module.css';

const DashboardHeader = (props) => {
  const [dropNav, setDropNav] = useState(false);

  const dropNavHandler = () => {
    setDropNav(!dropNav);
  };

  return (
    <header onClick={dropNavHandler} className={classes.dashboard_header}>
      {props.children}
      {dropNav && (
        <div className={classes.dropNavContainer}>
          <nav className={classes.dropNav}>
            <NavLink
              to="/hero-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              Landing Page
            </NavLink>

            <NavLink
              to="/about-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/team-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              Meet Our Team
            </NavLink>

            <NavLink
              to="/signature-drinks-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              Signature Drinks
            </NavLink>

            <NavLink
              to="/testimonials-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              Testimonials
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;