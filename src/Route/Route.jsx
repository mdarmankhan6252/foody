import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/AboutPage/About";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Dashboard/Statistics";
import AddItem from "../Dashboard/AddItem";
import ManageItems from "../Dashboard/ManageItems";
import AllUsers from "../Dashboard/AllUsers";
import ManageBookings from "../Dashboard/ManageBookings";
import MyCart from "../Dashboard/MyCart";
import PaymentHistory from "../Dashboard/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AllItems from "../pages/AllItems/AllItems";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/allItems',
        element: <AllItems></AllItems>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'statistics',
        element: <PrivateRoute><Statistics /></PrivateRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'manageBookings',
        element: <PrivateRoute><ManageBookings /></PrivateRoute>
      },
      {
        path: 'myCart',
        element: <PrivateRoute><MyCart /></PrivateRoute>
      },
      {
        path: 'paymentHistory',
        element: <PrivateRoute><PaymentHistory /></PrivateRoute>
      }
    ]
  }
  ,
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);
