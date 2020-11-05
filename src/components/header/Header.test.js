import React from "react";
import TestRenderer from "react-test-renderer";

import Header from "./Header";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/Index");

describe("Header component", () => {
  test("Matches the snapshot", () => {
    const header = TestRenderer.create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
