import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export default function UserProfile() {
  return (
    <div className="container user">
      <h1>John Doe</h1>
      <div className="user-data">
        <TableContainer component={Paper}>
          <Table>
            <TableRow>
              <TableCell align="center">Success Rate</TableCell>
              <TableCell align="center">80%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Games Played</TableCell>
              <TableCell align="center">19</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Fastest Guess</TableCell>
              <TableCell align="center">1 min 6 sec - 20 Words</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
