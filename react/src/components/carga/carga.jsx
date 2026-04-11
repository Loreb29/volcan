import styles from "./carga.module.css";
function Cargador() {
  return (
    <div className={styles.cont}>
      <div className={styles.loader} />
    </div>
  );
}
export default Cargador;
