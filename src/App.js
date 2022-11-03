import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, height, weight) {
  return { name, height, weight };
}

const rows = [
  createData("Pikachu", 1.4, 14),
  createData("Eevee", 1, 14),
  createData("Charizard", 55.7, 200),
  createData("Snorlax", 6.11, 1014),
  createData("Lucario", 3.11, 119),
];
console.log(rows);

export default function App() {
  return (
    <div style={{ padding: "50px" }}>
      <div className="App-header"> Simple react-query example without API </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Pokemon's Name</TableCell>
              <TableCell align="right">Height&nbsp;(')</TableCell>
              <TableCell align="right">Weight&nbsp;(lb)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
