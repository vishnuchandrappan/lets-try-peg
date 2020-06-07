import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Game from "./Game";

function Main({ isStarted }) {
  return !isStarted ? (
    <Redirect to="/" />
  ) : (
    <div className="container">
      <h1>Game</h1>
      <Game />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isStarted: state.game.isStarted,
  };
}

export default connect(mapStateToProps)(Main);
