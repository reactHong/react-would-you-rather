import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import preference from "./preference";
import { loadingBarReducer } from "react-redux-loading-bar";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authedUser"],
};

const rootReducer = combineReducers({
  questions,
  users,
  authedUser,
  preference,
  loadingBar: loadingBarReducer,
});

export default persistReducer(persistConfig, rootReducer);