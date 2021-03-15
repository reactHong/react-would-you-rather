import { IconContext } from 'react-icons/lib';
import { RiMedal2Fill } from 'react-icons/ri';

function LeaderBoardItem({ user, index }) {

  const {
    name,
    avatarURL,
    answers,
    questions,
  } = user;
  const answerCount = Object.values(answers).length;
  const questionCount = questions.length;
  const medalsColor = ['gold', 'silver', 'brown'];

  return (
    <div className="boardItemContainer">
      <div className="innerContainer">
        <div className="left">
          <div className="imgContainer">
            <img src={avatarURL} alt={`${name} profile`}/>
          </div>
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
      <IconContext.Provider value={{ color: medalsColor[index] }}>
        <div className="medalContainer">
        </div>
        <div className="medal">
            <RiMedal2Fill />
          </div>
      </IconContext.Provider>
    </div>
  );
}

export default LeaderBoardItem;
