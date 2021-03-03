import * as API from '../_DATA';

export const ANSWER_QUESTION = "ANSWEER_QUESTION";

const answerQuestion = (authedUser, qid, answer) => ({
  type: ANSWER_QUESTION,
  authedUser,
  qid,
  answer,
});

export const handleVote = ({ authedUser, qid, answer }) => (dispatch) => {
  return API._saveQuestionAnswer({ authedUser, qid, answer })
    .then(() => {
      dispatch(answerQuestion(authedUser, qid, answer));
    });
};



