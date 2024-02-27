import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/signUp/SignUp';
import Secret from '../pages/secret/Secret';
import PrivetRoute from './PrivetRoute';
import DashBoard from '../Layout/DashBoard';
import AdminHome from '../pages/DashBoard/AdminHome/AdminHome';
import AddItems from '../pages/DashBoard/AddItems/AddItems';
import ManageItems from '../pages/DashBoard/ManageItems/ManageItems';
import ManageBookings from '../pages/DashBoard/ManageBookings/ManageBookings';
import AllUsers from '../pages/DashBoard/AllUsers/AllUsers';
import UserHome from '../pages/DashBoard/User/UserHome/UserHome';
import Reservation from '../pages/DashBoard/User/Reservation/Reservation';
import PaymentHis from '../pages/DashBoard/User/PaymentHis/PaymentHis';
import MyCart from '../pages/DashBoard/User/MyCart/MyCart';
import AddReview from '../pages/DashBoard/User/AddReview/AddReview';
import MyBookings from '../pages/DashBoard/User/MyBookings/MyBookings';
import AdminRoute from './AdminRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/order/:category',
            element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },
    {
      path:'/Dashboard',
      element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
        },
        {
          path:'addItems',
          element:<AddItems></AddItems>
        },
        {
          path:'manageItems',
          element:<ManageItems></ManageItems>
        },
        {
          path:'manageBookings',
          element:<ManageBookings></ManageBookings>
        },
        {
          path:'allUsers',
          element:<PrivetRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivetRoute>
        },
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'reservation',
          element:<Reservation></Reservation>
        },
        {
          path:'paymentHis',
          element:<PaymentHis></PaymentHis>
        },
        {
          path:'myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'addReview',
          element:<AddReview></AddReview>
        },
        {
          path:'myBooking',
          element:<MyBookings></MyBookings>
        },
      ]
    }
  ]);

  export default router