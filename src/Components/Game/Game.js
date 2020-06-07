import AssessmentIcon from "@material-ui/icons/Assessment";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Game({
  currentItem,
  randomList,
  onDone,
  onEnd,
  onComplete,
  completed,
  limit,
}) {
  if (parseInt(limit) === parseInt(currentItem)) {
    onComplete();
  }
  const [value, setValue] = useState("");
  if (completed) {
    return (
      <div className="btn-container full-page">
        <span>Completed</span>
        <Link to="/results" className="button">
          See Results <AssessmentIcon />
        </Link>
      </div>
    );
  }
  return (
    <div className="game-container">
      {parseInt(limit) !== parseInt(currentItem) ? (
        <form
          className="form-group"
          onSubmit={(e) => {
            e.preventDefault();
            onDone(value);
            setValue("");
          }}
        >
          <label>{randomList[currentItem] + 1}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Your Guess..."
          />
        </form>
      ) : (
        ""
      )}

      <div className="btn-container">
        <button
          onClick={() => {
            onDone(value);
            setValue("");
          }}
        >
          Done &nbsp;
          <CheckCircleOutlineIcon />
        </button>
        <button
          onClick={() => {
            onEnd();
          }}
        >
          End &nbsp;
          <HighlightOffIcon />
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentItem: state.game.currentItem,
    randomList: state.game.randomList,
    completed: state.game.completed,
    limit: state.data.limit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDone: (data) => dispatch({ type: "NEXT_ITEM", data }),
    onEnd: () => dispatch({ type: "END_GAME" }),
    onComplete: () => dispatch({ type: "COMPLETE_GAME" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
