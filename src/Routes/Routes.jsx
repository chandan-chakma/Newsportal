import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts.jsx";
import Home from "../Pages/Home.jsx";
import CategoryNews from "../Pages/CategoryNews.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import NewsDetails from "../Pages/NewsDetails.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '',
                Component:Home
            },
            {

                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component:Login
            },
            {
                path: '/auth/register',
                Component:Register
            }
        ]
    },
    {
        path: '/newsDetails/:id',
        loader:()=>fetch('/news.json'),
        Component:NewsDetails
    }
]);

export default router