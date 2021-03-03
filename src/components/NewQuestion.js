import { connect } from "react-redux";
import { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

function NewQuestion(props) {

  const [toHome, setToHome] = useState(false);
  const titleRef = useRef();
  const optionOneRef = useRef();
  const optionTwoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newQuestion = {
      author: props.authedUser,
      title: titleRef.current.value,
      optionOneText: optionOneRef.current.value,
      optionTwoText: optionTwoRef.current.value,
    };
    props.dispatch(handleAddQuestion(newQuestion));

    setToHome(true);
  };

  console.log("[NewQuestion] render");

  if (toHome) {
    return <Redirect to="/" />
  }

  return (
    <div className="newQuestionContainer">
      <h3>Create New Question</h3>
      <div>
        <div>Complete the question:</div>
        <div>
          <strong>Would you rather</strong>
          <input 
            type="text"
            placeholder="Enter the title"
            ref={titleRef}
          />
          <strong>?</strong>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Enter Option One Text Here"
            ref={optionOneRef}
          />
        </div>
        <div className="divider">
          <div></div>
          <div>OR</div>
          <div></div>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Enter Option Two Text Here"
            ref={optionTwoRef}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({ 
  authedUser, 
});

export default connect(mapStateToProps)(NewQuestion);