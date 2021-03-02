
function PollCardResult() {

  return (
    <div className="cardContainer">
      <div className="header">Asked by Tyler McGinnis</div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={"http://localhost:3000/profile1.jpg"} 
              alt="Profile Image"
            />
          </div>
          <div className="right">
            <h4>Results:</h4>
            <div className="optionContainer voted">
              <div>
                <strong>Would you rather find $50 yourself?</strong>
              </div>
              <div>[Progress Bar]</div>
              <div>
                <strong>2 out of 3 votes</strong>
              </div>
              <div><p>Your vote</p></div>
            </div>
            <div className="optionContainer">
              <div>
                <strong>Would you rather have your best friend find $500?</strong>
              </div>
              <div>[Progress Bar]</div>
              <div>
                <strong>1 out of 3 votes</strong>
              </div>
              <div><p>Your vote</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollCardResult;