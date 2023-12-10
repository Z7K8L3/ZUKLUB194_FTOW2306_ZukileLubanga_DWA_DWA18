import React, { useState, useEffect } from "react";

export default function ShowList() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");
  const [filterText, setFilterText] = useState("");

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

  const sortShows = () => {
    const filteredShows = shows.filter((show) =>
      show.title.toLowerCase().includes(filterText.toLowerCase())
    );

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
  }, [sortOrder, sortBy, shows, filterText]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const handleFilterText = (e) => {
    setFilterText(e.target.value);
  };

  if (loading) {
    return <div className="loading-shows">Getting Your Shows...</div>;
  }

  return (
    <div className="list-container">
      <div className="filter-sort-container">
        <div className="title-filter">
          <label htmlFor="filterInput">FIlter by Title:</label>
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
      <h2 className="list-title">All Shows</h2>
      <ul className="show-list">
        {shows.map((show) => (
          <li key={show.id}>
            <img src={show.image} alt={show.title} className="list-image" />
            <div className="list-details">
              <h3>{show.title}</h3>
              <p>Seasons: {show.seasons}</p>
              <p>
                {show.description.length > 100
                  ? `${show.description.slice(0, 100)}...`
                  : show.description}
              </p>
              {show.description.lenth > 100 && (
                <button className="show-more">Read More</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
