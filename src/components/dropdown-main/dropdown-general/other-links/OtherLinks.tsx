import React from "react";
import { useDispatch } from "react-redux";
import { setDropdown } from "../../../../redux/Index";
import "./OtherLinks.scss";

function OtherLinks() {
  const dispatch = useDispatch();

  const closeDD = () => {
    dispatch(setDropdown(false));
  };

  return (
    <div className="otherlinks-container">
      <div className="item" onClick={closeDD}>
        <span className="material-icons-outlined">phone_iphone</span>
        <span>Get the mobile app</span>
      </div>
      <div className="item" onClick={closeDD}>
        <span className="material-icons-outlined">people</span>
        <span>Community</span>
      </div>
      <div className="item" onClick={closeDD}>
        <span className="material-icons-outlined">book</span>
        <span>Knowledge base</span>
      </div>
    </div>
  );
}

export default OtherLinks;
