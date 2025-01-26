import { combineReducers, createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case "mobileUpdate":
      return { ...state, mobile: action.payload };

    case "restart":
      return initialState;
    default:
      return state;
  }
};

const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          id: action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];

    default:
      return state;
  }
};

let rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
});
//VA0286502303

const store = createStore(rootReducer);

export default store;
