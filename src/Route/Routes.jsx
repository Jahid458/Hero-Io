import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
