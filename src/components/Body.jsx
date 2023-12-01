import React from 'react';
import ShowCarousel from "./SlideCarousel"
import ShowList from './ShowsList';

export default function Body() {
  return (
    <main>
      <h2 className="body-title">Find Your Favourite Show</h2>
      <ShowCarousel />
      <ShowList />
      {/* Add your podcast list or other content here */}
    </main>
  );
}
