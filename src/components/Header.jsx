import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <img 
        src="./watch.png" 
        className="header--image"
      />
      <h4>I'm the header</h4>
      {/* Logo, SearchBar, FavoritesButton go here */}
    </header>
  );
}


