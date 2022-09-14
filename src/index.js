import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pagina1 from './pages/Page1/App.js';
import Pagina2 from './pages/Page2/App.js';
import Pagina3 from './pages/Page3/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pagina3 />
  </React.StrictMode>
);

