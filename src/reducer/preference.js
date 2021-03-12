import { SIGN_OUT } from "../actions/authedUser";
import { SET_QUESTIONLIST_TABINDEX } from "../actions/shared";

const preference = (state = {}, action) => {
  switch(action.type) {
    case SIGN_OUT:
      return {
        ...state,
        qListTabIndex: 0,
      }
    case SET_QUESTIONLIST_TABINDEX:
      return {
        ...state,
        qListTabIndex: action.index,
      }
    default:
      return state;
  }
};

export default preference;