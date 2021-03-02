import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PollCard from "./PollCard";
import PollCardQuestion from "./PollCardQuestion";
import QuestionList from "./QuestionList";
import SignIn from "./SignIn";

class App extends Component {

  componentDidMount() {

    //TODO: Load questions, users, authedUser


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

export default App;
