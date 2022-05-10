import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.css'
import './css/plugin/font-awesome/fontawesome.css'
import './css/plugin/slick/slick.css'
import './fonts/stylesheet.css'
import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <AuthProvider>
          <App />
      </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
