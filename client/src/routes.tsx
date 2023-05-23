import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/UserAuth/Login";
import SignUp from "./pages/UserAuth/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;
