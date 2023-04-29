import React from "react";
import classes from "./Lower.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProgressBox from "./ProgressBox";
import img from "../../../../img/progressImg.jpeg";
import img1 from "../../../../img/progressimg2.jpeg";
import img2 from "../../../../img/progressimg3.jpeg";
import img3 from "../../../../img/progressimg4.jpeg";

const Lower = () => {
  return (
    <div className={classes.lower}>
      <div className={classes.text}>
        <div>
          <h4>My Learnings</h4>
          <p>Your progress of medical lectures</p>
        </div>
        <MoreHorizIcon className={classes.icon} />
      </div>
      <div className={classes.data}>
        <ProgressBox img={img1} title="Viruses" percent="96"></ProgressBox>
        <ProgressBox
          img={img2}
          title="Bacterial cells"
          percent="33"
        ></ProgressBox>
        <ProgressBox img={img3} title="Med science" percent="7"></ProgressBox>
        <ProgressBox img={img} title="Human gens" percent="58"></ProgressBox>
      </div>
    </div>
  );
};

export default Lower;
