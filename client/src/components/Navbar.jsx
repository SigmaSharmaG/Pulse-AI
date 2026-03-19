import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        PulseAI
      </div>

      <ul className="navbar-links">
        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/workout")}>Workout</li>
        <li onClick={() => navigate("/diet")}>Diet</li>
        <li onClick={() => navigate("/chat")}>AI Coach</li>
        <li onClick={() => navigate("/progress")}>Progress</li>
      </ul>

      <button
        className="navbar-btn"
        onClick={() => navigate("/dashboard")}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;