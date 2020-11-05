import React from "react";
import { useDispatch } from "react-redux";
import { setDropdown } from "../../../../redux/Index";
import "./SettingsLogout.scss";

function SettingsLogout() {
  const dispatch = useDispatch();

  const closeDD = () => {
    dispatch(setDropdown(false));
  };
  return (
    <div className="settings-logout-container">
      <div className="item" onClick={closeDD}>
        <span className="material-icons-outlined">settings</span>
        <span>Settings</span>
      </div>
      <div className="item exit" onClick={closeDD}>
        <span className="material-icons-outlined">exit_to_app</span>
        <span>Log out</span>
      </div>
    </div>
  );
}

export default SettingsLogout;
