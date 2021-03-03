import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";
import preference from "./preference";

export default combineReducers({
  questions,
  users,
  authedUser,
  preference,
});