// ShowCarousel.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ShowCarousel() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define the genre list
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
  ]

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

  const genreMapping = [];
  genreList.forEach((genre) => {
    genreMapping[genre.id] = genre.title;
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className='loading-state'>Loading...Mics, Sound, Action!</div>
  }

  return (
    <div className="show-carousel">
      <Slider {...settings}>
        {shows.map((show) => (
          <div key={show.id} className="show-slide">
            <img src={show.image} alt={show.title} />
            <h3>{show.title}</h3>
            <p className='slide-info'>Seasons: <span>{show.seasons}</span></p>
            <p className='slide-info'>Last Updated: <span>{new Date(show.updated).toLocaleDateString()}</span></p>
            <p className='slide-info'>Genres: <span>{show.genres.map((genreId) => genreMapping[genreId]).join(", ")}</span></p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
