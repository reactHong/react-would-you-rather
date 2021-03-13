import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
import { RECEIVE_QUESTIONS } from "../actions/shared";
 
const questions = (state = {}, action) => {
  switch(action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUserId),
          }
        }
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};

export default questions;