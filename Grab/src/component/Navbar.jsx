import React from "react";
import { Link } from "react-router-dom"; // ใช้สำหรับ navigation แบบ SPA

const NavBar = () => {
  const menuItems = [
    {
      name: "Add Restaurant",
      url: "/add", // path ควรเป็น absolute
    },
    {
      name: "Search",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about", // แนะนำแยก path ถ้ามีจริง
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Grab-Restaurant
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        <button className="btn btn-outline btn-primary">Register</button>
        <button className="btn btn-outline btn-secondary">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
