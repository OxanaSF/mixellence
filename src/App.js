import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainDisplay from './pages/MainDisplay';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        
        <Routes>
          <Route path="/" element={<MainDisplay />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
