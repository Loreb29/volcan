import "./cursos.module.css";
import Barra from "../barra/barra.jsx";
function Cursos() {
  const elem = [];
  let iper;
  for (var i = 6; i < 12; i++) {
    iper = (i * 20).toString() + "%";
    //Aplication - api
    //
    elem.push(
      <div className="course-card" style={{ height: "340px" }}>
        <div className="course-body">
          <div className="course-number" style={{ fontSize: "160px" }}>
            {i}
          </div>
          <p></p>
          <div className="course-label">Progreso</div>
          <div className="progress-row">
            <div className="progress-bar-wrap">
              <div className="progress-bar-fill" style={{ width: iper }}></div>
            </div>
            <span className="progress-pct">{iper}</span>
          </div>
        </div>
      </div>,
    );
  }
  return (
    <body>
      <Barra />
      <main>
        <div className="courses-grid">{elem}</div>
      </main>
    </body>
  );
}
export default Cursos;
