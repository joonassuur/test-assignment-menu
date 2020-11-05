import React from "react";
import TestRenderer from "react-test-renderer";

import Achievements from "./Achievements";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../../redux/Index");

describe("Achievements component", () => {
  test("Matches the snapshot", () => {
    const achievements = TestRenderer.create(<Achievements />);
    expect(achievements.toJSON()).toMatchSnapshot();
  });
});
