import React from 'react';
import ShowCarousel from "./SlideCarousel"
import ShowList from './ShowsList';

export default function Body() {
  return (
    <main className="body-container">
      <h1>Welcome to My Podcast App</h1>
      <ShowCarousel />
      <ShowList />
      {/* Add your podcast list or other content here */}
    </main>
  );
}
