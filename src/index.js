import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pagina1 from './pages/Page1/App.jsx';
import Pagina2 from './pages/Page2/App.jsx';
import Pagina3 from './pages/Page3/App.jsx';
import Pagina4 from './pages/Page4/App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pagina4 />
  </React.StrictMode>
);

