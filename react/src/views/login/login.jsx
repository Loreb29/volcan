import styles from "./login.module.css";
import { useState } from "react";
import { LoginCall } from "../../components/calls.jsx";
import { useNavigate } from "react-router";
function Login() {
  const [contra, setContra] = useState("");
  const [email, setEmail] = useState("");
  var sdata = { email: email, password: contra };
  const navigate = useNavigate();
  //http://26.216.97.134:5678/api/v1/login
  //https://dummyjson.com/auth/login
  const mutation = LoginCall("http://26.216.97.134:5678/api/v1/login", sdata);
  //Aqui se obtienen los datos
  const click = async (event) => {
    event.preventDefault();
    const data = await mutation.mutateAsync();
    console.log(data);
    if (data == 400) {
      setContra("");
    } else {
      sessionStorage.setItem("ID_Token", Object.values(data)[1]);
      navigate("/cursos");
    }

    //data[0] es el codigo de respuesta, data[1] es la promesa, con el contenido
  };
  const changEmail = (event) => {
    setEmail(event.target.value);
  };
  const changPass = (event) => {
    setContra(event.target.value);
  };

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
          <form onSubmit={click}>
            <div className={styles.form_group}>
              <input
                id="Username"
                onChange={changEmail}
                type="text"
                className={styles.form_control}
                value={email}
                placeholder="Usuario"
                required
              />
            </div>

            <div className={styles.form_group}>
              <input
                id="Pass"
                onChange={changPass}
                type="password"
                className={styles.form_control}
                value={contra}
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
