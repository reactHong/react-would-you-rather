import { SET_QUESTIONLIST_TABINDEX } from "../actions/shared";

const preference = (state = {}, action) => {
  switch(action.type) {
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