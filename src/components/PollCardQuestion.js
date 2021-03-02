


function PollCardQuestion() {
  return (
    <div className="cardContainer">
      <div className="header">Sarah Edo asks:</div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={"http://localhost:3000/profile1.jpg"} 
              alt="Profile Image"
            />
          </div>
          <div className="right">
            <h4>Would you rather</h4>
            <div>
              <input type="radio" name="select" />be a front-end developer
            </div>
            <div>
              <input type="radio" name="select" />be a back-end developer
            </div>
            <div>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PollCardQuestion;