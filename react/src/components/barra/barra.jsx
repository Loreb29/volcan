import styles from "./barra.module.css";
function Barra() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navbar_brand} href="#">
        <div className={styles.navbar_logo}>🎓</div>
        <span className={styles.navbar_name}>Sistema Académico</span>
      </a>
      <span className={styles.navbar_title}>Cursos</span>
      <div className={styles.navbar_user}>
        <div className={styles.user_avatar}>AD</div>
        <span className={styles.user_name}>Admin</span>
        <span className={styles.user_chevron}>▾</span>
      </div>
    </nav>
  );
}

export default Barra;
