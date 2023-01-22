import { createBrowserRouter } from "react-router-dom";
import { About } from "../About";
import { Home } from "../Home";
import { Login } from "../Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);