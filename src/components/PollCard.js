import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function PollCard({ question, user }) {
  return (
    <div className="cardContainer">
      <div className="header"><strong>{user.name} asks:</strong></div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={user.avatarURL} 
              alt={`${user.name} profile`}
            />
          </div>
          <div className="right">
            <div><strong>Would you rather</strong></div>
            <div>{`..${question.title}..`}</div>
            <div>
              <NavLink to={`/card/${question.id}`}>
                <button>View Poll</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ questions, users }, { id }) => {

  const question = questions ? questions[id] : null;
  const user = users ? users[question.author] : null;
  
  return {
    question,
    user,
  };
};

export default connect(mapStateToProps)(PollCard);