import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.css";
import ViewsCursos from "./views/viewsCursos.jsx";
import ViewsGrid from "./views/viewsGrid.jsx";
import ViewsLogin from "./views/viewsLogin.jsx";

const queryclient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewsLogin />,
  },
  {
    path: "/cursos",
    element: <ViewsCursos />,
  },
  {
    path: "/grid/:cursoId",
    element: <ViewsGrid />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
