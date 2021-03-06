import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Game from "../Components/Game/Main";
import { Header } from "../Components/Header";
import { About } from "../Components/Pages/About";
import Generator from "../Components/Pages/Generator";
import { PegSystem } from "../Components/Pages/PegSystem";
import Results from "../Components/Results/Results";
function Routes({ isStarted, completed }) {
  return (
    <BrowserRouter>
      <Route path="/game" component={Game} />
      <Route path="/results" component={Results} />

      {isStarted ? (
        <Redirect to="/game" />
      ) : completed ? (
        <Redirect to="/results" />
      ) : (
        <div>
          <Header />
          <Route path="/" exact component={Generator} />
          <Route path="/learn" component={PegSystem} />
          <Route path="/about" component={About} />
        </div>
      )}
    </BrowserRouter>
  );
}

function mapStateToProps({ game }) {
  return {
    isStarted: game.isStarted,
    completed: game.completed,
  };
}

export default connect(mapStateToProps)(Routes);
