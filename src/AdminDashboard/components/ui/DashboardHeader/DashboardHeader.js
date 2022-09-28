import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import classes from './DashboardHeader.module.css'

const DashboardHeader = (props) => {
  const [dropNav, setDropNav] = useState(false);

  const dropNavHandler = () => {
    setDropNav(!dropNav);
  }

  return (
    <header onClick={dropNavHandler} className={classes.dashboard_header}>
      {props.children}
      {dropNav && <div className={classes.dropNav}>
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

      </div>}
    </header>
  )
}

export default DashboardHeader