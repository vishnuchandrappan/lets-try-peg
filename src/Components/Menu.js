import React from "react";
import { connect } from "react-redux";

function Menu({ limit, generate, onChange }) {
  return (
    <div className="menu">
      <form
        className="form-group"
        onSubmit={(e) => {
          e.preventDefault();
          generate();
        }}
      >
        <label>Word Limit</label>
        <input
          type="number"
          name="limit"
          placeholder="Type a number..."
          value={limit}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </form>
      <div className="btn-container">
        <button
          onClick={() => {
            generate();
          }}
        >
          Generate !
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({data}) {
  return {
    limit: data.limit,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (data) => dispatch({ type: "SET_LIMIT", data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
