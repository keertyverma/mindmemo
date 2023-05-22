import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/UserAuth/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
