import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import MainDisplay from './pages/MainDisplay';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<MainDisplay />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>

        <Footer />
    
      </main>
    </BrowserRouter>
  );
}

export default App;
