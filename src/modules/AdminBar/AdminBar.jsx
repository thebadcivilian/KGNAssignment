import React from "react";
import classes from "./AdminBar.module.css";
import img from "../../img/customer-1(1).jpg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MessageIcon from "@mui/icons-material/Message";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AdminBar = () => {
  return (
    <div style={{ borderLeft: "1px solid grey", margin: "10px" }}>
      <div className={classes.adminBar}>
        <div className={classes.profile}>
          <img className={classes.img} src={img} alt="mentors" />
          <div className={classes.online}></div>
          <h6 className={classes.name}>Dr. Riddle</h6>
          <p className={classes.designation}>Scientist</p>
        </div>
        <div className={classes.icons}>
          <BorderColorIcon />
          <MessageIcon />
          <AddOutlinedIcon className={classes.iccc} />
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
