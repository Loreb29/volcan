import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ViewsCursos from "./views/viewsCursos.jsx";
import ViewsGrid from "./views/viewsGrid.jsx";
const router = createBrowserRouter([
  {
    path: "/",
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
