import { connect } from 'react-redux';

function PollCard({ question, user }) {
  return (
    <div className="cardContainer">
      <div className="header">{user.name} asks:</div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={user.avatarURL} 
              alt={`${user.name} profile image`}
            />
          </div>
          <div className="right">
            <div>Would you rather</div>
            <div>{question.title}</div>
            <div>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {

  const question = questions ? questions[id] : null;
  const user = users ? users[question.author] : null;
  
  return {
    question,
    user,
  };
};

export default connect(mapStateToProps)(PollCard);