import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>TO DO App</h1>
      </Link>
      <ul className="nav-links">
        <Link to="/todo">
          <li>Add</li>
        </Link>
        <Link to="/edit">
          <li>Modify</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
