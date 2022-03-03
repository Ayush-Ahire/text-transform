import React from "react";
// import logo from "./LOGO-1.png";
//  import { Link } from "react-router-dom";

export default function navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode} fixed-top`}
      >
        <div className="container-fluid main-box">
          <a className="navbar-brand " href="#">
            TextTransformer
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end  "
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <a href="#" className="nav-link home">
                  HOME
                </a>
              </li>

              {/* <li className="nav-item">
                <Link to="/About" className="nav-link menubar">
                  ABOUT US
                </Link>
              </li> */}
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input "
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              Enable Dark Mode
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
