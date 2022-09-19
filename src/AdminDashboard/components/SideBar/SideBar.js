import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <nav>
      <h2> SideBar</h2>
      <Link to="/add-bartender">
        <h1>Add Bartender</h1>
        
      </Link>
    </nav>
  );
};

export default SideBar;
