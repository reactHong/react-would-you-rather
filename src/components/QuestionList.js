import PollCard from "./PollCard";

function QuestionList() {

  return (
    <div className="listContainer">
      <div className="tabContainer">
        <div className="selected">Unanswered Questions</div>
        <div>Answered Questions</div>
      </div>
      <div className="cardsContainer">
        <PollCard />
        <PollCard />
      </div>
    </div>
  );
}

export default QuestionList;