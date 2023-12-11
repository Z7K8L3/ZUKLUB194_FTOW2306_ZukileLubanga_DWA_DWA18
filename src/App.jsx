import React from "react";
import { SignUp, Login, Home } from "./auth";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/homepage"} element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
