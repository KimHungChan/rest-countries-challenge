import React from "react";
import "./Navbar.scss";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="navbar">
      <h1>Where in the world?</h1>
      <div className="dark-mode-container">
        {!darkMode ? (
          <i className="far fa-moon"></i>
        ) : (
          <i class="fas fa-moon"></i>
        )}

        <button onClick={toggleDarkMode}>Dark Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
