import { Component } from "react";
import Nav from "./Nav";
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
          <QuestionList />
          {/* <PollCardQuestion /> */}
        </div>
      </div>
    );
  }
}

export default App;
