import React from "react";
import classes from "./ProgressBox.module.css";

const ProgressBox = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.img}>
        <img src={props?.img} alt="" srcset="" />
      </div>
      <div className={classes.text}>
        <h4>{props.title}</h4>
        <p>{props.percent}% progress</p>
      </div>
    </div>
  );
};

export default ProgressBox;
