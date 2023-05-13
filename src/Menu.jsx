import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/about" className="active_class">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="active_class">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/home" className="active_class">
              Service
            </Link>
          </li>
          <li>
            <Link to="/user/rahil/shaikh" className="active_class">
              user
            </Link>
          </li>{" "}
          <li>
            {" "}
            <Link to="/search" className="active_class">
              Search{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Search1" className="active_class">
              Search1{" "}
            </Link>{" "}
          </li>
          <br />
        </ul>
      </nav>
    </>
  );
};

export default Menu;
