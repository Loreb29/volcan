import "./App.css";
function Cursos() {
  const elem = [];
  let iper;
  for (var i = 0; i < 4; i++) {
    iper = (i * 20).toString() + "%";
    elem.push(
      <div className="course-card">
        <div className="course-thumbnail">Imagen</div>
        <div className="course-body">
          <div className="course-number">{i}</div>
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
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <div className="navbar-logo">🎓</div>
          <span className="navbar-name">Sistema Académico</span>
        </a>
        <span className="navbar-title">Cursos</span>
        <div className="navbar-user">
          <div className="user-avatar">AD</div>
          <span className="user-name">Admin</span>
          <span className="user-chevron">▾</span>
        </div>
      </nav>
      <main>
        <div className="courses-grid">{elem}</div>
      </main>
    </body>
  );
}
export default Cursos;
