import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import MainDisplay from './pages/MainDisplay';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />

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
