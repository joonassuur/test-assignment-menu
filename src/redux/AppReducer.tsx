const INITIAL_STATE = {
  dropdownOpen: false,
  activeCompany: {
    name: "name OÜ",
    subtitle: "subtitle",
    key: "comp1",
  },
  activeDD: "general",
};

function AppReducer(
  state = INITIAL_STATE,
  { payload, type }: { payload: any; type: string }
) {
  switch (type) {
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        dropdownOpen: payload,
      };
    case "SET_ACTIVE_COMPANY":
      return {
        ...state,
        activeCompany: payload,
      };
    case "SET_ACTIVE_DD":
      return {
        ...state,
        activeDD: payload,
      };
    default:
      return state;
  }
}
export default AppReducer;
