import React from 'react';
import ReactDOM from 'react-dom/client';
import CountryData from './api-resource/country-data';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CountryData/>
  </React.StrictMode>
);

