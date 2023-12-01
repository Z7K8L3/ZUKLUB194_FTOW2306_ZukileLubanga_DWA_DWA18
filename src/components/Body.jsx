import React from 'react';
import ShowCarousel from './SlideCarousel';

export default function Body() {
  return (
    <main className="body-container">
      <h1>Welcome to My Podcast App</h1>
      <ShowCarousel />
      {/* Add your podcast list or other content here */}
    </main>
  );
}
