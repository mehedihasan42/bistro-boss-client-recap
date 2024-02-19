import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
       <div>
       <p className="font-bold text-xl">Bistro Boss</p>
       <p className="text-xs ml-1" style={{ letterSpacing: '0.3em' }}>Resturent</p>
       </div>
      </div>
      <div className="navbar-end space-x-4 font-bold">
        <Link to="/">Home</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/pizza">Order</Link>
        <Link to="/login" className="btn">Log In</Link>
      </div>
    </div>
  );
};

export default NavBar;
