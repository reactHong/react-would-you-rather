import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PollCardDetail from "./PollCardDetail";
import QuestionList from "./QuestionList";
import SignIn from "./SignIn";

import { handleInitData } from "../actions/shared";
import * as API from "../_DATA";



class App extends Component {

  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.dispatch(handleInitData(() => {
      this.setState({
        loading: false,
      })
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div className="container">
            {this.state.loading === true 
              ? <div>Loading...</div> 
              : <>
                  <Route path="/" exact component={QuestionList} />
                  <Route path="/new" component={NewQuestion} /> 
                  <Route path="/board" component={LeaderBoard} />
                  <Route path="/card/:id" component={PollCardDetail} />
                  {/* <SignIn /> */}
                </>
            }
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(App);
