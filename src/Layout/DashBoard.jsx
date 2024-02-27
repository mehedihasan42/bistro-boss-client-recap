import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../components/hooks/useAdmin";

const DashBoard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  return (
    <div className="drawer lg:drawer-open  bg-base-300">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side mx-auto">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content  bg-[#D1A054]">
          <div className="mb-6">
            <p className="font-bold text-xl">Bistro Boss</p>
            <p className="text-xs ml-1" style={{ letterSpacing: "0.3em" }}>
              Resturent
            </p>
          </div>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/Dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/addItems">Add Items</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/manageBookings">
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/allUsers">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/Dashboard/userHome">User Home</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/reservation">Reservation</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/paymentHis">Payment History</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/myCart">My Cart</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/addReview">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/myBooking">My Bookings</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          <li>
            <Link to="/order/pizza">Order</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
