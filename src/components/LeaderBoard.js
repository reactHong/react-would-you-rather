import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem';


function LeaderBoard({ users }) {

  const sortedUsers = Object.values(users);

  sortedUsers.sort((user1, user2) => {
    const user1Score = Object.values(user1.answers).length 
                      + user1.questions.length;
    const user2Score = Object.values(user2.answers).length 
                      + user2.questions.length;
    return user2Score - user1Score;
  });

  return (
    <>
      {sortedUsers.map(user => (
        <LeaderBoardItem key={user.id} user={user} />
      ))}
    </>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(LeaderBoard);