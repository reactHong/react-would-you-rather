import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../actions/authedUser';

function SignIn({ users, dispatch }) {

  const [userId, setUserId] = useState("");
  const [toHome, setToHome] = useState(false);

  const handleChangeUser = (e) => {
    (e.target.selectedIndex === 0)
      ? setUserId("")
      : setUserId(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const user = users[userId];
    if (user) {
      dispatch(signIn(user));
      setToHome(true);
    }
  };

  if (toHome) {
    return <Redirect to="/" />
  }

  const usersArray = Object.values(users);
  const optionUsers = usersArray.map(user => (
    <option 
      key={user.id} 
      value={user.id}
    >{user.name}</option>
  ));

  return (
    <div className="signInContainer">
      <div>
        <h4>Welcome to the Would You Rather App!</h4>
        <div>Please sign in to continue</div>
      </div>
      <div>
        <h3>Sign in</h3>
        <div>
          {usersArray.length === 0 
            ? <select>
                <option>Loading...</option>
              </select>
            : <select onChange={handleChangeUser}>
                <option>Select User</option> 
                {optionUsers}
              </select>
          }
        </div>
        <div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(SignIn);