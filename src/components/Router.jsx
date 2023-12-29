import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Products from "./Products";
import ErrorElement from "./ErrorElement";

export default function Router() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/Home", element: <Home></Home> },
        {
          path: "/Shop",
          element: <Products></Products>,
        },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}
