import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDropdown, setDropdown } from "../../redux/Index";
import Header from "../header/Header";
import DropdownMain from "../dropdown-main/DropdownMain";
import "./App.scss";

function App() {
  const dropdown = useSelector(getDropdown);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDropdown(false));
  }, [dispatch]);

  return (
    <div className="App">
      <Header></Header>
      {dropdown && <DropdownMain />}
    </div>
  );
}

export default App;
