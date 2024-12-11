import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div id="bookLogo">
        <img
          src="https://img.pikbest.com/png-images/book-logo-vector-graphic-element_1792850.png!f305cw"
          alt=""
        />
      </div>
      <h1>BookWorm</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allBooks">All Books</Link>
        </li>
        <li>
          <Link to="/addBooks">Add Books</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
