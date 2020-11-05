import React from "react";
import Companies from "../companies/Companies";
import Achievements from "../achievements/Achievements";
import OtherLinks from "../other-links/OtherLinks";
import SettingsLogout from "../settings-logout/SettingsLogout";
import "./DropdownGeneral.scss";

function DropdownGeneral() {
  return (
    <div className="dropdown-general">
      <div className="item head">Your Companies</div>
      <Companies></Companies>
      <Achievements></Achievements>
      <OtherLinks></OtherLinks>
      <SettingsLogout></SettingsLogout>
    </div>
  );
}

export default DropdownGeneral;
