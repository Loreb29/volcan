import { useState } from "react";
import Footer from "../components/footer/footer.jsx";
import Login from "./login/login.jsx";

function ViewsLogin() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Footer />
    </>
  );
}

export default ViewsLogin;
