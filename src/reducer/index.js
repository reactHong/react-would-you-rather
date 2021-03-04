import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import preference from "./preference";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  questions,
  users,
  authedUser,
  preference,
  loadingBar: loadingBarReducer,
});