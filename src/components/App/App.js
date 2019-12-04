import React from "react";
import { Routes } from "../../routes";
import styles from "./App.module.scss";

// comment for pre-commit hook testing purposes

const App = () => (
  <div className={styles.App}>
    <Routes />
  </div>
);

export default App;
