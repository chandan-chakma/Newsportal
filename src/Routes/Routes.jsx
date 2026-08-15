import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts.jsx";
import Home from "../Pages/Home.jsx";
import CategoryNews from "../Pages/CategoryNews.jsx";

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
                Component:CategoryNews
            }
        ]
    }
]);

export default router