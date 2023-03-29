import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shop from './components/Shop/Shop';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact/Contact';
import HomePage from './components/Home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
    <Shop />
    <Contact />
  </React.StrictMode>
);

reportWebVitals();
