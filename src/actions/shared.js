import * as API from '../_DATA';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});


export const handleInitData = (callback) => (dispatch) => {
  return Promise.all([
    API._getUsers(),
    API._getQuestions(),
  ])
  .then(([users, questions]) => {
    console.log("[handleInitData]", users, questions);
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    callback();
  })
  .catch(error => {

  });
};