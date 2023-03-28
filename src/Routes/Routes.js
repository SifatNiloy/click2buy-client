import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import LimitedProducts from "../Pages/Home/LimitedProducts/LimitedProducts";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Shop from "../Pages/Shop/Shop";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                // loader: async () => await fetch(`http://localhost:5000/products`),
                element: <Shop />,
            },

            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: "/about",
                element: <About/>,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard /></PrivateRoute>,
        children: [

        ]
    }
]);