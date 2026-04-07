import { useState } from "react";
import "../styles/App.css";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Grid from "../components/grid/grid.jsx";

function viewsGrid() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Grid />
      <Footer />
    </>
  );
}

export default viewsGrid;
