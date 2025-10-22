import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPages from "../Pages/ErrorPages";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";


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
        },
        {
          path: "/apps",
          Component: Apps
        },
        {
          path: "/installation",
          Component: Installation
        },
        {
          path: "/apps/:id",
          Component: AppDetails
        },
    ],
  },
  
]);

export default router