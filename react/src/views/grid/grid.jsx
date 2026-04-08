import styles from "./grid.module.css";
import { useEffect } from "react";
import Barra from "../../components/barra/barra.jsx";
function Grid() {
  const numrow = 30;
  const numcolumn = 30;
  const row = [];
  const column = [];
  let vals;
  let valo;
  column.push(<th className={styles.thGrid}></th>);
  for (var i = 0; i < numcolumn; i++) {
    column.push(<th>Materia</th>);
  }
  for (var y = 0; y < numrow; y++) {
    let vals = [];
    for (var i = 0; i < numcolumn; i++) {
      vals.push(
        <td className={styles.tdGrid}>
          {i},{y}
        </td>,
      );
    }
    row.push(
      <tr className={styles.trGrid}>
        <td className={styles.tdGrid}>Estudiante</td>
        {vals}
      </tr>,
    );
  }
  return (
    <div className={styles.bodyGrid}>
      <Barra />
      <main className={styles.mainGrid}>
        <table className={styles.tableGrid}>
          <thead className={styles.theadGrid}>
            <tr className={styles.trGrid}>{column}</tr>
          </thead>
          <tbody className={styles.tbodyGrid}>{row}</tbody>
        </table>
      </main>
    </div>
  );
}

export default Grid;
