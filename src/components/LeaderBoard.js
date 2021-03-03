import { connect } from 'react-redux';
import LeaderBoardItem from './LeaderBoardItem';


function LeaderBoard({ users }) {
  return (
    <>
      {Object.values(users).map(user => (
        <LeaderBoardItem key={user.id} user={user} />
      ))}
    </>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(LeaderBoard);