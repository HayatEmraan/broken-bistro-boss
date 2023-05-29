import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound/NotFound";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import SignIn from "../Pages/SEC/SignIn";
import SignUp from "../Pages/SEC/SignUp";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: () => fetch("http://localhost:3000/menu/total"),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
