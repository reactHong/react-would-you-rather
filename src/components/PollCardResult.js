import { connect } from 'react-redux';

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
              <div>[Progress Bar]</div>
              <div>
                {optionOneCount} out of {totalCount} votes
              </div>
              <div><p>Your vote</p></div>
            </div>
            <div className={`optionContainer ${(votedNum === 1) ? "voted" : ""}`}>
              <div>
                Would you rather {optionTwo.text}?
              </div>
              <div>[Progress Bar]</div>
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