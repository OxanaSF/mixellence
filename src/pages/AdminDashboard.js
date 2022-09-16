import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <button>
        <Link to="/">Client Website</Link>
      </button>
    </main>
  );
};

export default AdminDashboard;
