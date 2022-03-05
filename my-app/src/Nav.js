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
              <li data-testid="homeButton">Home</li>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/todo" style={{ textDecoration: "none", color: "white" }}>
              <li data-testid="addButton">Add</li>
            </Link>
          </div>
          <div className="nav-links">
            <Link
              to="/delete"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li data-testid="deleteButton">Delete</li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
