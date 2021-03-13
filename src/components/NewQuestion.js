import { connect } from "react-redux";
import { useReducer, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const reducer = (state = {}, action) => {
  return {
    ...state,
    [action.name]: action.value,
  }
};

function NewQuestion(props) {

  const [toHome, setToHome] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    optionOneText: "",
    optionTwoText: "",
  });
  const { title, optionOneText, optionTwoText } = state;

  const handleChange = (e) => {
    dispatch(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newQuestion = {
      author: props.authedUser.id,
      title,
      optionOneText,
      optionTwoText,
    };
    props.dispatch(handleAddQuestion(newQuestion, () => {
      setToHome(true);
    }));
  };

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
            name="title"
            placeholder="Enter the title"
            onChange={handleChange}
          />
          <strong>?</strong>
        </div>
        <div>
          <input 
            type="text" 
            name="optionOneText"
            placeholder="Enter Option One Text Here"
            onChange={handleChange}
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
            name="optionTwoText"
            placeholder="Enter Option Two Text Here"
            onChange={handleChange}
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