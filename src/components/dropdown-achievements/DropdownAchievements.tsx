import React from "react";
import { useDispatch } from "react-redux";
import { setActiveDD } from "../../redux/Index";
import "./DropdownAchievements.scss";

function DropdownAchievements() {
  const dispatch = useDispatch();

  const toggleAchievements = () => {
    dispatch(setActiveDD("general"));
  };

  return (
    <div className="dropdown-achievements">
      <div className="title main item" onClick={toggleAchievements} >Achievements</div>
      <div className="item">
        <div className="title">Choose crops</div>
        <div className="subtitle">
          Add crops to all of your fields in the current season
        </div>
        <progress
          className="progress small-bottom-margin"
          value="35"
          max="100"
        ></progress>
      </div>
      <div className="item">
        <div className="title">Add tasks to 3 fields</div>
        <div className="subtitle">
          Try adding tasks of your choise to 3 fields
        </div>
        <progress
          className="progress small-bottom-margin"
          value="33"
          max="100"
        ></progress>
      </div>
      <div className="item">
        <div className="title">Export the field diary report</div>
        <div className="subtitle">
          Get most important report in just few clicks :what:
        </div>
        <progress
          className="progress small-bottom-margin"
          value="0"
          max="100"
        ></progress>
      </div>
      <div className="item">
        <div className="title">Install mobile app</div>
        <div className="subtitle">
          See your farm data wherever you go, for you and for your workers
        </div>
        <progress
          className="progress small-bottom-margin"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="item">
        <div className="title">Add your employees</div>
      </div>
    </div>
  );
}

export default DropdownAchievements;
