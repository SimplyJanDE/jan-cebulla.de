import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'; // Hier wird die Hauptkomponente App importiert


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Wenn du Web-Vitals melden möchtest, kannst du die folgende Zeile aktivieren
// reportWebVitals();
