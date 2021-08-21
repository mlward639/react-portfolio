import React from "react";
import SassyPetImg from "../../images/project-one-screenshot-deployed-url.png";
import WeatherImg from "../../images/weather-screenshot.png";
import BlogImg from "../../images/screenshot-homepage.png";
import TeamImg from "../../images/screenshot-generated-html-live-server.png";

const minorWorkCards = [
  {
    id: 1,
    key: "SassyPet",
    WorkDeployedURL: "https://mlward639.github.io/Project-One-Sassy-Pets/",
    WorkImgSrc: SassyPetImg,
    WorkImgAlt: "Screenshot of Sassy Pets",
    WorkTitle: "Sassy Pet Adoption Application",
    WorkTech: "HTML, CSS, JS",
    WorkGithubRepo: "https://github.com/mlward639/Project-One-Sassy-Pets",
  },
  {
    id: 2,
    key: "Weather",
    WorkDeployedURL: "https://mlward639.github.io/unit-six-homework/",
    WorkImgSrc: WeatherImg,
    WorkImgAlt: "weather-screenshot",
    WorkTitle: "Weather Dashboard",
    WorkTech: "HTML, CSS, JS",
    WorkGithubRepo: "https://github.com/mlward639/unit-six-homework",
  },
  {
    id: 3,
    key: "Blog",
    WorkDeployedURL: "https://peaceful-thicket-32012.herokuapp.com/",
    WorkImgSrc: BlogImg,
    WorkImgAlt: "Screenshot of blog homepage",
    WorkTitle: "Developer's Blog",
    WorkTech: "MySQL2, Express, Sequelize, Handlebars, Heroku",
    WorkGithubRepo: "https://github.com/mlward639/Unit-fourteen-homework",
  },
  {
    id: 4,
    key: "Team",
    WorkDeployedURL: "https://github.com/mlward639/Unit-ten-homework",
    WorkImgSrc: TeamImg,
    WorkImgAlt: "Screenshot of Generated HTML Team Webpage",
    WorkTitle: "Team Page Generator",
    WorkTech: "Inquirer, Bootstrap, Jest",
    WorkGithubRepo: "https://github.com/mlward639/Unit-ten-homework",
  },
];

const MinorWork = () => {
  return minorWorkCards.map((card) => (
    <div className="col-5 col other-work" key={card.key}>
      <a href={card.WorkDeployedURL}>
        <img src={card.WorkImgSrc} alt={card.WorkImgAlt} className="work-pic" />
      </a>
      <div className="other-work-description">
        <h3>{card.WorkTitle}</h3>
        <p>
          {card.WorkTech}
          <a className="github-project-link" href={card.WorkGithubRepo}>
            <i className="fab fa-github-square"></i>
          </a>
        </p>
      </div>
    </div>
  ));
};

export default MinorWork;
