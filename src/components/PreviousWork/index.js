import React from "react";
import MainWork from "./mainworkcard";
import MinorWork from "./minorworkcards";

const PreviousWork = () => {
  return (
    <div className="previousWork">
      <MainWork />
      <div className="minorWorkContainer">
        <MinorWork />
        {/* <div className="row my-other-work">
        <div className="col col-2"></div>
        <MinorWork /> EXAMPLE 1
        <MinorWork /> EXAMPLE 2
      </div>

      <div className="row my-other-work">
        <div className="col col-2"></div>
        <MinorWork /> EXAMPLE 3
        <MinorWork /> EXAMPLE 4
      </div>

      <div className="row my-other-work">
        <div className="col col-2"></div>
        <MinorWork />
        <MinorWork />
      </div> */}
      </div>
    </div>
  );
};

export default PreviousWork;
