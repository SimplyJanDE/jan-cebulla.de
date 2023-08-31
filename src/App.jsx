import React, { useState, useEffect } from 'react'; // Importiere React, useState und useEffect
import './App.css';
import supabase from './supabaseConfig';
import LinkList from './components/LinkList';

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('Linktree')
        .select('*');

      if (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
        return;
      }

      setLinks(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="round-image"></div> {/* Verwende className statt class für CSS-Klassen */}
        <h1>Jan Cebulla</h1>
        <LinkList links={links} />
      </header>
    </div>
  );
}

export default App;