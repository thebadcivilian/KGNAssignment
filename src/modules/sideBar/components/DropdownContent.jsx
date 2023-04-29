import React from "react";
import classes from "./DropdownContent.module.css";
import DropdownContentRow from "./DropdownContentRow";

const DropdownContent = () => {
  return (
    <div className={classes.dropdownContainer}>
      <DropdownContentRow title="Genetics 101" bgColor="#0000ff" />
      <DropdownContentRow title="DNA synthesis" bgColor="#E7A596" />
      <DropdownContentRow title="Events" bgColor="blue" />
    </div>
  );
};

export default DropdownContent;
