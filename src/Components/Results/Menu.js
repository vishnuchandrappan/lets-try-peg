import React from "react";
import { connect } from "react-redux";
function Menu({ points, limit, onNewGame, onComplete }) {
  return (
    <div className="status">
      <h1>
        {points}/{limit}
      </h1>
      <h3>
        {points < limit
          ? "Keep Working... You'll achieve it One day"
          : "Excellent!"}
      </h3>
      <div className="btn-container">
        <button
          onClick={() => {
            onNewGame();
          }}
        >
          Do it Again
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    points: state.game.points,
    limit: state.data.limit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewGame: () => dispatch({ type: "NEW_GAME" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
