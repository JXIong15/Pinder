import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { FaBars, Fatimes } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
import Login from '../LoginForm';
import Button from "react-bootstrap/Button"

import "./style.css";




function Nav() {

  const [buttonPopUp, setButtonPopUp] = useState(false);

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-paw">
          <span className="pinder">
            pinder
          </span>
        </i>
      </Link>
        {/* <button className="navbar-toggler btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon">
          </span>
        </button> */}
        <div className="collapse navbar-collapse justify-content-end text">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }>
                <span className="list-text">
                  Home
                </span>
            </Link>
            </li> */}
            <li className="nav-item">
              {/* <Link
                to="/login"
                className={
                location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"}
              > */}
              <Button
                className="btn btn-outline"
                // type="submit"
                onClick={() => setButtonPopUp(true)}>
                Log in
              </Button>
              <Login trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <h3>Log In</h3>
                {/* <p>This is my button triggered popup</p> */}
              </Login>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );  
}
export default Nav;