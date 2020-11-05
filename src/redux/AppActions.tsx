import { Company } from "../types/Company";

export const setDropdown = (payload: boolean) => {
  return {
    type: "TOGGLE_DROPDOWN",
    payload,
  };
};
export const setActiveCompany = (payload: Company) => {
  return {
    type: "SET_ACTIVE_COMPANY",
    payload,
  };
};
export const setActiveDD = (payload: string) => {
  return {
    type: "SET_ACTIVE_DD",
    payload,
  };
};
