import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <img 
        src="./podcast-watch.png" 
        className="header-image"
      />
      <h2 className='header-title'>ShowCast</h2>
      {/* Logo, SearchBar, FavoritesButton go here */}
    </header>
  );
}


