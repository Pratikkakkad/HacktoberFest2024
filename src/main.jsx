import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./pages/Cards/index.jsx";
import Home from "./pages/Home/index.jsx";
import Layout from "./components/layout/index.jsx";
import FavoriteCard from "./pages/FavoriteCards/index.jsx";
import CardDetails from "./components/CardDetail/index.jsx";

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
        path: "/card/:id",
        element: <CardDetails />,
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
