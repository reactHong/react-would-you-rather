import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar({ percentage }) {
  const text = `${percentage.toFixed(0)}%`;
  return (
    <CircularProgressbar 
      value={percentage} 
      text={text} 
      styles={{
        path: {
          stroke: `#f96363dc`,
        }
      }}
    />
  );
}

function PollCardResult(props) {
  const { 
    authorName, 
    avatarURL, 
    optionOne,
    optionTwo,
    votedNum,
  } = props;
  
  const optionOneCount = optionOne.votes.length;
  const optionTwoCount = optionTwo.votes.length;
  const totalCount = optionOneCount + optionTwoCount;
  const progress1 = optionOneCount / totalCount * 100;
  const progress2 = optionTwoCount / totalCount * 100;
  
  const [progressOption1, setProgressOption1] = useState(0);
  const [progressOption2, setProgressOption2] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setProgressOption1(progress1);
      setProgressOption2(progress2);
    }, 250);
  }, [progress1, progress2]);

  return (
    <div className="cardContainer">
      <div className="header"><strong>Asked by {authorName}</strong></div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={avatarURL} 
              alt={`${authorName} profile`}
            />
          </div>
          <div className="right">
            <h4>Results:</h4>
            <div className={`optionContainer ${(votedNum === 0) ? "voted" : ""}`}>
              <div>
                Would you rather {optionOne.text}?
              </div>
              <div className="progressBar">
                <ProgressBar percentage={progressOption1} />
              </div>
              <div>
                {optionOneCount} out of {totalCount} votes
              </div>
              <div><p>Your vote</p></div>
            </div>
            <div className={`optionContainer ${(votedNum === 1) ? "voted" : ""}`}>
              <div>
                Would you rather {optionTwo.text}?
              </div>
              <div className="progressBar">
                <ProgressBar percentage={progressOption2} />
              </div>
              <div>
                {optionTwoCount} out of {totalCount} votes
              </div>
              <div><p>Your vote</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users }, { question }) => {

  const author = users[question.author];
  const votedNum = question.optionOne.votes.includes(authedUser) ? 0 
                    : question.optionTwo.votes.includes(authedUser) ? 1
                    : null;

  if (votedNum === null) {
    //TODO: Error handling
    alert("[PollCardResult] Error: Wrong votedNum!!");
  }

  return {
    authorName: author.name,
    avatarURL: author.avatarURL,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,
    votedNum: votedNum,
  };
};

export default connect(mapStateToProps)(PollCardResult);