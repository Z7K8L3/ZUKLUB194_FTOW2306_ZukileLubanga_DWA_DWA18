import React from "react";
import { SignUp, Login, Home } from "./auth";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/homepage"} element={<Home />} />
        <Route path={"/favorites"} element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
