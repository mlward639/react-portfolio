import React from "react";
import Logo from "../../images/placeholder-logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-container">
      <div>
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo-pic"
            alt="Logo"
            loading="lazy"
          />
          Maggie Ward
        </a>
      </div>
      <div className="nav-links" id="navbarNav">
        <ul className="navbar-nav navbar-ul">
          <li className="nav-item active">
            <a className="nav-link" href="#about-me">
              About Me{" "}
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#my-work">
              My Work{" "}
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="assets/MWard_Resume2021.pdf">
              Resume
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#contact-me">
              Contact Me{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
