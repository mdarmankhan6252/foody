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
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'addItem',
        element: <AddItem />
      },
      {
        path: 'manageItems',
        element: <ManageItems />
      },
      {
        path: 'allUsers',
        element: <AllUsers />
      },
      {
        path: 'manageBookings',
        element: <ManageBookings />
      },
      {
        path: 'myCart',
        element: <MyCart />
      },
      {
        path : 'paymentHistory',
        element : <PaymentHistory/>
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