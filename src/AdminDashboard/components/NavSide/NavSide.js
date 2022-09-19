import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import AuthContext from '../../../context/auth-context';
import classes from './NavSide.module.css';

const NavSide = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  return (
    <section className={classes.nav_container}>
      <header className={classes.nav_header}>
        <button>
          <NavLink to="/change-password">
            <div className={classes.img}>
              <img
                src={`${process.env.PUBLIC_URL}/images/clients/client1.png`}
                alt="admin"
              />
            </div>
          </NavLink>
        </button>

        <p>Hi, Roel</p>
      </header>

      <nav className={classes.nav_links}>
        <ul>
          <li>
            <NavLink to="/">Client Page</NavLink>
          </li>
          <li>
            <NavLink
              to="/about-dashboard"
              className={({ isActive }) =>
                isActive ? classes.nav_link_active : classes.nav_link
              }
            >
              About
            </NavLink>
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

      <div onClick={logoutHandler} className={classes.logout}>
        <div>Log Out</div>
        <div className={classes.exit}>
          <img src={`${process.env.PUBLIC_URL}/images/exit.png`} alt="exit" />
        </div>
      </div>
    </section>
  );
};

export default NavSide;
