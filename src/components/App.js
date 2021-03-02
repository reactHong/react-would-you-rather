import { Component } from "react";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PollCard from "./PollCard";
import PollCardQuestion from "./PollCardQuestion";
import QuestionList from "./QuestionList";

class App extends Component {

  componentDidMount() {

    //TODO: Load questions, users, authedUser


  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          {/* <QuestionList /> */}
          {/* <PollCardQuestion /> */}
          {/* <NewQuestion /> */}
          <LeaderBoard />
        </div>
      </div>
    );
  }
}

export default App;
