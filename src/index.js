import React from "react";
import { render } from "react-dom";
import { StateContext } from "./contexts";
import { StateProvider } from "./store";
import { state } from "./reducers";
import App from "./components/App";

render(
  <StateProvider stateContext={StateContext} reducer={state}>
    <App />
  </StateProvider>,
  document.getElementById("root"),
);
