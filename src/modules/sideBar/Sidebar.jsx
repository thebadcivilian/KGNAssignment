import React from "react";
import Brand from "./components/Brand";
import NavRow from "./components/NavRow";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import classes from "./Sidebar.module.css";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import DropdownContent from "./components/DropdownContent";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <div className={classes.container}>
      <div>
        <Brand />
        <div
          className={classes.navItems}
          style={{ backgroundColor: "#fbf4f3" }}
        >
          <div className={classes.navRowContainer}>
            <NavRow icon={SpaceDashboardIcon} navName={"Dashboard"} />
          </div>
          <NavRow icon={SchoolIcon} navName={"Education"} />
          <div className={classes.dropdown}>
            <SpaceDashboardIcon className={classes.fontIcon} />
            <h4>Resources</h4>
            <ExpandMoreSharpIcon style={{ marginLeft: "35px" }} />
          </div>
          <DropdownContent />
          <NavRow icon={SettingsIcon} navName={"Setting"} />
        </div>
      </div>

      <NavRow
        iconColor="white"
        bgColor="#000"
        icon={LogoutOutlinedIcon}
        navName={"Log out"}
        paddingIcon="10px"
        borderRad="50%"
      />
    </div>
  );
}

export default Sidebar;
