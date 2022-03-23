import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <ul>
       
        <li>
          <Link to="/addbox">AddBox</Link>
        </li>
        <li>
          <Link to="/listboxes">ListBoxes</Link>
        </li>

      </ul>
    </div>
  );
};
export default Navbar;