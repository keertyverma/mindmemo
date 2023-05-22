import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/UserAuth/SignUp";
import Login from "./pages/UserAuth/Login";
import Profile from "./pages/Profile/Profile";

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
