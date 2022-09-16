import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainDisplay from './pages/MainDisplay';
import AdminDashboard from './pages/AdminDashboard';
import LogInForm from './components/Auth/LogInForm';
import PasswordChangeForm from './components/Auth/PasswordChangeForm'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<MainDisplay />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/logout" element={<PasswordChangeForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
