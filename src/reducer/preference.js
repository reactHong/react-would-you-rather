import { SIGN_OUT } from "../actions/authedUser";
import { ADD_QUESTION } from "../actions/questions";
import { SET_QUESTIONLIST_TABINDEX } from "../actions/shared";

const preference = (state = {}, action) => {
  switch(action.type) {
    case SIGN_OUT:
    case ADD_QUESTION:
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