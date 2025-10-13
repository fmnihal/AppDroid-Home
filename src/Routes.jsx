import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Root></Root>,
    children: [
            {
                index: true,
                element:<Home></Home>,
            }
        ]
    },
]);