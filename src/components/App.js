import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PollCardDetail from "./PollCardDetail";
import QuestionList from "./QuestionList";
import SignIn from "./SignIn";

import { handleInitData } from "../actions/shared";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitData());
  }

  render() {

    console.log("############ [App.render]");
    console.log("############ [App.render] authedUser:", this.props.authedUser);

    return (
      <BrowserRouter>
        <>
          <LoadingBar />
          <div className="App">
            <Nav />
            <div className="container">
              {this.props.authedUser 
              ? <>
                  <Route path="/" exact component={QuestionList} />
                  <Route path="/new" component={NewQuestion} /> 
                  <Route path="/board" component={LeaderBoard} />
                  <Route path="/card/:id" component={PollCardDetail} />
                </>
              : <SignIn />}
            </div>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
