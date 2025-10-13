import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Root></Root>,
    children: [
            {path: 'home',
                element: <Home></Home>,
                children: [
                    {
                        index: true,
                        path:"/",
                        element:<Home></Home>,
                    }
                ]
            },
        ],
    },
]);