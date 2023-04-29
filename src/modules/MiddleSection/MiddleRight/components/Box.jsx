import React from "react";
import classes from "./Box.module.css";

const Box = (props) => {
  const Icon = props;
  console.log(Icon);
  return (
    <div className={classes.box}>
      <div>
        <p style={{ margin: "0px" }} className={classes.title}>
          {props.title}
        </p>
        <h5 className={classes.heading}>{props?.heading}</h5>
        <div className={classes.status}>
          <div className={classes.icon}>{props?.iconContent}</div>
          <h6 className={classes.statusText}>{props?.status}</h6>
        </div>
      </div>
      <div className={classes.time}>{props?.time}</div>
    </div>
  );
};

export default Box;
