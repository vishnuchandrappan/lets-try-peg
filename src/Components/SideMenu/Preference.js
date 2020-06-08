import { MenuItem, Select, Switch } from "@material-ui/core";
import React from "react";
export default function Preference() {
  return (
    <div className="container">
      <h1>Preferences</h1>
      <div className="btn-container">
        <label>Dark Mode</label>
        <Switch />
      </div>
      <div className="btn-container">
        <label>Game Mode</label>
        <Select value={1}>
          <MenuItem value="1">Relaxed</MenuItem>
          <MenuItem value="3">FastTrack</MenuItem>
        </Select>
      </div>
    </div>
  );
}
