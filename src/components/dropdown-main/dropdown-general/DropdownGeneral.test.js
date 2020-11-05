import React from "react";
import TestRenderer from "react-test-renderer";

import DropdownGeneral from "./DropdownGeneral";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../../redux/Index");

describe("DropdownGeneral component", () => {
  test("Matches the snapshot", () => {
    const dropdownGeneral = TestRenderer.create(<DropdownGeneral />);
    expect(dropdownGeneral.toJSON()).toMatchSnapshot();
  });
});
