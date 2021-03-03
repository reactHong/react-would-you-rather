function LeaderBoardItem({ user }) {

  const {
    name,
    avatarURL,
    answers,
    questions,
  } = user;
  const answerCount = Object.values(answers).length;
  const questionCount = questions.length;

  return (
    <div className="boardItemContainer">
      <div className="innerContainer">
        <div className="left">
          <div className="imgContainer">
            <img src={avatarURL} />
          </div>
          <div></div>
        </div>
        <div className="middle">
          <h4>{name}</h4>
          <div>
            <div>Answered questions</div>
            <div>{answerCount}</div>
          </div>
          <div>
            <div>Created questions</div>
            <div>{questionCount}</div>
          </div>
        </div>
        <div className="right">
          <div className="table">
            <div>Score</div>
            <div>
              <div>{answerCount + questionCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardItem;
