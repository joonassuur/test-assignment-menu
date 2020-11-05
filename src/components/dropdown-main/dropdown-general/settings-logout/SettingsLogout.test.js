import React from "react";
import TestRenderer from "react-test-renderer";

import SettingsLogout from "./SettingsLogout";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../../redux/Index");

describe("SettingsLogout component", () => {
  test("Matches the snapshot", () => {
    const settingsLogout = TestRenderer.create(<SettingsLogout />);
    expect(settingsLogout.toJSON()).toMatchSnapshot();
  });
});
