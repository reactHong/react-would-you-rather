import { hideLoading, showLoading } from 'react-redux-loading-bar';
import * as API from '../_DATA';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const SET_QUESTIONLIST_TABINDEX = "SET_QUESTIONLIST_TABINDEX";

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const setTabIndex = (index) => ({
  type: SET_QUESTIONLIST_TABINDEX,
  index,
});

export const handleInitData = () => (dispatch) => {
  
  dispatch(showLoading());

  return Promise.all([
    API._getUsers(),
    API._getQuestions(),
  ])
  .then(([users, questions]) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  })
  .catch(error => {
    //TODO: Error handling
  });
};