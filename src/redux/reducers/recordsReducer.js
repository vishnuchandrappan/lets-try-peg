import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const INITIAL_STATE = {
  data: [],
};

export const RecordsReducer = persistReducer(
  { storage, key: "records", whitelist: ["data"] },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "STORE_GAME":
        return Object.assign({}, state, {
          data: [...state.data, action.data],
        });

      case "UPDATE_POINTS":
        let temp = state.data;
        temp[state.data.length ? state.data.length - 1 : state.data.length] = {
          ...temp[temp.length ? temp.length - 1 : temp.length],
          points: action.data,
        };
        temp.splice(state.data.length - 2, 1);
        return Object.assign({}, state, {
          data: temp,
        });

      default:
        return state;
    }
  }
);
export default RecordsReducer;
