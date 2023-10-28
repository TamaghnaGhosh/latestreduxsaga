/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText("E-commerce");
  expect(linkElement).toBeInTheDocument();
});
it("should be exist in component ", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const emptycardID = screen.getAllByRole("button", { name: "Empty Cart" });
  expect(emptycardID[0]).toBeInTheDocument();
});
