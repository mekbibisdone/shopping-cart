import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement";
import Header from "./Header";

export default function Router() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Header></Header>,
      errorElement: <ErrorElement></ErrorElement>,
    },
    {
      path: "/:name",
      element: <Header></Header>,
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
}
