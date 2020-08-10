import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getData } from "../../Resources/data";

const INITIAL_STATE = {
  data: [],
  isFetching: 0,
  show: true,
  limit: 12,
  time: Date.now(),
};

export const DataReducer = persistReducer(
  { storage, key: "data", whitelist: ["data", "limit", "time"] },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "REQUEST_DATA":
        return Object.assign({}, state, {
          isFetching: 1,
        });

      case "FETCH_DATA":
        let time = Date.now();
        return Object.assign({}, state, {
          data: getData(state.limit),
          isFetching: 0,
          show: 1,
          time,
        });

      case "TOGGLE_SHOW":
        return Object.assign({}, state, {
          show: !state.show,
        });

      case "SET_LIMIT":
        return Object.assign({}, state, {
          limit: action.data,
        });

      default:
        return state;
    }
  }
);
export default DataReducer;
