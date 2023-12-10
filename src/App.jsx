import React from "react";
import { SignUp, Login } from "./auth";
import { Routes, Route } from "react-router-dom";
import "./main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/homepage"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
