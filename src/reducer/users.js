import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/shared";

const users = (state = {}, action) => {
  switch(action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          }
        }
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat(action.question.id),
        }
      }
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default users;

