import "./components/Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <nav>
        <ul className="container">
          <div className="nav-links">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <li>Home</li>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/todo" style={{ textDecoration: "none", color: "white" }}>
              <li>Add</li>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/edit" style={{ textDecoration: "none", color: "white" }}>
              <li>Modify</li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
