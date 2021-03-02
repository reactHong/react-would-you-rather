import { connect } from 'react-redux';

function PollCard({ id }) {
  return (
    <div className="cardContainer">
      <div className="header"> asks:</div>
      <div className="body">
        <div className="contentContainer">
          <div className="left">
            <img 
              src={"http://localhost:3000/profile1.jpg"} 
              alt="Profile Image"
            />
          </div>
          <div className="right">
            <div>Would you rather</div>
            <div>..a..</div>
            <div>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {

  
  return {};
};

export default connect(mapStateToProps)(PollCard);