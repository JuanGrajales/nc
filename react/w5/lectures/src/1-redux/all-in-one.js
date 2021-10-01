import { createStore, combineReducers } from "redux";

// actions file
// every action you create must have a corresponding case in the switch statement of a reducer
export const increment = (num = 1) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};

// reducers file
export const counterReducer = (state = 10, action) => {
  console.log("counterReducer receives the action", action);
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const loggedReducer = (state = false, action) => {
  console.log("loggedReducer also receives the action", action);
  switch (action.type) {
    case "LOGIN":
      return true;
    default:
      return state;
  }
};

// combine reducers file
export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

// store file
export const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
