

function NewQuestion() {
  return (
    <div className="newQuestionContainer">
      <h3>Create New Question</h3>
      <div>
        <div>Complete the question:</div>
        <div>Would you rather ...</div>
        <div>
          <input 
            type="text" 
            placeholder="Enter Option One Text Here"
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
          />
        </div>
        <div>
          <button onClick={() => {}}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default NewQuestion;