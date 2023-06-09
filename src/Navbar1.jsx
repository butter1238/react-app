import React from "react";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            RAHIL SHAIKH
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link active"
                  aria-current="page"
                  to="Home1"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link"
                  to="Servic"
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link"
                  to="About1"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="menu_active"
                  className="nav-link"
                  to="Contact1"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
