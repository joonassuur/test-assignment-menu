import React from "react";
import TestRenderer from "react-test-renderer";

import Companies from "./Companies";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../../redux/Index");

describe("Companies component", () => {
  test("Matches the snapshot", () => {
    const companies = TestRenderer.create(<Companies />);
    expect(companies.toJSON()).toMatchSnapshot();
  });
});
