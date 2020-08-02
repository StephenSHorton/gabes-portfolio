import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleBtnRef = React.createRef();
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark">
      <Link className="navbar-brand" to="/">
        ARK-R
      </Link>
      <button
        ref={toggleBtnRef}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              onClick={() => toggleBtnRef.current.click()}
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/projects"
              onClick={() => toggleBtnRef.current.click()}
            >
              Projects <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => toggleBtnRef.current.click()}
            >
              Contact Me <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
