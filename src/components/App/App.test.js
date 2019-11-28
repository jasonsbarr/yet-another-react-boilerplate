import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterAll(cleanup);

describe("App component tests", () => {
  test("should render Home view from root route", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(container.textContent).toMatch("React App - home");
  });
});
