import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "react-conflux";
import { StateContext } from "Contexts";
import { reducer } from "Reducers";
import { App } from "Components/App";
import "./index.scss";

render(
  <BrowserRouter>
    <StateProvider stateContext={StateContext} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
