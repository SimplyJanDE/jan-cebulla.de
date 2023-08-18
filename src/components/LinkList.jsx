import React from 'react';

function LinkList({ links }) {
  return (
    <div className="Link-list">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <button className="Link-button">{link.title}</button>
        </a>
      ))}
    </div>
  );
}

export default LinkList;
