import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  data: false,
  isFetching: 0,
};

export const DataReducer = persistReducer(
  { storage, key: "data", whitelist: ["data"] },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "REQUEST_DATA":
        return Object.assign({}, state, {
          isFetching: 1,
        });

      case "FETCH_DATA":
        return Object.assign({}, state, {
          data: action.data,
          isFetching: 0,
        });

      default:
        return state;
    }
  }
);
export default DataReducer;
