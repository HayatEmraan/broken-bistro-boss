import React from "react";
import shopIcon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { Link } from "react-router-dom";
const Header = () => {
  const bistroLogo = (
    <div className="font-cinzel font-extrabold font-3xl">
      <h2>BISTRO BOSS</h2>
      <h2 className="-mt-2">Restaurant</h2>
    </div>
  );
  const bistroHeader = (
    <>
      <li>
        <Link>home</Link>
      </li>
      <li>
        <Link>contact us</Link>
      </li>
      <li>
        <Link>dashboard</Link>
      </li>
      <li>
        <Link>our menu</Link>
      </li>
      <li>
        <Link>our shop</Link>
      </li>
      <li>
        <img className="w-20" src={shopIcon} alt="" />
      </li>
      <li>
        <Link>sign out</Link>
      </li>
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
