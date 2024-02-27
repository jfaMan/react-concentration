import App from './App';
import './assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root') as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
