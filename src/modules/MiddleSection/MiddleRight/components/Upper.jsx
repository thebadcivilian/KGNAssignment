import React from "react";
import classes from "./Upper.module.css";
import Box from "./Box";
import FirstIcon from "./statusIcons/FirstIcon";

const Upper = () => {
  const titleGlbal = [
    {
      id: 2,
      titile: "",
    },
  ];
  return (
    <div className={classes.upper}>
      <div className={classes.text}>
        <h4 style={{ fontWeight: "500" }}>Monthly Pinned</h4>
        <p>View all</p>
      </div>
      <div className={classes.box}>
        <Box
          title={"Next-gen immuno"}
          heading={"Multispecific liquid analysis"}
          icons={<FirstIcon />}
          status={"New feedback"}
          time={"5d"}
          iconContent={1}
        ></Box>
        <Box
          title={"Harmony"}
          heading={"Protien characterisation during childhood and pregnancy"}
          // icons={"icons"}
          iconContent={"!"}
          status={"Deadline is today"}
          time={"1h"}
        ></Box>
        <Box
          time={"7h"}
          title={"Pharmacutical"}
          heading={"Quick element dissoluion testing"}
          // icons={"icons"}
          iconContent={"✔"}
          status={"Accepted"}
        ></Box>
      </div>
    </div>
  );
};

export default Upper;
