import React from "react";
import classes from "./DropdownContentRow.module.css";

const DropdownContentRow = (props) => {
  const title = props.title;
  const bgColor = props.bgColor;
  return (
    <div className={classes.container}>
      <div
        className={classes.sq}
        style={{ backgroundColor: `${bgColor}` }}
      ></div>
      <h5 className={classes.text}>{title}</h5>
    </div>
  );
};

export default DropdownContentRow;
