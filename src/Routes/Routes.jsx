import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPages from "../Pages/ErrorPages";
import Installation from "../Pages/Installation";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPages></ErrorPages>,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
        {
            index: true,
            Component: Home,
            loader: () => fetch('./appsData.json')
        },
        {
          path: "/apps",
          Component: Apps
        },
        {
          path: "/installation",
          Component: Installation
        },
    ],
  },
  
]);

export default router