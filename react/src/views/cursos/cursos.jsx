import styles from "./cursos.module.css";
import Barra from "../../components/barra/barra.jsx";
import { Get } from "../../components/calls.jsx";
import Cargador from "../../components/carga/carga.jsx";
import ErrorScreen from "../../components/error/error.jsx";
import { useNavigate } from "react-router";
function Cursos() {
  const elem = [];
  let iper;
  let datos = 0;
  let QueryResInsert;
  const navigate = useNavigate();
  const handleClick = (curso) => {
    navigate("/grid/" + Object.values(curso)[0]);
  };
  //console.log(sessionStorage.getItem("ID_Token"));
  //GET cursos, prop con el curso elegido
  //https://time.now/developer/api/timezone/Europe/London
  //http://26.216.97.134:5678/api/v1/courses

  const { data, isLoading, isError, isSuccess, error } = Get(
    "http://26.216.97.134:5678/api/v1/courses",
  );
  if (isLoading) {
    QueryResInsert = <Cargador />;
  }
  if (isError) {
    QueryResInsert = <ErrorScreen message={error.message} />;
  }
  if (isSuccess) {
    //console.log(data);

    datos = Object.values(data.data).length;
    for (let i = 0; i < datos; i++) {
      iper = Object.values(data.data[i])[4] + "%";
      let curso = Object.values(data.data[i])[1];
      elem.push(
        <div
          //aqui se redirecciona a cada uno
          key={i}
          onClick={() => handleClick({ curso })}
          className={styles.course_card}
          style={{ height: "340px" }}
        >
          <div className={styles.course_body}>
            <div className={styles.course_number}>{curso}</div>
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
  }

  return (
    <div className={styles.bodyCurso}>
      {QueryResInsert}
      <Barra />
      <main className={styles.mainCurso}>
        <div className={styles.courses_grid}>{elem}</div>
      </main>
    </div>
  );
}
export default Cursos;
