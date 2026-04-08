import { useState } from "react";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Cursos from "./cursos/cursos.jsx";

function ViewsCursos() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Cursos />
      <Footer />
    </>
  );
}

export default ViewsCursos;
