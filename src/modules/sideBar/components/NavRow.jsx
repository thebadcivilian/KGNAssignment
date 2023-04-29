import React from "react";
import classes from "./NavRow.module.css";

const NavRow = (props) => {
  const Icon = props.icon;
  const navName = props.navName;
  return (
    <div className={classes.NavRow}>
      <Icon
        style={{
          backgroundColor: `${props.bgColor || ""} `,
          color: `${props.iconColor || "#000"}`,
          padding: `${props.paddingIcon || ""}`,
          borderRadius: `${props.borderRad || ""}`,
        }}
        className={classes.navIcon}
      />
      <h4>{navName}</h4>
    </div>
  );
};

export default NavRow;
