import { Component } from "react";
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

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitData());
  }

  render() {
    const { authedUser, loadingBar } = this.props;
    const loading = loadingBar.default ? loadingBar.default : false;

    console.log("############ [App.render]");
    console.log("############ [App.render] authedUser:", authedUser);
    console.log("############ [App.render] loading:", loading);

    return (
      <BrowserRouter>
        <>
          <LoadingBar />
          <div className="App">
            <Nav />
            <div className="container">
              {authedUser && 
                <Switch>
                  <Route path="/" exact component={QuestionList} />
                  <Route path="/new" component={NewQuestion} /> 
                  <Route path="/board" component={LeaderBoard} />
                  <Route path="/card/:id" component={PollCardDetail} />
                  <Route component={Page404} />
                </Switch>
              }
              {loading && <div>Loading...</div>}
              {!authedUser && <SignIn />}
            </div>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser, loadingBar }) => ({
  authedUser,
  loadingBar,
});

export default connect(mapStateToProps)(App);
