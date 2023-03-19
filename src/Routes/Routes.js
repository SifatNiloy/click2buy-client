import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/> ,
        children: [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/signup',
                element:<Signup/>,
            }
        ]
    },
]);