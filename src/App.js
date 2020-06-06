import React from "react";
import { Provider } from "react-redux";
import Loading from "./Components/Loading";
import store from "./redux/store";
import Routes from "./Resources/Routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Loading />
    </Provider>
  );
}

export default App;
