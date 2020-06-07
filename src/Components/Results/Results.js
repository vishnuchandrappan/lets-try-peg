import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import GenerateTable from "./GenerateTable";
import Menu from "./Menu";

function Results({ completed }) {
  if (!completed) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <h1>Results</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Actual</TableCell>
              <TableCell align="center">Your's</TableCell>
              <TableCell align="center">
                <FavoriteIcon />
              </TableCell>
            </TableRow>
          </TableHead>
          <GenerateTable />
        </Table>
      </TableContainer>
      <Menu />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    completed: state.game.completed,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewGame: () => dispatch({ type: "NEW_GAME" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
