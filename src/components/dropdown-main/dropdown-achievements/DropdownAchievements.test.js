import React from "react";
import TestRenderer from "react-test-renderer";

import DropdownAchievements from "./DropdownAchievements";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../redux/Index");

describe("DropdownAchievements component", () => {
  test("Matches the snapshot", () => {
    const dropdownAchievements = TestRenderer.create(<DropdownAchievements />);
    expect(dropdownAchievements.toJSON()).toMatchSnapshot();
  });
});
