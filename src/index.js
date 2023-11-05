import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Settings from './Settings';
import Sessions from './Sessions';
import Details from './Details';
import SignUp from './SignUp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sessions />
  </React.StrictMode>
);