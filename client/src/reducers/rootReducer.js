import { combineReducers } from "redux";

// Initial states for each slice
const initialUserState = {
  token: null,
  id: null,
  name: null,
  numOfActions: null,
  currentlyAllowedActions: null,
};

// User Reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return initialUserState;
      case "UPDATE_ALLOWED_ACTIONS":
        return {...state, currentlyAllowedActions: action.payload};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
