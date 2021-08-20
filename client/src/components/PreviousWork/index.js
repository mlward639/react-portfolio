import React from "react";

const PreviousWork = () => {
  return (
    <div className="main-work-container">
      <div className="row my-main-work" id="my-work">
        <div className="col col-2 left-titles">
          <h2>My Work</h2>
        </div>
        <div className="col-10 col main-work-img-descr">
          <a href={"https://mlward639.github.io/Project-One-Sassy-Pets/"}>
            MAIN WORK PIC with A HREF
          </a>
          <div className="main-work-description">
            <h2>Sassy Pet Adoption Application</h2>
            <p>
              HTML, CSS, JS{" "}
              <a
                className="github-project-link"
                href="https://github.com/mlward639/Project-One-Sassy-Pets"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row my-other-work">
        <div className="col col-2"></div>
        <div className="col-5 col">
          <a href={"https://mlward639.github.io/unit-six-homework/"}>
            <imgPath
              src="./assets/images/weather-screenshot.png"
              alt="weather-screenshot"
              className="work-pic work-pic1"
            />
          </a>
          <div className="other-work-description other-issue1">
            <h3>Weather Dashboard</h3>
            <p>
              HTML, CSS, JS
              <a
                className="github-project-link"
                href={"https://github.com/mlward639/unit-six-homework"}
              >
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col col-5">
          <a href={"https://mlward639.github.io/unit-three-homework/"}>
            <img
              src="./assets/images/Website-screenshot-preGenerate.png"
              alt="password-screenshot"
              className="work-pic work-pic2"
            />
          </a>
          <div className="other-work-description other-issue2">
            <h3>Password Generator</h3>
            <p>
              HTML, CSS, JS
              <a
                className="github-project-link"
                href={"https://github.com/mlward639/unit-three-homework"}
              >
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row my-other-work">
        <div className="col col-2"></div>
        <div className="col-5 col">
          <a href={"#"}>
            <img
              src="assets/images/placeholder-image.jpg"
              alt="placeholder"
              className="work-pic work-pic3"
            />
          </a>
          <div className="other-work-description other-issue3">
            <h3>HW Name</h3>
            <p>
              Tech used
              <a className="github-project-link" href={"#"}>
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col col-5">
          <a href={"#"}>
            <img
              src="assets/images/placeholder-image.jpg"
              alt="placeholder"
              className="work-pic work-pic4"
            />
          </a>
          <div className="other-work-description other-issue4">
            <h3>HW Name</h3>
            <p>
              Tech used
              <a className="github-project-link" href={"#"}>
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousWork;
