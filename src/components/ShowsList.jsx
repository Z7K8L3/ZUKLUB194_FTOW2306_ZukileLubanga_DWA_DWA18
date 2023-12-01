import React, { useState, useEffect } from 'react';

export default function ShowList() {
    const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch shows data from the API
    setLoading(true);
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='loading-shows'>Getting Your Shows...</div>;
  }

  return (
    <div>
      <h2>All Shows</h2>
      <ul className='show-list'>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
};