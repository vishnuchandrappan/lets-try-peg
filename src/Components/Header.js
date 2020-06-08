import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
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
    </header>
  );
};
