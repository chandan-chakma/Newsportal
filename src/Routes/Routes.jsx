import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
    }
]);

export default router