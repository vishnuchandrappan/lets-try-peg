import React, { Component } from "react";
import { connect } from "react-redux";
const Time = ({ seconds }) => {
  let time = seconds;
  let hrs = Math.floor(time / 3600);
  time = time - hrs * 3600;
  let min = Math.floor(time / 60);
  let sec = time - min * 60;
  if (seconds > 59) {
    if (seconds > 3599) {
      return `${hrs}:${min}:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  } else {
    return sec;
  }
};

class Timer extends Component {
  state = {
    seconds: 0,
    isGenerate: false,
  };

  tick() {
    this.setState({
      seconds: parseInt((Date.now() - this.props.time) / 1000) + 1,
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return this.props.show ? (
      <div className="timer">
        <h1>
          <Time seconds={this.state.seconds} />
        </h1>
        <div className="btn-container">
          <button
            onClick={() => {
              this.props.onRequest();
              setTimeout(() => {
                this.props.onFetch();
              }, 1000);
            }}
          >
            Reset
          </button>
        </div>
        <span>Resetting timer will generate a new set of words</span>
      </div>
    ) : (
      ""
    );
  }
}

function mapStateToProps({ data }) {
  return {
    time: data.time,
    isLoading: data.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequest: () => dispatch({ type: "REQUEST_DATA" }),
    onFetch: () => dispatch({ type: "FETCH_DATA" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
