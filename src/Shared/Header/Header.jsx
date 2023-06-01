import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { layerContext } from "../../Context/AuthContext";
import useQueryHook from "../../Hook/useQuery";
import useAdmin from "../../Hook/useAdmin";
const Header = () => {
  const { user, logout } = useContext(layerContext);
  const bistroLogo = (
    <div className="font-cinzel font-extrabold font-3xl">
      <h2>BISTRO BOSS</h2>
      <h2 className="-mt-2">Restaurant</h2>
    </div>
  );
  const userList = useAdmin();
  // const [data, setData] = useState([]);
  // if (user) {
  //   const { data: data = [] } = useQueryHook();
  //   // setData(data);
  // }
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user) {
      const { data, isLoading } = useQueryHook();
      setData(data);
    }
  }, []);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const bistroHeader = (
    <>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link>contact us</Link>
      </li>
      <li>
        <Link to="/dashboard">dashboard</Link>
      </li>
      <li>
        <Link to="/menu">our menu</Link>
      </li>
      <li>
        <Link to="/order/salad">our shop</Link>
      </li>
      <li>
        <Link to="/dashboard/cart" className=" text-2xl gap-0">
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
          <small className="absolute top-0 right-1 text-white bg-red-800 rounded-full py-0 text-sm px-2">
            {(data && data?.length) || 0}
          </small>
        </Link>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogout}>LogOut</button>
        </li>
      ) : (
        <li>
          <Link to="/signin">sign in</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-opacity-30 bg-black fixed container z-10 text-white px-8 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase font-inter"
            >
              {bistroHeader}
            </ul>
          </div>
          {bistroLogo}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-inter">
            {bistroHeader}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
