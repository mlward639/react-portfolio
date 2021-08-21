import React from "react";
import MainWorkPic from "../../images/screenshot-dashboard-page.png";

const MainWork = () => {
  return (
    <div className="main-work-container">
      <div className="row my-main-work" id="my-work">
        <div className="col col-2 left-titles">
          <h2>My Work</h2>
        </div>
        <div className="col-10 col main-work-img-descr">
          <a href={"https://polar-river-76787.herokuapp.com/"}>
            <img
              alt="main work placeholder"
              className="main-work-pic"
              src={MainWorkPic}
              alt="main work placeholder"
            />
          </a>
          <div className="main-work-description">
            <h2>Get Money Smart</h2>
            <p>
              HTML, CSS, JS, Express, MySql2, Sequelize
              <a
                className="github-project-link"
                href={"https://github.com/mlward639/Get_Money_Smart"}
              >
                <i className="fab fa-github-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWork;
