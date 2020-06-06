import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "../Components/About";
import Generator from "../Components/Generator";
import { Header } from "../Components/Header";
import { PegSystem } from "../Components/PegSystem";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Generator} />
      <Route path="/test" component={PegSystem} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}
