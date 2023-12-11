import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import "../main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  console.log("inside home component")
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;

// {/* <Header />
// <Body />
// <Footer /> */}