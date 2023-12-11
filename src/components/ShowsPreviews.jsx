// ShowPreviews.jsx
import React from "react";

const ShowPreviews = ({ shows, onShowClick }) => (
  <ul className="show-list">
    {shows.map((show) => (
      <li key={show.id} onClick={() => onShowClick(show)}>
        <img src={show.image} alt={show.title} className="list-image" />
        <div className="list-details">
          <h3>{show.title}</h3>
          <p>Seasons: {show.seasons}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default ShowPreviews;
