import React from "react";
import classes from "./MiddleRight.module.css";
import Upper from "./components/Upper";
import Lower from "./components/Lower";

const MiddleRight = () => {
  return (
    <div className={classes.right}>
      <Upper></Upper>
      <Lower></Lower>
    </div>
  );
};

export default MiddleRight;
