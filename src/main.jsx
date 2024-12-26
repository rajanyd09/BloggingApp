import React from 'react';
//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter> {/* Wrap your App with BrowserRouter */}
      <App />
    </BrowserRouter>
  
);

//new comment
// one more comment
