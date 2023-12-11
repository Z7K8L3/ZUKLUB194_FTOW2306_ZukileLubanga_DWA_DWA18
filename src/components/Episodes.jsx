import React from "react";

const Episodes = ({ episodes }) => (
  <div className="episodes-container">
    <h2 className="list-title">Episodes</h2>
    <ul className="episode-list">
      {episodes.map((episode) => (
        <li key={episode.id}>
          <h4>{episode.title}</h4>
          <p>{episode.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Episodes;
