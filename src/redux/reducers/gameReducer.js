import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getRandomList } from "../../Resources/data";

const INITIAL_STATE = {
  isStarted: false,
  currentItem: null,
  data: [],
  randomList: [],
  completed: false,
  points: 0,
};

export const GameReducer = persistReducer(
  {
    storage,
    key: "game",
    whitelist: ["isStarted", "currentItem", "data", "randomList", "points"],
  },
  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "START_GAME":
        return Object.assign({}, state, {
          isStarted: true,
          currentItem: 0,
          data: [],
          randomList: getRandomList(action.data),
          completed: false,
          points: 0,
        });

      case "END_GAME":
        return Object.assign({}, state, {
          isStarted: false,
          currentItem: null,
        });

      case "NEXT_ITEM":
        return Object.assign({}, state, {
          currentItem: state.currentItem + 1,
          data: [...state.data, action.data.toLowerCase()],
        });

      case "COMPLETE_GAME":
        return Object.assign({}, state, {
          isStarted: false,
          completed: true,
        });

      case "CORRECT_GUESS":
        return Object.assign({}, state, {
          points: state.points + 1,
        });

      case "NEW_GAME":
        return Object.assign({}, state, {
          completed: false,
        });

      default:
        return state;
    }
  }
);
export default GameReducer;
