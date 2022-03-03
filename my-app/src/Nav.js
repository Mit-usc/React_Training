import "./components/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <nav>
        <ul className="container">
          <Link to="/" className="nav-links">
            <li>Home</li>
          </Link>
          <Link to="/todo" className="nav-links">
            <li>Add</li>
          </Link>
          <Link to="/edit" className="nav-links">
            <li>Modify</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
