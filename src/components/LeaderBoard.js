import { connect } from 'react-redux';
import { useLoading } from "@agney/react-loading";
import LeaderBoardItem from './LeaderBoardItem';
import { loadingProps } from '../utils/helpers';

function LeaderBoard({ users, loadingBar }) {
  const { containerProps, indicatorEl } = useLoading(loadingProps);
  const loading = loadingBar.default ? loadingBar.default : false;
  const sortedUsers = Object.values(users);

  sortedUsers.sort((user1, user2) => {
    const user1Score = Object.values(user1.answers).length 
                      + user1.questions.length;
    const user2Score = Object.values(user2.answers).length 
                      + user2.questions.length;
    return user2Score - user1Score;
  });

  return (
    <div className="boardContainer">
      {loading
        ? <section {...containerProps}>{indicatorEl}</section>
        : sortedUsers.map((user, index) => (
            <LeaderBoardItem key={user.id} user={user} index={index} />
          ))
      }
    </div>
  );
}

const mapStateToProps = ({ users, loadingBar }) => ({
  users,
  loadingBar,
});

export default connect(mapStateToProps)(LeaderBoard);