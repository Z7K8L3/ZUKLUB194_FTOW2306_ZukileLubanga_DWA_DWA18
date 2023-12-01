// ShowCarousel.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ShowCarousel() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [])

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
          </div>
        ))}
      </Slider>
    </div>
  );
};