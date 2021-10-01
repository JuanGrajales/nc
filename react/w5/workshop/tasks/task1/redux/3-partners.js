// step 1 REMOVE
// import { PARTNERS } from "../shared/partners";
// step 1 REMOVE

// step 2 ADD
import * as ActionTypes from "./ActionTypes";
// step 2 ADD

// step 3 EDIT ADD
export const Partners = (
  state = { isLoading: true, errMess: null, partners: [] },
  action
) => {
  // step 3 EDIT ADD
  switch (action.type) {
    // step 4 EDIT ADD
    case ActionTypes.ADD_PARTNERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        partners: action.payload,
      };

    case ActionTypes.PARTNERS_LOADING:
      return { ...state, isLoading: true, errMess: null, partners: [] };

    case ActionTypes.PARTNERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    // step 4 EDIT ADD
    default:
      return state;
  }
};
