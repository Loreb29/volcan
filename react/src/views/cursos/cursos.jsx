import styles from "./cursos.module.css";
import Barra from "../../components/barra/barra.jsx";
function Cursos() {
  const elem = [];
  let iper;
  for (var i = 6; i < 12; i++) {
    iper = (i * 20).toString() + "%";
    //Aplication - api
    //
    elem.push(
      <div className={styles.course_card} style={{ height: "340px" }}>
        <div className={styles.course_body}>
          <div className={styles.course_number} style={{ fontSize: "160px" }}>
            {i}
          </div>
          <p></p>
          <div className={styles.course_label}>Progreso</div>
          <div className={styles.progress_row}>
            <div className={styles.progress_bar_wrap}>
              <div
                className={styles.progress_bar_fill}
                style={{ width: iper }}
              ></div>
            </div>
            <span className={styles.progress_pct}>{iper}</span>
          </div>
        </div>
      </div>,
    );
  }
  return (
    <div className={styles.bodyCurso}>
      <Barra />
      <main className={styles.mainCurso}>
        <div className={styles.courses_grid}>{elem}</div>
      </main>
    </div>
  );
}
export default Cursos;
