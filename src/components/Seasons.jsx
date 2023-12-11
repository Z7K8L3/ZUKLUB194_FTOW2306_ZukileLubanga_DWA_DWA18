import React from "react";

const Seasons = ({ seasons, onSeasonClick }) => (
  <div className="seasons-container">
    <h2 className="list-title">Seasons</h2>
    <ul className="season-list">
      {seasons.map((season) => (
        <li key={season.id} onClick={() => onSeasonClick(season)}>
          <p>Season {season.number}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Seasons;
