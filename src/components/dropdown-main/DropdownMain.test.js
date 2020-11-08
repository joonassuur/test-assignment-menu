import React from "react";
import TestRenderer from "react-test-renderer";
import DropdownGeneral from "./dropdown-general/DropdownGeneral";
import DropdownAchievements from "./dropdown-achievements/DropdownAchievements";
import DropdownMain from "./DropdownMain";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../redux/Index");

describe("DropdownMain component", () => {
  test("Matches the snapshot", () => {
    const dropdownMain = TestRenderer.create(<DropdownMain />);
    expect(dropdownMain.toJSON()).toMatchSnapshot();
  });

  test("Render correct component according to state", () => {
    let activeDD = "achievements";

    const renderActiveDD = () => {
      if (activeDD === "achievements") {
        return <DropdownAchievements />;
      }
      return <DropdownGeneral />;
    };
    expect(renderActiveDD()).toStrictEqual(<DropdownAchievements />);

    activeDD = "general";

    expect(renderActiveDD()).toStrictEqual(<DropdownGeneral />);
  });
});
