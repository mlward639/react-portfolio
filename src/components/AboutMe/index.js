import React from "react";
import ProfilePic from "../../images/about-me-pic.jpg";

const AboutMe = () => {
  return (
    <div className="row about-me" id="about-me">
      <div className="col-2 col left-titles">
        <h2>About Me</h2>
      </div>
      <div className="col-7 col about-me-description">
        Dedicated and hard-working professional making the move to web
        development from the medical field. Currently enrolled in Georgia Tech
        Coding Boot Camp and set to graduate at the end of August 2021.
        Curriculum includes HTML5, CSS3, JavaScript, jQuery, Progressive Web
        Apps, Agile Methodology, Bootstrap, React.js, Express.js, Node.js,
        MongoDB, MySQL, Command Line, and Git. Strong academic foundation,
        goal-oriented and self-motivated. Proven skills in leadership, critical
        thinking, and working with a multidisciplinary team towards a common
        goal.
      </div>
      <div className="col-3 col">
        <img
          src={ProfilePic}
          alt="profile-placeholder"
          className="profile-pic"
        />
      </div>
    </div>
  );
};

export default AboutMe;
