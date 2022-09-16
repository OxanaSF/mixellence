import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import { ModalContextProvider } from './context/modal-context';

import { AuthContextProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
