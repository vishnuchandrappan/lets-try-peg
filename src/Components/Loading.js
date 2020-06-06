import React from "react";
import { connect } from "react-redux";
export function Loading() {
  return (
    <div className="loading">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

function isLoading({ isFetching }) {
  return isFetching === 1 ? <Loading /> : "";
}

function mapStateToProps(state) {
  return {
    isFetching: state.data.isFetching,
  };
}

export default connect(mapStateToProps)(isLoading);
