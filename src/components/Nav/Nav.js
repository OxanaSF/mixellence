import React, { useState } from 'react';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import classes from './Nav.module.css';

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={classes.navbar}>
      <Link to="/">
        <h1 className={classes.logo}>Mixellence</h1>
        {/* <h1 className={classes.neonText}>Mixellence</h1> */}
      </Link>

      <nav>
        <ul
          className={
            nav ? [classes.menu, classes.active].join(' ') : [classes.menu]
          }
        >
          <li>
            <MiddleLink to="/#about">About us</MiddleLink>
          </li>
          <li>
            <MiddleLink to="/#services">Services</MiddleLink>
          </li>
          <li>
            <button className={classes.contact__us}>Contact Us</button>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={classes.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={35} />}
      </div>
    </header>
  );
};

export default Nav;
