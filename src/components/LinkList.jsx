import React from 'react';

function LinkList({ links }) {
  return (
    <div className="Link-list">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <NeumorphismButton title={link.title} />
        </a>
      ))}
    </div>
  );
}

const NeumorphismButton = ({ title }) => {
  return (
    <button className='NeumorphismButton'>
      <span>{title}</span>
    </button>
  );
};

export default LinkList;
