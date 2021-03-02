import { connect } from "react-redux";
import PollCard from "./PollCard";

function QuestionList({ questions }) {
  return (
    <div className="listContainer">
      <div className="tabContainer">
        <div className="selected">Unanswered Questions</div>
        <div>Answered Questions</div>
      </div>
      <div className="cardsContainer">
        {Object.values(questions).map(question => (
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
  questions: state.questions,
});

export default connect(mapStateToProps)(QuestionList);