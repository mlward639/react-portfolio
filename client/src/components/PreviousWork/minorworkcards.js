import React from "react";

const MinorWork = () => {
  return (
    <div className="col-5 col">
      <a href={WorkDeployedURL}>
        <imgPath
          src={WorkImgSrc}
          alt={WorkImgAlt}
          className="work-pic {`work-pic${Work.id}`}" //should look like this: work-pic1
        />
      </a>
      <div className="other-work-description {`other-issue${Work.id}`}">
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

export default MinorWork;
