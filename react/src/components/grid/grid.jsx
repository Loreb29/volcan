import "./grid.module.css";
import { useEffect } from "react";
import Barra from "../barra/barra.jsx";
function Grid() {
  const numrow = 30;
  const numcolumn = 30;
  const row = [];
  const column = [];
  let vals;
  let valo;
  column.push(<th></th>);
  for (var i = 0; i < numcolumn; i++) {
    column.push(<th>Materia</th>);
  }
  for (var y = 0; y < numrow; y++) {
    let vals = [];
    for (var i = 0; i < numcolumn; i++) {
      vals.push(
        <td>
          {i},{y}
        </td>,
      );
    }
    row.push(
      <tr>
        <td>Estudiante</td>
        {vals}
      </tr>,
    );
  }
  return (
    <body>
      <Barra />
      <main>
        <table>
          <thead>
            <tr>{column}</tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </main>
    </body>
  );
}

export default Grid;
