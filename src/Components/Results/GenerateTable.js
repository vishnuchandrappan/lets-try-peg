import { TableBody, TableCell, TableRow } from "@material-ui/core";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import React from "react";
import { connect } from "react-redux";
import SuccessGuess from "./SuccessGuess";

function GenerateTable({ data, responses, randomList, onCorrectGuess }) {
  return (
    <TableBody>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell align="center">{index + 1}</TableCell>
          <TableCell align="center">{item}</TableCell>
          <TableCell align="center">
            {responses[randomList.indexOf(index)]}
          </TableCell>
          <TableCell align="center">
            {item === responses[randomList.indexOf(index)] ? (
              <SuccessGuess/>
            ) : (
              <SentimentDissatisfiedIcon />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
function mapStateToProps(state) {
  return {
    data: state.data.data,
    responses: state.game.data,
    randomList: state.game.randomList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewGame: () => dispatch({ type: "NEW_GAME" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTable);
