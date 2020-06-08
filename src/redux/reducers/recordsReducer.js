import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getData } from "../../Resources/data";

const INITIAL_STATE = {
  data: [],
};

export const RecordsReducer = persistReducer(
  { storage, key: "records", whitelist: ["data"] },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "REQUEST_DATA":
        return Object.assign({}, state, {
          isFetching: 1,
        });

      case "FETCH_DATA":
        return Object.assign({}, state, {
          data: getData(state.limit),
          isFetching: 0,
          show: 1,
          time: Date.now(),
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
export default RecordsReducer;
