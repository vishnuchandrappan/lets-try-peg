import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import store, { persistor } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} />
  </React.StrictMode>,
  document.getElementById("root")
);
