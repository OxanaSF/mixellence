import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import MainDisplay from './pages/MainDisplay';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import LogInForm from './components/Auth/LogInForm';
import PasswordChangeForm from './components/Auth/PasswordChangeForm';
import './App.css';
import AuthContext from './context/auth-context';
import AddBartender from './pages/AddBartender/AddBartender'
import UpdateBartender from './pages/UpdateBartender';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<MainDisplay />} />

          {!authCtx.isLoggedIn && (
            <Route path="/login" element={<LogInForm />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          )}

          {authCtx.isLoggedIn && (
            <Route path="/change-password" element={<PasswordChangeForm />} />
          )}



            <Route path="/add-bartender" element={<AddBartender/>} />
            <Route path="/update-bartender/:id" element={<UpdateBartender/>} />
    

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
