import { hideLoading, showLoading } from 'react-redux-loading-bar';
import * as API from '../_DATA';

export const ANSWER_QUESTION = "ANSWEER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

const answerQuestion = (authedUserId, qid, answer) => ({
  type: ANSWER_QUESTION,
  authedUserId,
  qid,
  answer,
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const handleVote = ({ authedUserId, qid, answer }) => (dispatch) => {
  dispatch(showLoading());
  return API._saveQuestionAnswer({ authedUserId, qid, answer })
    .then(() => {
      dispatch(answerQuestion(authedUserId, qid, answer));
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


