import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCompany, getActiveCompany, setDropdown } from "../../../../redux/Index";
import { Company } from "../../../../types/Company";
import "./Companies.scss";

function Companies() {
  const dispatch = useDispatch();
  const activeCompany = useSelector(getActiveCompany);

  const companyList: Company[] = [
    {
      name: "Name OÜ",
      subtitle: "Subtitle 1",
      key: "comp1",
    },
    {
      name: "Name2 AS",
      subtitle: "",
      key: "comp2",
    },
    {
      name: "Name3 AS",
      subtitle: "",
      key: "comp3",
    },
  ];
  const setCompanyActive = (e: Company) => {
    dispatch(setActiveCompany(e));
    // close DD after compeny is selected
    dispatch(setDropdown(false))
  };

  return (
    <div className="companies-container">
      {companyList.map((e) => {
        let isActive = "";
        e.key === activeCompany.key ? (isActive = "active") : (isActive = "");
        return (
          <div
            key={e.key}
            className={`item company-container ${isActive}`}
            onClick={() => setCompanyActive(e)}
          >
            <div className="name">
              <div className="title">{e.name}</div>
              <div className="subtitle">{e.subtitle}</div>
            </div>
            {isActive && <span className="material-icons-outlined">check</span>}
          </div>
        );
      })}
    </div>
  );
}

export default Companies;
