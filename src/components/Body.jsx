import React from "react";
import ShowCarousel from "./ShowsCarousel";
import ShowList from "./ShowsList";

export default function Body() {
  return (
    <main>
      <h2 className="body-title">Find Your Favorite Show...</h2>
      <ShowCarousel />
      <ShowList />
    </main>
  );
}
