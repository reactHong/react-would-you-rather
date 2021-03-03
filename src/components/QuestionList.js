import { useState } from "react";
import { connect } from "react-redux";
import { setTabIndex } from "../actions/shared";
import PollCard from "./PollCard";

function QuestionList(props) {

  const { 
    authedUser, 
    questions, 
    tabIndex,
    dispatch,
  } = props;

  const handleTabIndex = (index) => {
    dispatch(setTabIndex(index));
  };

  const filteredQuestions = Object.values(questions).filter(question => {
    const answered1 = question.optionOne.votes.includes(authedUser);
    const answered2 = question.optionTwo.votes.includes(authedUser);

    switch (tabIndex) {
      case 0:   return !answered1 && !answered2;
      case 1:   return answered1 || answered2;
      default:  return !answered1 && !answered2;
    }
  });

  return (
    <div className="listContainer">
      <div className="tabContainer">
        <div 
          className={(!tabIndex) ? "selected" : ""}
          onClick={() => handleTabIndex(0)}
        >
          Unanswered Questions
        </div>
        <div
          className={(tabIndex === 1) ? "selected" : ""}
          onClick={() => handleTabIndex(1)}
        >
          Answered Questions
        </div>
      </div>
      <div className="cardsContainer">
        {filteredQuestions.map(question => (
          <PollCard 
            key={question.id} 
            id={question.id} 
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  tabIndex: state.preference.qListTabIndex,
});

export default connect(mapStateToProps)(QuestionList);