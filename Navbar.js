import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Home from "./Home";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav">
        
      {/* <Link to="/Navbar" className="navbar-link"> */}
            Volunteer
          {/* </Link> */}

      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/Home" className="navbar-link">
            Home
          </Link>
        </li>

        {/* <li className="navbar-item">
          <Link to="/Dasboard" className="navbar-link">
              Dashboard
          </Link>
        </li> */}

        <li className="navbar-item">
          <Link to="/VolunteerOpportunities" className="navbar-link">
        
            Volunteer Opportunities
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
