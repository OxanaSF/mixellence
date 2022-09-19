import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth-context';

import SideBar from '../../AdminDashboard/components/SideBar/SideBar';
import classes from './AdminDashboardTest.module.css'

const AdminDashboardTest = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    console.log('LOGOUT!')
  };

  return (
    <main className={classes.admin_dashboard_container}>
      <h1>Admin Dashboard</h1>
      <button>
        <Link to="/">Client Website</Link>
      </button>

      <button onClick={logoutHandler}>Logout</button>

      <button>
        <Link to="/change-password">Profile</Link>
      </button>

      <SideBar />
    </main>
  );
};

export default AdminDashboardTest;
