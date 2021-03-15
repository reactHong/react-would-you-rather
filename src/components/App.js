import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PollCardDetail from "./PollCardDetail";
import QuestionList from "./QuestionList";
import SignIn from "./SignIn";
import Page404 from "./Page404";
import { handleInitData } from "../actions/shared";
import { isEmptyObj } from "../utils/helpers";

function App(props) {
  const { authedUser } = props;
  
  useEffect(() => {
    props.dispatch(handleInitData());
  }, [props.dispatch]);

  const component = (isEmptyObj(authedUser))
    ? <SignIn />
    : <Switch>
        <Route path="/" exact component={QuestionList} />
        <Route path="/new" component={NewQuestion} /> 
        <Route path="/board" component={LeaderBoard} />
        <Route path="/card/:id" component={PollCardDetail} />
        <Route component={Page404} />
      </Switch>
  
  return (
    <BrowserRouter>
      <div className="App">
        <LoadingBar />
        <Nav />
        <div className="container">{component}</div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
