import { Route, Routes, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import MainDisplay from './pages/MainDisplay';

import { AddUpdateDataModal } from './AdminDashboard/components/ui/AddUpdateModal/AddUpdateDataModal';

import LogInForm from './ClientDisplay/components/Auth/LogInForm';
import PasswordChangeForm from './ClientDisplay/components/Auth/PasswordChangeForm';

import HeroDashboard from './AdminDashboard/components/HeroDashboard/HeroDashboard';
import AboutDashboard from './AdminDashboard/components/AboutDashboard/AboutDashboard';
import ServicesDashboard from './AdminDashboard/components/ServicesDashboard/ServicesDashboard';
import BartendersDashboard from './AdminDashboard/components/BartendersDashboard/BartendersDashboard';
import TestimonialsDashboard from './AdminDashboard/components/TestimonialsDashboard/TestimonialsDashboard';
import SignatureDrinksDashboard from './AdminDashboard/components/SignatureDrinksDashboard/SignatureDrinksDashboard';

import AuthContext from './context/auth-context';

import './App.css';

const App = () => {
  const authCtx = useContext(AuthContext);

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<MainDisplay />} />

        {!authCtx.isLoggedIn && <Route path="/login" element={<LogInForm />} />}

        {authCtx.isLoggedIn && (
          <Route path="/change-password" element={<PasswordChangeForm />} />
        )}

        {authCtx.isLoggedIn && (
          <Route path="/admin-dashboard" element={<HeroDashboard />}></Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path="/hero-dashboard" element={<HeroDashboard />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/hero-dashboard/:id" element={<HeroDashboard />}>
            <Route path="modal" element={<AddUpdateDataModal />} />
          </Route>
        )}

        {authCtx.isLoggedIn && (
          <Route path="/about-dashboard" element={<AboutDashboard />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/about-dashboard/:id" element={<AboutDashboard />}>
            <Route path="modal" element={<AddUpdateDataModal />} />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/services-dashboard" element={<ServicesDashboard />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/services-dashboard/:id" element={<ServicesDashboard />}>
            <Route path="modal" element={<AddUpdateDataModal />} />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/team-dashboard" element={<BartendersDashboard />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/team-dashboard/:id" element={<BartendersDashboard />}>
            <Route path="modal" element={<AddUpdateDataModal />} />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/drinks-dashboard"
            element={<SignatureDrinksDashboard />}
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/drinks-dashboard/:id"
            element={<SignatureDrinksDashboard />}
          >
            <Route path="modal" element={<AddUpdateDataModal />} />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/testimonials-dashboard"
            element={<TestimonialsDashboard />}
          />
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/testimonials-dashboard/:id"
            element={<TestimonialsDashboard />}
          >
            <Route path="modal" element={<AddUpdateDataModal />} />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route
            path="/signature-drinks-dashboard"
            element={<SignatureDrinksDashboard />}
          />
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="modal" element={<AddUpdateDataModal />} />
        </Routes>
      )}
    </main>
  );
};

export default App;
