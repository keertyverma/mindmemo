import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing/Landing";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
]);

export default router;
