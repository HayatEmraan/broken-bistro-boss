import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import NotFound from "../NotFound/NotFound";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import SignIn from "../Pages/SEC/SignIn";
import SignUp from "../Pages/SEC/SignUp";
import HomeDash from "../DashBoard/Home/HomeDash";
import Reservation from "../DashBoard/Reservation/reservation";
import MyBooking from "../DashBoard/My Booking/Booking";
import Cart from "../DashBoard/My Cart/Cart";
import Payment from "../DashBoard/Payment/Payment";
import Reviews from "../DashBoard/Add Review/Reviews";
import AllUsers from "../DashBoard/Admin/All Users/AllUsers";
import ManageBookings from "../DashBoard/Admin/Manage Bookings/ManageBookings";
import ManageItems from "../DashBoard/Admin/Manage Items/ManageItems";
import DashBoardAdmin from "../DashBoard/Admin/DashBoard/DashBoardAdmin";
import AddItems from "../DashBoard/Admin/Add Items/AddItems";
import AdminProtect from "../Private/AdminProtect";
import UserProtect from "../Private/UserProtect";
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
    path: "dashboard",
    element: (
      <UserProtect>
        <HomeDash />
      </UserProtect>
    ),
    children: [
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "history",
        element: <Payment />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "booking",
        element: <MyBooking />,
      },
      {
        path: "/dashboard/all/users",
        element: (
          <AdminProtect>
            <AllUsers />
          </AdminProtect>
        ),
      },
      {
        path: "/dashboard/manage/bookings",
        element: <ManageBookings />,
      },
      {
        path: "/dashboard/manage/items",
        element: <ManageItems />,
      },
      {
        path: "/dashboard/admin",
        element: <DashBoardAdmin />,
      },
      {
        path: "/dashboard/add/items",
        element: <AddItems />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
