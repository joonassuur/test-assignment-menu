import React from "react";
import { useSelector } from "react-redux";
import { getActiveDD } from "../../redux/Index";

import useComponentVisible from "../component-visible/ComponentVisible";
import DropdownGeneral from "./dropdown-general/DropdownGeneral";
import DropdownAchievements from "./dropdown-achievements/DropdownAchievements";

import "./DropdownMain.scss";

function DropdownMain() {
  const ref = useComponentVisible();

  const activeDD = useSelector(getActiveDD);

  const renderActiveDD = () => {
    if (activeDD === "achievements") {
      return <DropdownAchievements />;
    }
    return <DropdownGeneral />;
  };

  return (
    <div ref={ref} className="dropdown-container">
      {renderActiveDD()}
    </div>
  );
}

export default DropdownMain;
