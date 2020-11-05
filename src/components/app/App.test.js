import React from "react";
import TestRenderer from "react-test-renderer";
import App from "./App";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/Index");

describe("App component", () => {
  test("Matches the snapshot", () => {
    const app = TestRenderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
