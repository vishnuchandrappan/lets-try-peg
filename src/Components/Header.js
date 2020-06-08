import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "../Resources/Timer";
import SideMenu from "./SideMenu/SideMenu";

export const Header = () => {
  const [ShowPreference, setShowPreference] = useState(false);
  const [ShowTimer, setShowTimer] = useState(false);
  return (
    <header>
      <div
        className="settings"
        onClick={() => {
          setShowPreference(!ShowPreference);
        }}
      >
        <SettingsRoundedIcon />
      </div>
      <div
        className="settings fl-left"
        onClick={() => {
          setShowTimer(!ShowTimer);
        }}
      >
        <AccessTimeRoundedIcon />
        <Timer show={ShowTimer} onClose={setShowTimer} />
      </div>
      <nav>
        <div className="nav-logo">
          <span>Let's Try Peg</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/learn">Learn Peg</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <SideMenu show={ShowPreference} onClose={setShowPreference} />
    </header>
  );
};
