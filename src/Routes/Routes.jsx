import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound/NotFound";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    },
    {
    path: "*",
    element: <NotFound />,
  },
]);
