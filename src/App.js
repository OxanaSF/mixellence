import { Route, Routes, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import MainDisplay from './pages/MainDisplay';

import { AddUpdateDataModal } from './AdminDashboard/components/ui/AddUpdateModal/AddUpdateDataModal';

// import AdminDashboardDisplay from './pages/AdminDashboardDisplay/AdminDashboardDisplay';
import LogInForm from './ClientDisplay/components/Auth/LogInForm';
import PasswordChangeForm from './ClientDisplay/components/Auth/PasswordChangeForm';


import HeroDashboard from './AdminDashboard/components/HeroDashboard/HeroDashboard'
import AboutDashboard from './AdminDashboard/components/AboutDashboard/AboutDashboard';
import ServicesDashboard from './AdminDashboard/components/ServicesDashboard/ServicesDashboard';
import BartendersDashboard from './AdminDashboard/components/BartendersDashboard/BartendersDashboard';
import TestimonialsDashboard from './AdminDashboard/components/TestimonialsDashboard/TestimonialsDashboard';
import SignatureDrinksDashboard from './AdminDashboard/components/SignatureDrinksDashboard/SignatureDrinksDashboard';

import './App.css';
import AuthContext from './context/auth-context';
import AddEditBartendersPage from './pages/EditBartendersPage/AddEditBartendersPage';
import AddEditTestimonials from './pages/EditTestimonials/AddEditTestimonials';

const App = () => {
  const authCtx = useContext(AuthContext);

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<MainDisplay />} />

        {!authCtx.isLoggedIn && <Route path="/login" element={<LogInForm />} />}
        {/* {authCtx.isLoggedIn && ( */}
        {/* <Route
            path="/admin-dashboard-test"
            element={<AdminDashboard />}
          /> */}
        {/* )} */}

        {authCtx.isLoggedIn && (
          <Route path="/change-password" element={<PasswordChangeForm />} />
        )}

        <Route path="/hero-dashboard" element={<HeroDashboard />}></Route>
        <Route path="/admin-dashboard" element={<HeroDashboard />}></Route>

        <Route path="/add-bartender" element={<AddEditBartendersPage />} />
        <Route
          path="/update-bartender/:id"
          element={<AddEditBartendersPage />}
        />

        <Route path="/about-dashboard" element={<AboutDashboard />} />
        <Route path="/about-dashboard/:id" element={<AboutDashboard />}>
          <Route path="modal" element={<AddUpdateDataModal />} />
        </Route>

        <Route path="/services-dashboard" element={<ServicesDashboard />} />
        <Route path="/services-dashboard/:id" element={<ServicesDashboard />}>
          <Route path="modal" element={<AddUpdateDataModal />} />
        </Route>

        <Route path="/team-dashboard" element={<BartendersDashboard />} />
        <Route path="/team-dashboard/:id" element={<BartendersDashboard />}>
          <Route path="modal" element={<AddUpdateDataModal />} />
        </Route>


        <Route
          path="/drinks-dashboard" element={<SignatureDrinksDashboard />} />
          <Route path="/drinks-dashboard/:id" element={<SignatureDrinksDashboard />}>
          <Route path="modal" element={<AddUpdateDataModal />} />
        </Route>

        <Route
          path="/testimonials-dashboard" element={<TestimonialsDashboard />} />
          <Route path="/testimonials-dashboard/:id" element={<TestimonialsDashboard />}>
          <Route path="modal" element={<AddUpdateDataModal />} />
        </Route>

        <Route
          path="/signature-drinks-dashboard"
          element={<SignatureDrinksDashboard />}
        />
       

        {/* Beginning of Add-Edit Testimonials. Testimonials Dashboard was commented out in order to test.  */}
        <Route path="/add-testimonial" element={<AddEditTestimonials />} />

        {/* <Route
            path="/testimonials-dashboard"
            element={<TestimonialsDashboard />}
          /> */}

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
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
