import styles from "./barra.module.css";
import { LogoutCall } from "../calls";
import { useNavigate } from "react-router";
function Barra() {
  const mutation = LogoutCall("http://26.216.97.134:5678/api/v1/logout");
  const navigate = useNavigate();
  const click = () => {
    mutation.mutate;
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <nav className={styles.navbar}>
      <a className={styles.navbar_brand} href="#">
        <div className={styles.navbar_logo}>🎓</div>
        <span className={styles.navbar_name}>Sistema Académico</span>
      </a>
      <span className={styles.navbar_title}>Cursos</span>
      <div className={styles.navbar_user}>
        <div className={styles.user_avatar}>AD</div>
        <span onClick={click} className={styles.user_name}>
          Admin
        </span>
        <span className={styles.user_chevron}>▾</span>
      </div>
    </nav>
  );
}

export default Barra;
