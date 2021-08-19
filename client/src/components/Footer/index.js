import React from "react";

const Footer = () => {
  return (
    <div class="row contact-me-container" id="contact-me">
      <div class="col col-2 left-titles">
        <h2>Contact Me</h2>
      </div>
      <div class="col-10 col">
        <ul
          class="navbar-nav navbar navbar-expand-lg contact-links"
          id="navbarNav"
        >
          <li class="contact-item active">
            <i class="fas fa-envelope-square"></i>
            mlward639@gmail.com
          </li>
          <li class="contact-item active">
            <i class="fas fa-mobile-alt"></i>
            770-605-1426
          </li>
          <li class="contact-item active">
            <a
              class="nav-link link-color-issue"
              href="https://github.com/mlward639"
            >
              <i class="fab fa-github-square"></i>GitHub Repo{" "}
            </a>
          </li>
          <li class="contact-item active">
            <a
              class="nav-link link-color-issue"
              href="https://linkedin.com/in/maggie-ward9"
            >
              <i class="fab fa-linkedin"></i>LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
