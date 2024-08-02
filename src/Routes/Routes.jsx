import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><Main/></ProtectedRoute>,
        // errorElement: <NotFound />,
        // children: [
        //     {
        //         path: "/",
        //         element: <ProtectedRoute><App /></ProtectedRoute>
        //     },
        //     {
        //         path: "/login",
        //         element: <Login />
        //     },
        //     {
        //         path: "/sign-up",
        //         element: <SignUp />
        //     },
        // ]
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/sign-up",
        element: <SignUp/>
    }
    
]);

export default router;