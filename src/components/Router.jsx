import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import ErrorElement from "./ErrorElement";

export default function Router() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/shop",
      element: <Shop></Shop>,
    }
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}
