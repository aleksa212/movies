import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App/App";
import ErrorPage from "./pages/error-page";
import Movies from "./pages/Movies";
import Favourites from "./pages/Favourites";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Movies /> },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
