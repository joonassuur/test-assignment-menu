import React from "react";
import TestRenderer from "react-test-renderer";

import DropdownMain from "./DropdownMain";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/Index");

describe("DropdownMain component", () => {
  test("Matches the snapshot", () => {
    const dropdownMain = TestRenderer.create(<DropdownMain />);
    expect(dropdownMain.toJSON()).toMatchSnapshot();
  });
});
