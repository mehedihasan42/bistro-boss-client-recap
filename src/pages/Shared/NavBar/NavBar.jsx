import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useOrder from "../../../components/hooks/useOrder";
import { FaCartPlus } from "react-icons/fa6";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orderData] = useOrder();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
          <p className="text-xs ml-1" style={{ letterSpacing: "0.3em" }}>
            Resturent
          </p>
        </div>
      </div>
      <div className="navbar-end space-x-4 font-bold">
        <Link to="/">Home</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/order/pizza">Order</Link>
        <Link to="/secret">Secret</Link>
        <Link to="/Dashboard">
          {" "}
          <button className="btn">
            <FaCartPlus className="text-xl" />
            <div className="badge">{orderData.length}</div>
          </button>
        </Link>
        {user ? (
          <button onClick={handleLogout} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
