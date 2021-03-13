import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleVote } from '../actions/questions';

function PollCardQuestion(props) {

  const [isAnswered, setIsAnswered] = useState(false);
  const [answer, setAnswer] = useState("optionOne");

  const {
    authedUser,
    authorName, 
    avatarURL,
    questionId,
    optionOne,
    optionTwo,
  } = props;

  const handleChangeValue = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.dispatch(handleVote({
      authedUserId: authedUser.id,
      qid: questionId,
      answer: answer,
    }));

    setIsAnswered(true);
  };

  if (isAnswered) {
    return <Redirect to={`/card/${questionId}`} />
  }
  
  return (
    <div className="cardContainer">
      <div className="header"><strong>{authorName} asks:</strong></div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={avatarURL}
              alt={`${authorName} Profile`}
            />
          </div>
          <div className="right">
            <h4>Would you rather</h4>
            <form onSubmit={handleSubmit}>
              <input 
                type="radio" 
                name="vote" 
                id="optionOne"
                value="optionOne"
                checked={answer === "optionOne"}
                onChange={handleChangeValue}
              /><label htmlFor="optionOne">{optionOne.text}</label>
              <br />
              <input 
                type="radio" 
                name="vote" 
                id="optionTwo"
                value="optionTwo"
                checked={answer === "optionTwo"}
                onChange={handleChangeValue}
              /><label htmlFor="optionTwo">{optionTwo.text}</label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users }, { question }) => {
  
  const author = users[question.author];

  return {
    authedUser,
    questionId: question.id,
    authorName: author.name,
    avatarURL: author.avatarURL,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,
  };
};

export default connect(mapStateToProps)(PollCardQuestion);