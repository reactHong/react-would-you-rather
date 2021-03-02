import { NavLink } from 'react-router-dom';


function Nav() {

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
      <li>UserName</li>
      <li>Logout</li>
    </ul>
  );
}

export default Nav;