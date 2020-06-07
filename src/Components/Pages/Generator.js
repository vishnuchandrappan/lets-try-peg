import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React, { Component } from "react";
import { connect } from "react-redux";
import CardContainer from "../CardContainer";
import Menu from "../Menu";
class Generator extends Component {
  fetchData = () => {
    if (!(this.props.isStarted === false && this.props.completed === true)) {
      this.props.onRequest();
      setTimeout(() => {
        this.props.onFetch();
      }, 1000);
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="container">
        <Menu generate={this.fetchData} />
        <h1>Words to remember</h1>
        {this.props.data.length > 0 ? (
          <React.Fragment>
            <div className="btn-container jc-end">
              <button
                onClick={() => {
                  this.props.onStart(parseInt(this.props.limit));
                }}
              >
                Game
                <ChevronRightIcon />
              </button>
              <button
                className="btn"
                onClick={() => {
                  this.props.onToggle();
                }}
              >
                {this.props.show ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            <CardContainer />
          </React.Fragment>
        ) : (
          "No data found"
        )}
      </div>
    );
  }
}

function mapStateToProps({ data, game }) {
  return {
    data: data.data,
    limit: data.limit,
    show: data.show,
    isStarted: game.isStarted,
    completed: game.completed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequest: () => dispatch({ type: "REQUEST_DATA" }),
    onFetch: () => dispatch({ type: "FETCH_DATA" }),
    onChange: (data) => dispatch({ type: "SET_LIMIT", data }),
    onToggle: () => dispatch({ type: "TOGGLE_SHOW" }),
    onStart: (data) => dispatch({ type: "START_GAME", data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
