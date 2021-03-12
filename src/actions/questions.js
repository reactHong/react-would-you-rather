import { hideLoading, showLoading } from 'react-redux-loading-bar';
import * as API from '../_DATA';

export const ANSWER_QUESTION = "ANSWEER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

const answerQuestion = (authedUser, qid, answer) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const handleVote = ({ authedUser, qid, answer }) => (dispatch) => {
  dispatch(showLoading());
  return API._saveQuestionAnswer({ authedUser, qid, answer })
    .then(() => {
      dispatch(answerQuestion(authedUser, qid, answer));
      dispatch(hideLoading());
    });
};

export const handleAddQuestion = (question, callback) => (dispatch) => {
  dispatch(showLoading());
  return API._saveQuestion(question)
    .then((question) => {
      dispatch(addQuestion(question));
      dispatch(hideLoading());
      callback();
    });
};


