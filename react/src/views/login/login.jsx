import styles from "./login.module.css";
import { useQuery } from "@tanstack/react-query";
import Cargador from "../../components/carga/carga";
function fetcher() {
  fetch("https://time.now/developer/api/timezone/Europe/London", {
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return res;
}

function Login() {
  let mensaje;
  const i = "client_ip";
  const { isPending, error, isSuccess, data } = useQuery({
    queryKey: ["Tiempo"], //Mas o menos el ID que se le da al query
    queryFn: () =>
      //Funcion del query
      fetch("https://time.now/developer/api/timezone/Europe/London", {
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json()),
    retry: 6,
  });
  if (isPending) {
    mensaje = <Cargador />;
  }
  if (error) {
    mensaje = <div>{error.message}</div>;
    console.log(error.message);
  }
  if (isSuccess) {
    console.log(data[i]);
    //retorna los valores dentro del json, iterable!
    mensaje = data.datetime;
  }
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
          {mensaje}
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
