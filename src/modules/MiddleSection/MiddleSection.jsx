import React from "react";
import classes from "./MiddleSection.module.css";
import MiddleLeft from "./MiddleLeft/MiddleLeft";
import MiddleRight from "./MiddleRight/MiddleRight";

const MiddleSection = () => {
  return (
    <div className={classes.middleContainer}>
      <MiddleLeft />
      <MiddleRight />
    </div>
  );
};

export default MiddleSection;
