import React from "react";
import classes from "./MiddleLeft.module.css";
import cstmrImg1 from "../../../img/customer-1(1).jpg";
import cstmrImg2 from "../../../img/customer-2(1).jpg";
import cstmrImg3 from "../../../img/customer-3(1).jpg";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const MiddleLeft = () => {
  return (
    <div className={classes.mg}>
      <div className={classes.left}>
        <div className={classes.topContainer}>
          <div className={classes.topText}>
            <h4>Today's Plan</h4>
            <p>June 14th, 2022</p>
          </div>
          <AddOutlinedIcon className={classes.plusIcon} />
        </div>
        <div className={classes.middleContainer}>
          <h4>Sustainable development goals and health innovation</h4>
          <div className={classes.meetProfile}>
            <div className={classes.img}>
              <img src={cstmrImg1} alt="" />
              <img src={cstmrImg2} alt="" />
              <img src={cstmrImg3} alt="" />
            </div>
            <div className={classes.meeting}>
              <h6>Medi team meeting</h6>
              <p>12:30 - 14:50</p>
            </div>
          </div>
        </div>
        <div className={classes.lowerContainer}>
          <div className={classes.upperImgBox}>
            <h5>Weekly report </h5>
            <p>Track your performance</p>
            <button>VIEW REPORT</button>
          </div>
          <div className={classes.lowerImgBox}>
            <div className={classes.box2}>
              <h4>Study 78X</h4>
              <div className={classes.box3_Icon}>
                <WatchLaterIcon className={classes.boxIcon} />
                <span>in progress</span>
              </div>
            </div>

            <div className={classes.box3}>
              <h4>Study 78X</h4>
              <div className={classes.box3_Icon}>
                <CheckCircleIcon className={classes.boxIcon} />
                <span>completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleLeft;
