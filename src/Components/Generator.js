import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import React, { Component } from "react";
import { getData } from "../Resources/data";
import CardContainer from "./CardContainer";
import Loading from "./Loading";
import Menu from "./Menu";
class Generator extends Component {
  state = {
    data: [],
    limit: 12,
    isFetching: 0,
    show: true,
  };

  fetchData = () => {
    this.setState({
      isFetching: 1,
    });
    setTimeout(() => {
      this.setState({
        data: getData(this.state.limit),
        isFetching: 0,
      });
    }, 1000);
  };

  componentDidMount() {
    this.fetchData();
  }

  handleChange = (limit) => {
    this.setState({
      limit,
    });
  };
  render() {
    return (
      <div className="container">
        <Menu
          limit={this.state.limit}
          onChange={this.handleChange}
          generate={this.fetchData}
        />
        <Loading isLoading={this.state.isFetching} />
        <h1>Words to remember</h1>
        {this.state.data.length > 0 ? (
          <>
            <div className="btn-container jc-end">
              <button
                className="btn"
                onClick={() => {
                  this.setState({
                    show: !this.state.show,
                  });
                }}
              >
                {this.state.show ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>
            <CardContainer data={this.state.data} show={this.state.show} />
          </>
        ) : (
          "No data found"
        )}
      </div>
    );
  }
}

export default Generator;
/**
 *
 * https://random-word-api.herokuapp.com/word?number=12
 */
