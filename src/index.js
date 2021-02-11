import React from "react";
import ReactDOM from "react-dom";

import { store } from "./redux";
import { Provider } from "react-redux";
import "./index.scss";
import "fontsource-roboto";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
