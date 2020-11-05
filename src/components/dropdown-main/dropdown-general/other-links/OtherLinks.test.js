import React from "react";
import TestRenderer from "react-test-renderer";

import OtherLinks from "./OtherLinks";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../../redux/Index");

describe("OtherLinks component", () => {
  test("Matches the snapshot", () => {
    const otherLinks = TestRenderer.create(<OtherLinks />);
    expect(otherLinks.toJSON()).toMatchSnapshot();
  });
});
