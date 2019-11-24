import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./contexts";
import { StateProvider } from "react-conflux";
import { state } from "./reducers";
import { App } from "./components/App";
import "./index.scss";

render(
  <BrowserRouter>
    <StateProvider stateContext={StateContext} reducer={state}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
