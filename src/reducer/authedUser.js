import { SIGN_IN, SIGN_OUT } from "../actions/authedUser";

export default function authedUser(state = {}, action) {
  switch(action.type) {
    case SIGN_IN:
      return {
        ...state,
        id: action.id,
        name: action.name,
        avatarURL: action.avatarURL,
      }
    case SIGN_OUT:
      return {};
    default:
      return state;
  }
}