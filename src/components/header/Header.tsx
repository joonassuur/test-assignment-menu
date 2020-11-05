import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDropdown, setDropdown, getActiveCompany } from "../../redux/Index";

import "./Header.scss";

function Header() {
  const dropDownState = useSelector(getDropdown);
  const activeCompany = useSelector(getActiveCompany);
  const dispatch = useDispatch();

  const toggleDD = () => {
    dispatch(setDropdown(!dropDownState));
  };

  return (
    <div className="header-container">
      <div className="user-info">
        <div className="title">Elon Musk</div>
        <div className="subtitle">{activeCompany.name}</div>
      </div>
      <div className="settings-icon" onClick={toggleDD}>
        <span className="material-icons-outlined">settings</span>
      </div>
    </div>
  );
}

export default Header;
