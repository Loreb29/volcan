import styles from "./login.module.css";
function Login() {
  return (
    <div className={styles.bodyLogin}>
      <div className={styles.login_container}>
        <div className={styles.login_header}>
          <div className={styles.school_logo}></div>
        </div>

        <div className={styles.login_form}>
          <h2 className={styles.form_title}>
            Sistema de Administración Académica
          </h2>

          <form>
            <div className={styles.form_group}>
              <input
                type="text"
                className={styles.form_control}
                placeholder="Usuario"
                required
              />
            </div>

            <div className={styles.form_group}>
              <input
                type="password"
                className={styles.form_control}
                placeholder="Contraseña"
                required
              />
            </div>

            <a href="#" className={styles.forgot_password}>
              ¿Olvidaste tu contraseña?
            </a>

            <button type="submit" className={styles.btn_login}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
