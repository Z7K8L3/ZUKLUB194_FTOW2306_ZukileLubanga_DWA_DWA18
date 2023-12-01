import React from 'react';
import ShowCarousel from "./SlideCarousel"
import ShowList from './ShowsList';

export default function Body() {
  return (
    <main>
      <h1 className="body-title">Welcome to My Podcast App</h1>
      <ShowCarousel />
      <ShowList />
      {/* Add your podcast list or other content here */}
    </main>
  );
}
