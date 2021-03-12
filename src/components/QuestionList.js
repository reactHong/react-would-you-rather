import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { setTabIndex } from "../actions/shared";
import PollCard from "./PollCard";
import { useLoading } from '@agney/react-loading';

function QuestionList(props) {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    loaderProps: {
      style: { color: '#39C4B0' }
    },
  });

  const { 
    authedUser, 
    questions, 
    tabIndex,
    loadingBar,
    dispatch,
  } = props;
  const loading = loadingBar.default ? loadingBar.default : false;
  const filteredQuestions = Object.values(questions).filter(question => {
    const answered1 = question.optionOne.votes.includes(authedUser);
    const answered2 = question.optionTwo.votes.includes(authedUser);

    switch (tabIndex) {
      case 0:   return !answered1 && !answered2;
      case 1:   return answered1 || answered2;
      case 2:   return question.author === authedUser;
      default:  return !answered1 && !answered2;
    }
  });
  const sortedQuestions = filteredQuestions.sort((q1, q2) => q2.timestamp - q1.timestamp);

  const handleTabIndex = (index) => {
    dispatch(setTabIndex(index));
  };

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
        <div
          className={(tabIndex === 2) ? "selected" : ""}
          onClick={() => handleTabIndex(2)}
        >
          My Questions
        </div>
      </div>
      <div className="cardsContainer">
        {sortedQuestions.length > 0
          ? sortedQuestions.map(question => (
              <PollCard 
                key={question.id} 
                id={question.id} 
              />
            ))
          : <div className="noCardsContainer">
              {loading 
                ? <section {...containerProps}>{indicatorEl}</section>
                : <>
                    <div>There is no questions.</div>
                    <div><NavLink to="/new">Please add a new question.</NavLink></div>
                  </>
              }
            </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
  tabIndex: state.preference.qListTabIndex,
  loadingBar: state.loadingBar,
});

export default connect(mapStateToProps)(QuestionList);