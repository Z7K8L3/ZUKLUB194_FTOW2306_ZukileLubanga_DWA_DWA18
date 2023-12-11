import React, { useState, useEffect } from "react";
import { supabase } from "../client";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("dateDesc");

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { data, error } = await supabase.from("favorites").select("*");
        if (error) {
          throw error;
        }
        setFavorites(data || []);
      } catch (error) {
        console.error("Error fetching favorites:", error.message);
      }
    };

    fetchFavorites();
  }, []);

  const sortFavorites = () => {
    // Implement sorting logic

    // Update favorites in Supabase after sorting
    updateFavorites(sortedFavorites);
  };

  const updateFavorites = async (updatedFavorites) => {
    try {
      // Update the "favorites" table in Supabase with the sorted data
      const { data, error } = await supabase.from("favorites").upsert(updatedFavorites);
      if (error) {
        throw error;
      }
      setFavorites(data || []);
    } catch (error) {
      console.error("Error updating favorites:", error.message);
    }
  };

  const addToFavorites = async (newFavorite) => {
    try {
      // Add a new favorite to the "favorites" table in Supabase
      const { data, error } = await supabase.from("favorites").upsert([newFavorite]);
      if (error) {
        throw error;
      }
      setFavorites(data || []);
    } catch (error) {
      console.error("Error adding to favorites:", error.message);
    }
  };


  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      <div className="buttons">
          <button onClick={() => setSortBy("titleAsc")} className="sort-btns">Sort by Title A-Z</button>
          <button onClick={() => setSortBy("titleDesc")} className="sort-btns">Sort by Title Z-A</button>
          <button onClick={() => setSortBy("dateAsc")} className="sort-btns">Sort by Date Ascending</button>
          <button onClick={() => setSortBy("dateDesc")} className="sort-btns">Sort by Date Descending</button>
      </div>
      

      {favorites.map((favorite) => (
        <div key={favorite.id} className="favorite-item">
          
          <p>{favorite.showTitle}</p>
          <p>{favorite.dateAdded}</p>
        </div>
      ))}
    </div>
  );
}
