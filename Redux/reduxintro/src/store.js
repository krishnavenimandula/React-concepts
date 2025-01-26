import { createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    default:
      return state;
  }
};

//VA0286502303

const store = createStore(accountReducer);

console.log(store.getState());

store.dispatch({ type: "deposit", payload: 2000 });
console.log(store.getState());

store.dispatch({ type: "withdraw", payload: 1500 });
console.log(store.getState());

store.dispatch({ type: "nameUpdate", payload: "kavya" });
console.log(store.getState());

store.dispatch({ type: "mobileUpdate", payload: 9014292935 });
console.log(store.getState());
