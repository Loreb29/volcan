import styles from "./grid.module.css";
import Barra from "../../components/barra/barra.jsx";
import { useParams } from "react-router";

//GET notas
function Grid() {
  let { cursoId } = useParams();
  console.log(cursoId);
  const numrow = 30;
  const numcolumn = 30;
  const row = [];
  const column = [];
  let vals;
  let valo;
  column.push(<th key="ColumS" className={styles.thGrid}></th>);
  for (var i = 0; i < numcolumn; i++) {
    column.push(<th key={"Colum" + i.toString()}>Materia</th>);
  }
  for (var y = 0; y < numrow; y++) {
    let vals = [];
    for (var i = 0; i < numcolumn; i++) {
      vals.push(
        <td key={"CVal" + i.toString() + y.toString} className={styles.tdGrid}>
          {i},{y}
        </td>,
      );
    }
    row.push(
      <tr key={"Row" + y.toString()} className={styles.trGrid}>
        <td key={"RVal" + y.toString()} className={styles.tdGrid}>
          Estudiante
        </td>
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
