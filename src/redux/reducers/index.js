import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import DataReducer from "./dataReducer";
import GameReducer from "./gameReducer";
import RecordsReducer from "./recordsReducer";

const appReducer = combineReducers({
  data: DataReducer,
  game: GameReducer,
  records: RecordsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_REQUEST") {
    Object.keys(state).forEach((key) => {
      storage.removeItem(`persist:${key}`);
      localStorage.clear();
    });
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
