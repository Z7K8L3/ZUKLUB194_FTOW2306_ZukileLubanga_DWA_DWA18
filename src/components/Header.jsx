import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
let navigate = useNavigate

function handleLogout() {
  sessionStorage.removeItem("token")
  navigate("/")
}

  return (
    <header className="header">
      <img src="./favicon-32x32.png" className="header-image" />
      <h2 className="header-title">ShowCast</h2>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
