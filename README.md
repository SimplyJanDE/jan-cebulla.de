# Linktree Alternative

Dies ist eine einfache React-Anwendung, die als Alternative zu Linktree verwendet werden kann. Statt nur einem Link, kannst du mehrere Links zu verschiedenen Plattformen teilen.

## Funktionen

- Übersichtliche Anzeige von Links zu verschiedenen Plattformen.
- Einfache Anpassung der Links und ihrer Beschriftungen.
- **NEU**: Integration von Supabase zur Verwaltung deiner Links in einer Datenbank.


## Anpassung

### Methode 1: Verwendung von `LinkData.jsx`

- Erstelle eine Datei, z.B. `src/LinkData.jsx`, um deine eigenen Links hinzuzufügen. Hier ist ein Beispiel:

```jsx
// src/LinkData.jsx

const links = [
  { title: 'Instagram', url: 'https://www.instagram.com/jan.cebulla/' },
  { title: 'Mastodon', url: 'https://mastodon.social/@jancebulla' },
  { title: 'Twitter', url: 'https://twitter.com/JanCebulla' },
  { title: 'Reddit', url: 'https://www.reddit.com/u/retardgerman' },
  { title: 'Bluesky', url: 'https://bsky.app/profile/jan-cebulla.de' },
  // Weitere Links hier hinzufügen
];

export default links;
```
Wenn du LinkData.jsx verwendest, musst du die Datei `LinkData.jsx` selbst anpassen, indem du deine eigenen Links hinzufügst oder vorhandene Links änderst. Beachte, dass die Verwendung von Supabase in diesem Fall nicht erforderlich ist. 

- Passe die `src/components/LinkList.jsx`-Datei an, um sicherzustellen, dass sie die `LinkData.jsx`-Datei verwendet. Hier ist ein Beispiel:

  ```jsx
  // src/components/LinkList.jsx
  
  import React from 'react'; 
  import links from '../LinkData'; // Importiere die Links aus LinkData.jsx

  function LinkList() {
    return (
      <ul className="Link-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a >
          </li>
        ))}
      </ul>
    );
  }

  export default LinkList;
  ```



### Methode 2: Verwendung von Supabase

Die Links werden in einer Supabase-Datenbank gespeichert. Um diese Methode zu verwenden, richte zuerst deine Supabase-Datenbank ein.
Passe die `supabaseConfig.js`-Datei an, um deine Supabase-Zugangsdaten einzufügen:

```js
// src/supabaseConfig.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'DEINE_SUPABASE_URL';
const supabaseKey = 'DEIN_SUPABASE_API_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```
- In der `LinkList.jsx`-Datei werden die Links aus der Supabase-Datenbank abgerufen und angezeigt.



## Beitrag

Fragen, Probleme oder Vorschläge? Fühle dich frei, ein [Issue](https://github.com/SimplyJanDE/jan-cebulla.de/issues) zu erstellen oder einen Pull Request einzureichen.

