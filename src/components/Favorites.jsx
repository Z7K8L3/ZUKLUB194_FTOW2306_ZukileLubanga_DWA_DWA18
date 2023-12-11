import React, { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]); // You'll fetch and set favorites later
  const [sortBy, setSortBy] = useState("dateDesc"); // Default sorting by date in descending order

  // useEffect for fetching favorites (to be added later)
  useEffect(() => {
    // Fetch and set favorites here
  }, []);

  const sortFavorites = () => {
    // Implement sorting logic based on the current sortBy state
    // You may need to modify this based on your actual data structure
    let sortedFavorites = [...favorites];

    switch (sortBy) {
      case "titleAsc":
        sortedFavorites.sort((a, b) => a.showTitle.localeCompare(b.showTitle));
        break;
      case "titleDesc":
        sortedFavorites.sort((a, b) => b.showTitle.localeCompare(a.showTitle));
        break;
      case "dateAsc":
        sortedFavorites.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case "dateDesc":
        sortedFavorites.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        break;
    }

    setFavorites(sortedFavorites);
  };

  return (
    <div>
      <h2>My Favorites</h2>
      
      {/* Sorting buttons/menus */}
      <button onClick={() => setSortBy("titleAsc")}>Sort by Title A-Z</button>
      <button onClick={() => setSortBy("titleDesc")}>Sort by Title Z-A</button>
      <button onClick={() => setSortBy("dateAsc")}>Sort by Date Ascending</button>
      <button onClick={() => setSortBy("dateDesc")}>Sort by Date Descending</button>

      {/* Render your favorite items here */}
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          {/* Render each favorite item */}
          <p>{favorite.showTitle}</p>
          <p>{favorite.dateAdded}</p>
        </div>
      ))}
    </div>
  );
}
