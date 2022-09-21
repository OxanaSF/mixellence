import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';



import './index.css';
import App from './App';
import { ModalContextProvider } from './context/modal-context';
import { AuthContextProvider } from './context/auth-context';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <AuthContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </AuthContextProvider>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
