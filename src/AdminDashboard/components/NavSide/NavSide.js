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
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.nav_link_active : classes.client_page_link )}
        >
          Back to the App
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
