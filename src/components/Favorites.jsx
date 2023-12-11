import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../client";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("dateDesc");
  const location = useLocation();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const user = supabase.auth.user();

        // Check if there's a unique identifier in the URL parameters
        const urlParams = new URLSearchParams(location.search);
        const uniqueIdentifier = urlParams.get("uuid");

        // Fetch favorites based on user ID or unique identifier
        const { data, error } = await supabase
          .from("favorites")
          .select("*")
          .eq(user ? "user_id" : "unique_identifier", user ? user.id : uniqueIdentifier);

        if (error) {
          throw error;
        }
        setFavorites(data || []);
      } catch (error) {
        console.error("Error fetching favorites:", error.message);
      }
    };

    fetchFavorites();
  }, [location.search, sortBy]);

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
