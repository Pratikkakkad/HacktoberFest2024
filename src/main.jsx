import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./pages/Cards/index.jsx";
import Home from "./pages/Home/index.jsx";
import Layout from "./components/layout/index.jsx";
import FavoriteCard from "./pages/FavoriteCards/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/favorite-cards",
        element: <FavoriteCard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
