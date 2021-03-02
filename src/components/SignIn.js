
function SignIn() {

  return (
    <div className="signInContainer">
      <div>
        <h4>Welcome to the Would You Rather App!</h4>
        <div>Please sign in to continue</div>
      </div>
      <div>
        <h3>Sign in</h3>
        <div>
          <select>
            <option>Sarah Edo</option>
            <option>Tyler McGinnis</option>
            <option>John Doe</option>
          </select>
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;