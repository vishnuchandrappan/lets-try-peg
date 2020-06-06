import React from "react";

export default function Menu({ limit, generate, onChange }) {
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
