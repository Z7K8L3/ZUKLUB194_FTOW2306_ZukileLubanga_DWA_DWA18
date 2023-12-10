import React, { useState, useEffect } from "react";
import { SignUp, Login } from "./auth";
import { Routes, Route } from "react-router-dom";
import "./main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Home";

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login setToken={setToken} />} />
        {token ? <Route path={"/homepage"} element={<Home />} /> : ""}
      </Routes>
    </div>
  );
};

export default App;
