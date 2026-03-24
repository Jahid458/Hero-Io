import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";
import App from "../Components/App/App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'apps',
        Component: App,
        loader: async () => {
          const res = await fetch('/data.json')
          return res.json()
        }
      }
    ],
  },
]);
