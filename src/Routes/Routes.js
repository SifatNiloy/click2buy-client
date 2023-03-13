import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";


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
            }
        ]
    },
]);