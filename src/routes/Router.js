import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../pages";

const Router = () => (
  <>
    <Route exact to="/" component={Home} />
  </>
);

export default Router;
