import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth-context'



const AdminDashboard = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout()
  }


  return (
    <main>
      <h1>Admin Dashboard</h1>
      <button>
        <Link to="/">Client Website</Link>
      </button>

      <button onClick={logoutHandler}>
          Logout
      </button>
    </main>
  );
};

export default AdminDashboard;
