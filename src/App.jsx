import React, { useState, useEffect } from "react";
import { SignUp, Login, Home } from "./auth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login setToken={setToken} />} />
        <Route path={"/homepage"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
