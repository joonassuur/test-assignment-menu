import React from "react";
import { useDispatch } from "react-redux";
import { setActiveDD } from "../../../redux/Index";
import "./DropdownAchievements.scss";

function DropdownAchievements() {
  const dispatch = useDispatch();

  const toggleAchievements = () => {
    dispatch(setActiveDD("general"));
  };

  return (
    <div className="dropdown-achievements">
      <div className="title main" onClick={toggleAchievements}>
        <span className="material-icons">arrow_back</span>
        <span>Achievements</span>
      </div>
      <div className="item">
        <div className="title">Choose crops</div>
        <div className="subtitle">
          Add crops to all of your fields in the current season
        </div>
        <div className="progress-container">
          <progress className="progress" value="35" max="100"></progress>
          <div className="progress-count subtitle">35%</div>
        </div>
      </div>
      <div className="item">
        <div className="title">Add tasks to 3 fields</div>
        <div className="subtitle">
          Try adding tasks of your choise to 3 fields
        </div>
        <div className="progress-container">
          <progress className="progress" value="33" max="100"></progress>
          <div className="progress-count subtitle">1/3</div>
        </div>
      </div>
      <div className="item">
        <div className="title">Export the field diary report</div>
        <div className="subtitle">
          Get most important report in just few clicks :what:
        </div>
        <div className="progress-container">
          <progress className="progress" value="0" max="1"></progress>
          <div className="progress-count subtitle">0/1</div>
        </div>
      </div>
      <div className="item completed">
        <div className="title">Install mobile app</div>
        <div className="subtitle">
          See your farm data wherever you go, for you and for your workers
        </div>
        <div className="progress-container">
          <progress className="progress" value="0" max="1"></progress>
          <div className="progress-count subtitle">
            <span className="material-icons-outlined">check</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="title">Add your employees</div>
      </div>
    </div>
  );
}

export default DropdownAchievements;
