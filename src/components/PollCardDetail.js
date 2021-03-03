import { connect } from "react-redux";
import PollCardQuestion from "./PollCardQuestion";
import PollCardResult from "./PollCardResult";

function PollCardDetail({ question, answered }) {
  return(
    <>
      {answered
        ? <PollCardResult question={question} />
        : <PollCardQuestion question={question} />
      }
    </>
  );
}

const mapStateToProps = ({ authedUser, questions }, props) => {

  const { id } = props.match.params;
  const question = questions[id];
  const answered = question.optionOne.votes.includes(authedUser) 
                || question.optionTwo.votes.includes(authedUser);
  return {
    question,
    answered,
  }
};

export default connect(mapStateToProps)(PollCardDetail);