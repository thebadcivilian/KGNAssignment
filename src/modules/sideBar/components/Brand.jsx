import React from "react";
import img from "../../../img/WhatsApp Image 2023-04-07 at 15.32.05.jpeg";
import classes from "./Brand.module.css";

function Brand() {
  return (
    <div>
      <img className={classes.img} src={img} alt="" />
    </div>
  );
}

export default Brand;
