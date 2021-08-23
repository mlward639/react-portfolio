import React from "react";

const Footer = () => {
  return (
    <div className="row contact-me-container" id="contact-me">
      <div className="col col-2 left-titles">
        <h2>Contact Me</h2>
      </div>
      <div className="col-10 col linkContainer">
        <ul
          className="navbar-nav navbar navbar-expand-lg contact-links"
          id="navbarNav"
        >
          <li className="contact-item active">
            <i className="fas fa-envelope-square"></i>
            mlward639@gmail.com
          </li>
          <li className="contact-item active">
            <i className="fas fa-mobile-alt"></i>
            770-605-1426
          </li>
          <li className="contact-item active">
            <a
              className="nav-link link-color-issue"
              href="https://github.com/mlward639"
              target="_blank"
            >
              <i className="fab fa-github-square"></i>GitHub Repo{" "}
            </a>
          </li>
          <li className="contact-item active">
            <a
              className="nav-link link-color-issue"
              href="https://linkedin.com/in/maggie-ward9"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
