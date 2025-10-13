import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Apps from "./components/Apps";
import Installation from "./components/Installation";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Root></Root>,
    children: [
            {
                index: true,
                element:<Home></Home>,
            },
            {
                path: "apps", 
                element: <Apps />,
            },
            {
                path: "installation",
                element: <Installation />,
            },
        ]
    },
]);