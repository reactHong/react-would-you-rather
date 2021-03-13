import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../actions/authedUser';
import { isEmptyObj } from '../utils/helpers';

function Nav({ authedUser, dispatch }) {

  console.log("############ [Nav.render] ");

  const handleSignout = () => {
    dispatch(signOut());
  };

  return (
    <ul className="nav">
      <div className="leftContainer">
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">New Question</NavLink>
        </li>
        <li>
          <NavLink to="/board" activeClassName="active">LeaderBoard</NavLink>
        </li>
      </div>
      
      {!isEmptyObj(authedUser) && (
        <div className="rightContainer">
          <li className="user">
            <div>
              <img src={authedUser.avatarURL} alt={`${authedUser.name} profile`} />&nbsp;
              Hello,&nbsp;<strong>{authedUser.name}</strong>
            </div>
          </li>
          <li
            className="signout"
            onClick={handleSignout}
          >Sign Out</li>
        </div>
      )}
    </ul>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Nav);