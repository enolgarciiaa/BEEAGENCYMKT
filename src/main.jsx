import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ← Añadido
import App from '/src/App.jsx';
import '/src/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ← Añadido */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);