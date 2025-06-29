import React from "react";
import { Link } from "react-router-dom"; // ใช้ react-router-dom ถูกต้อง

const Navbar = () => {
  const menuItems = [
    { name: "Add Restaurant", url: "/add" },
    { name: "Search", url: "/search" },
    { name: "About Us", url: "/about" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* ด้านซ้าย: Dropdown (mobile) + โลโก้ */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl ml-2">
          Grab Restaurant
        </Link>
      </div>

      {/* ด้านกลาง: เมนูแนวนอน (desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ด้านขวา: ปุ่ม Login / Register */}
      <div className="navbar-end space-x-2">
        <button className="btn btn-outline btn-secondary">Login</button>
        <button className="btn btn-outline btn-primary">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
