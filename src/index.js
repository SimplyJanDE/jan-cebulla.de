import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App'; // Hier wird die Hauptkomponente App importiert


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
