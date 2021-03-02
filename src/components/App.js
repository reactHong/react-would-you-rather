import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PollCard from "./PollCard";
import PollCardQuestion from "./PollCardQuestion";
import QuestionList from "./QuestionList";
import SignIn from "./SignIn";

import { handleInitData } from "../actions/shared";
import * as API from "../_DATA";



class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitData());
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div className="container">
            <Route path="/" exact component={QuestionList} />
            <Route path="/new" component={NewQuestion} />
            <Route path="/board" component={LeaderBoard} />
            <Route path="/card/:id" component={PollCardQuestion} />
            {/* <SignIn /> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(App);
