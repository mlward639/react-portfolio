import React from "react";
import MainWork from "./mainworkcard";
import MinorWork from "./minorworkcards";

const PreviousWork = () => {
  return (
    <div>
      <MainWork />
      <div className="row my-other-work">
        <div className="col col-2"></div>
        <MinorWork />
        <MinorWork />
      </div>

      <div className="row my-other-work">
        <div className="col col-2"></div>
        <MinorWork />
        <MinorWork />
      </div>

      <div className="row my-other-work">
        <div className="col col-2"></div>
        <MinorWork />
        <MinorWork />
      </div>
    </div>
  );
};

export default PreviousWork;
