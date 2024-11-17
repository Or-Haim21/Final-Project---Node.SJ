import { createStore } from "redux";
import rootReducer from "./rootReducer";

// Load state from sessionStorage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined; // Return undefined if no saved state exists
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from sessionStorage:", err);
    return undefined;
  }
};

// Save state to sessionStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Could not save state to sessionStorage:", err);
  }
};

// Load persisted state from sessionStorage
const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

// Save the state to sessionStorage whenever it updates
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
