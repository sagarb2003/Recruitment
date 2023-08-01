// Navbar.js

import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <h2>Recruitment: Unlock Talent Potential</h2>
        <ul className="navbar-links">
          <li>
            <a href="#about">About Us </a>
          </li>
          <li>
            <a href="#signin">Sign In</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
