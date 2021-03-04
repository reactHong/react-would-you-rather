import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../actions/authedUser';

function Nav({ userName, avatarURL, dispatch }) {

  console.log("############ [Nav.render] ");

  const handleSignout = () => {
    dispatch(signOut());
  };

  return (
    <ul className="nav">
      <li>
        <NavLink to="/" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/new" activeClassName="active">New Question</NavLink>
      </li>
      <li>
        <NavLink to="/board" activeClassName="active">LeaderBoard</NavLink>
      </li>
      {userName && (
        <>
          <li>{userName}</li>
          <li
            className="signout"
            onClick={handleSignout}
          >Sign Out</li>
        </>
      )}
    </ul>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  
  const user = users[authedUser];

  return {
    userName: user ? user.name : "",
    avatarURL: user? user.avatarURL : "",
  }
};

export default connect(mapStateToProps)(Nav);