import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveDD } from "../../redux/Index";

import DropdownGeneral from "../dropdown-general/DropdownGeneral";
import DropdownAchievements from "../dropdown-achievements/DropdownAchievements";

import './Dropdown.scss'

function Dropdown() {
  const activeDD = useSelector(getActiveDD);

  const renderActiveDD = () => {
    if (activeDD === "achievements") {
      return <DropdownAchievements />;
    }
    return <DropdownGeneral />;
  };

  return <div className="dropdown-container">{renderActiveDD()}</div>;
}

export default Dropdown;
