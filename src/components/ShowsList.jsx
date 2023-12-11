import React, { useState, useEffect } from "react";

export default function ShowList() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");
  const [filterText, setFilterText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null)

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
    setLoading(true);
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
        setLoading(false);
      });
  }, []);

  const genreMapping = {};
  genreList.forEach((genre) => {
    genreMapping[genre.id] = genre.title;
  });

  const sortShows = () => {
    let filteredShows = shows;

    if (filterText.trim() !== "") {
      filteredShows = shows.filter((show) => show.title.toLowerCase().includes(filterText.toLowerCase()))
  }

  if (selectedGenre !== null) {
    filteredShows = filteredShows.filter((show) => show.genres.includes(selectedGenre))
  }

    const sortedShows = [...filteredShows];

    sortedShows.sort((a, b) => {
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

    setShows(sortedShows);
  };

  useEffect(() => {
    sortShows();
  }, [sortOrder, sortBy, shows, filterText, selectedGenre]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const handleFilterText = (e) => {
    setFilterText(e.target.value);
  };

  const handleGenreSort = (genreId) => {
    setSelectedGenre((prevGenre) =>
    prevGenre === genreId ? null : genreId)
  }

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
            key={genre.id} onClick={() => handleGenreSort(genre.id)} className={selectedGenre === genre.id ? "selected" : ""}>{genre.title}</span>
          ))}
        </div>
      </div>
      <h2 className="list-title">All Shows</h2>
      <ul className="show-list">
        {shows.map((show) => (
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
