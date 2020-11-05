import React from "react";
import { useDispatch } from "react-redux";
import { setActiveDD } from "../../../../redux/Index";
import "./Achievements.scss";

function Achievements() {
  const dispatch = useDispatch();

  const toggleAchievements = () => {
    dispatch(setActiveDD("achievements"));
  };

  return (
    <div className="achievements-container item" onClick={toggleAchievements}>
      <div className="achievements-sub-container-top">
        <div className="settings-icon">
          <span className="material-icons-outlined">school</span>
        </div>
        <div className="achievements-info">
          <div className="title">Achievements</div>
          <div className="subtitle">3/11 done <span className="dot">·</span>  27%</div>
        </div>
      </div>
      <div className="achievements-progress">
        <progress
          className="progress"
          value="27"
          max="100"
        ></progress>
      </div>
    </div>
  );
}

export default Achievements;
