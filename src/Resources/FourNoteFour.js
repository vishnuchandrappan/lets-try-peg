import React from "react";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
export default function FourNoteFour() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Not Found</h2>
      <div className="btn-container">
        <Link className="button">
          Home <HomeRoundedIcon />
        </Link>
      </div>
    </div>
  );
}
