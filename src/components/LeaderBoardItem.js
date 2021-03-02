function LeaderBoardItem() {
  return (
    <div className="boardItemContainer">
      <div className="innerContainer">
        <div className="left">
          <div className="imgContainer">
            <img src="http://localhost:3000/profile4.jpg" />
          </div>
          <div></div>
        </div>
        <div className="middle">
          <h4>Sarah Edo</h4>
          <div>
            <div>Answered questions</div>
            <div>7</div>
          </div>
          <div>
            <div>Created questions</div>
            <div>3</div>
          </div>
        </div>
        <div className="right">
          <div className="table">
            <div>Score</div>
            <div>
              <div>10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardItem;
