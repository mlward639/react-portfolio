import React from "react";

const minorWorkCards = [
  { id: 1, WorkDeployedURL: "https://mlward639.github.io/Project-One-Sassy-Pets/", WorkImgSrc: "client/public/images/project-one-screenshot-deployed-url.png", WorkImgAlt: "Screenshot of Sassy Pets", WorkTitle: "Sassy Pet Adoption Application", WorkTech: "HTML, CSS, JS", WorkGithubRepo: "https://github.com/mlward639/Project-One-Sassy-Pets" },
  { id: 2, WorkDeployedURL: "https://mlward639.github.io/unit-six-homework/", WorkImgSrc: "client/public/images/weather-screenshot.png", WorkImgAlt: "weather-screenshot", WorkTitle: "Weather Dashboard", WorkTech: "HTML, CSS, JS", WorkGithubRepo: "https://github.com/mlward639/unit-six-homework" }
  { id: 3, WorkDeployedURL: "", WorkImgSrc: "", WorkImgAlt: "", WorkTitle: "", WorkTech: "", WorkGithubRepo: "" }
  { id: 4, WorkDeployedURL: "", WorkImgSrc: "", WorkImgAlt: "", WorkTitle: "", WorkTech: "", WorkGithubRepo: "" }
  { id: 5, WorkDeployedURL: "#", WorkImgSrc: "client/public/images/placeholder-image.jpg", WorkImgAlt: "#", WorkTitle: "Project 3 Placeholder", WorkTech: "Placeholder", WorkGithubRepo: "#" }
  

]

const MinorWork = () => {
  return (
    <div className="col-5 col">
      <a href={WorkDeployedURL}>
        <imgPath
          src={WorkImgSrc}
          alt={WorkImgAlt}
          className="work-pic {`work-pic${minorWorkCards.id}`}" //should look like this: work-pic1
        />
      </a>
      <div className="other-work-description {`other-issue${minorWorkCards.id}`}">
        {" "}
        //should look like this: other-issue1
        <h3>{WorkTitle}</h3>
        <p>
          {WorkTech}
          <a className="github-project-link" href={WorkGithubRepo}>
            <i className="fab fa-github-square"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default { MinorWork, minorWorkCards };
