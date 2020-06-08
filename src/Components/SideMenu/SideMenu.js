import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import React from "react";
import Preference from "./Preference";
import UserProfile from "./UserProfile";
export default function SideMenu({ show, onClose }) {
  return (
    <div className={show ? "preference active" : "preference"}>
      <div
        className="settings"
        onClick={() => {
          onClose(false);
        }}
      >
        <HighlightOffRoundedIcon />
      </div>
      <Preference />
      <UserProfile />
      <div className="btn-container">
        <button
          onClick={() => {
            onClose(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
