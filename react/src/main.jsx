import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/main.css";
import ViewsCursos from "./views/viewsCursos.jsx";
import ViewsGrid from "./views/viewsGrid.jsx";
import ViewsLogin from "./views/viewsLogin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewsLogin />,
  },
  {
    path: "/vista",
    element: <ViewsCursos />,
  },
  {
    path: "/grid",
    element: <ViewsGrid />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
