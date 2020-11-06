import React from "react";
import { useSelector } from "react-redux";
import { getActiveCompany } from "../../redux/Index";
import useComponentVisible from "../component-visible/ComponentVisible";

import "./Header.scss";

function Header() {
  useComponentVisible();
  const activeCompany = useSelector(getActiveCompany);

  return (
    <div className="header-container">
      <div className="user-info">
        <div className="title">Elon Musk</div>
        <div className="subtitle">{activeCompany?.name}</div>
      </div>
      <div className="settings-icon">
        <span className="material-icons-outlined">settings</span>
      </div>
    </div>
  );
}

export default Header;
