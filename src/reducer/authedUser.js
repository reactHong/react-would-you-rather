import { SIGN_IN, SIGN_OUT } from "../actions/authedUser";

export default function authedUser(state = "", action) {
  switch(action.type) {
    case SIGN_IN:
      return action.userId;
    case SIGN_OUT:
      return "";
    default:
      return state;
  }
}