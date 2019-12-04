import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../views";

const Routes = () => (
  <>
    <Route exact to="/" component={Home} />
  </>
);

export default Routes;
