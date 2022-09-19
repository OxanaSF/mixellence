import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
// import 'semantic-ui-css/semantic.min.css'


import MainDisplay from './pages/MainDisplay';
import AdminDashboardTest from './pages/AdminDashboardTest/AdminDashboardTest';

// import AdminDashboardDisplay from './pages/AdminDashboardDisplay/AdminDashboardDisplay';
import LogInForm from './ClientDisplay/components/Auth/LogInForm'
import PasswordChangeForm from './ClientDisplay/components/Auth/PasswordChangeForm';

import AboutDashboard from './AdminDashboard/components/AboutDashboard/AboutDashboard';
import ServicesDashboard from './AdminDashboard/components/ServicesDashboard/ServicesDashboard';
import TeamDashboard from './AdminDashboard/components/TeamDashboard/TeamDashboard';
import TestimonialsDashboard from './AdminDashboard/components/TestimonialsDashboard/TestimonialsDashboard';
import SignatureDrinksDashboard from './AdminDashboard/components/SignatureDrinksDashboard/SignatureDrinksDashboard';

import './App.css';
import AuthContext from './context/auth-context';
import EditBartendersPage from './pages/EditBartendersPage/EditBartendersPage';
import AddEditTestimonials from './pages/EditTestimonials/AddEditTestimonials';

const App = () => {
  // const [dashBoard, setDashBoard] = useState(true)
  const authCtx = useContext(AuthContext);

  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<MainDisplay />} />

          {!authCtx.isLoggedIn && (
            <Route path="/login" element={<LogInForm />} />
          )}
          {/* {authCtx.isLoggedIn && ( */}
          <Route
            path="/admin-dashboard-test"
            element={<AdminDashboardTest />}
          />
          {/* )} */}

          {authCtx.isLoggedIn && (
            <Route path="/change-password" element={<PasswordChangeForm />} />
          )}

          <Route
            path="/admin-dashboard"
            element={<AboutDashboard />}
          ></Route>
          <Route
            path="/admin-dashboard-test"
            element={<AdminDashboardTest />}
          ></Route>

          <Route path="/add-bartender" element={<EditBartendersPage />} />
          <Route
            path="/update-bartender/:id"
            element={<EditBartendersPage />}
          />



          <Route path="/about-dashboard" element={<AboutDashboard />} />
          <Route path="/services-dashboard" element={<ServicesDashboard />} />
          <Route
            path="/team-dashboard"
            element={<TeamDashboard />}
          />
          <Route
            path="/signature-drinks-dashboard"
            element={<SignatureDrinksDashboard />}
          />

          <Route path="/add-testimonial" element={<AddEditTestimonials />} /> {/* Beginning of Add-Edit Testimonials. Testimonials Dashboard was commented out in order to test.  */}

          {/* <Route
            path="/testimonials-dashboard"
            element={<TestimonialsDashboard />}
          /> */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
