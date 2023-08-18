import React from 'react';
import './App.css';
import LinkList from './components/LinkList';
import links from './components/linksData'; // Importiere die links-Konstante

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="round-image"></div>
        <h1>Jan Cebulla</h1>
        <LinkList links={links} />
      </header>
    </div>
  );
}

export default App;
