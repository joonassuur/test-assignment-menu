import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCompany, getActiveCompany } from "../../redux/Index";
import { Company } from "../../types/Company";
import "./Companies.scss";

function Companies() {
  const dispatch = useDispatch();
  const activeCompany = useSelector(getActiveCompany);

  const companyList: Company[] = [
    {
      name: "name OÜ",
      subtitle: "subtitle",
      key: "comp1",
    },
    {
      name: "name2 AS",
      subtitle: "subtitle 2",
      key: "comp2",
    },
    {
      name: "name3 AS",
      subtitle: "subtitle 3",
      key: "comp3",
    },
  ];
  const setCompanyActive = (e: Company) => {
    dispatch(setActiveCompany(e));
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
            <div className="title">{e.name}</div>
            <div className="subtitle">{e.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Companies;
