import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";
import App from "../Components/App/App";
import AppDetails from "../Components/AppDetails/AppDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
      },
      {
        path: "apps",
        Component: App,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
      },
      {
        path: "apps/:id",
        Component: AppDetails,
        loader: async () => {
          const res = await fetch("/data.json");
          return res.json();
        },
      },
    ],
  },
]);
