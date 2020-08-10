import { TableBody, TableCell, TableRow } from "@material-ui/core";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import React from "react";
import { connect } from "react-redux";
import SuccessGuess from "./SuccessGuess";

function GenerateTable({
  data,
  responses,
  randomList,
  onComplete,
  points,
  gamePoints,
}) {
  const handleComplete = () => {
    if (gamePoints[gamePoints.length - 1].points === 0) {
      onComplete(points);
    }
  };
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
              <SuccessGuess />
            ) : (
              <SentimentDissatisfiedIcon />
            )}
          </TableCell>
          {index === data.length - 1 ? handleComplete() : ""}
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
    points: state.game.points,
    gamePoints: state.records.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewGame: () => dispatch({ type: "NEW_GAME" }),
    onComplete: (data) => dispatch({ type: "UPDATE_POINTS", data }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTable);
