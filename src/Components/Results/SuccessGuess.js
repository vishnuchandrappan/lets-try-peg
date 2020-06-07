import MoodIcon from "@material-ui/icons/Mood";
import React, { Component } from "react";
import { connect } from "react-redux";

class SuccessGuess extends Component {
  componentDidMount() {
    this.props.onCorrectGuess();
  }
  render() {
    return <MoodIcon />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onCorrectGuess: () => dispatch({ type: "CORRECT_GUESS" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessGuess);
