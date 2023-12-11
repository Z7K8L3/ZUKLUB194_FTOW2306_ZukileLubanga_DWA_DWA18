import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

export default function ShowList() {
  const [showsList, setShowsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");
  const [filterText, setFilterText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [originalShows, setOriginalShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  const genreList = [
    { id: 1, title: "Personal Growth" },
    { id: 2, title: "True Crime and Investigate Journalism" },
    { id: 3, title: "History" },
    { id: 4, title: "Comedy" },
    { id: 5, title: "Entertainment" },
    { id: 6, title: "Business" },
    { id: 7, title: "Fiction" },
    { id: 8, title: "News" },
    { id: 9, title: "Kids and Family" },
];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://podcast-api.netlify.app/shows");
        const data = await response.json();
        setOriginalShows(data);
        setShowsList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching shows:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const genreMapping = {};
  genreList.forEach((genre) => {
    genreMapping[genre.id] = genre.title;
  });

  const fuse = new Fuse(originalShows, {
    keys: ["title"],
    threshold: 0.4,
  });

  useEffect(() => {
    sortShows();
  }, [sortOrder, sortBy, filterText, selectedGenre]);

  const sortShows = () => {
    let filteredShowsList = [...originalShows];

    if (filterText.trim() !== "") {
      const fuseResults = fuse.search(filterText);
      filteredShowsList = fuseResults.map((result) => result.item);
    }

    if (selectedGenre !== null) {
      filteredShowsList = filteredShowsList.filter((show) =>
        show.genres.includes(selectedGenre)
      );
    }

    filteredShowsList.sort((a, b) => {
      if (sortBy === "title") {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return sortOrder === "asc"
          ? titleA.localeCompare(titleB)
          : titleB.localeCompare(titleA);
      } else if (sortBy === "date") {
        const dateA = new Date(a.updated);
        const dateB = new Date(b.updated);
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      }

      return 0; // No sorting
    });

    setFilteredShows(filteredShowsList);
    setShowsList(filteredShowsList);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const handleFilterText = (e) => {
    const newText = e.target.value;
    setFilterText(newText);

    if (newText.trim() === "") {
      setFilteredShows(originalShows);
      setShowsList(originalShows);
    } else {
      sortShows();
    }
  };

  const handleGenreSort = (genreId) => {
    setSelectedGenre((prevGenre) =>
      prevGenre === genreId ? null : genreId
    );
  };

  if (loading) {
    return <div className="loading-shows">Getting Your Shows...</div>;
  }

  return (
    <div className="list-container">
      <div className="filter-sort-container">
        <div className="title-filter">
          <label htmlFor="filterInput">Filter by Title:</label>
          <input
            type="text"
            id="filterInput"
            value={filterText}
            onChange={handleFilterText}
          />
        </div>
        <div className="buttons">
          <button onClick={() => handleSortBy("title")} className="sort-btns">
            Sort by Title
          </button>
          <button onClick={() => handleSortBy("date")} className="sort-btns">
            Sort by Date
          </button>
          <button onClick={toggleSortOrder} className="sort-btns">
            Sort Order
          </button>
        </div>
      </div>
      <div className="genre-container">
        <h3 className="genre-sort">Filter by Genre:</h3>
        <div className="genres">
          {genreList.map((genre) => (
            <span
              key={genre.id}
              onClick={() => handleGenreSort(genre.id)}
              className={selectedGenre === genre.id ? "selected" : ""}
            >
              {genre.title}
            </span>
          ))}
        </div>
      </div>
      <h2 className="list-title">All Shows</h2>
      <ul className="show-list">
        {showsList.map((show) => (
          <li key={show.id}>
            <img src={show.image} alt={show.title} className="list-image" />
            <div className="list-details">
              <h3>{show.title}</h3>
              <p>Seasons: {show.seasons}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}