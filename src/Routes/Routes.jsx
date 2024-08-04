import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import AuthProtect from "./AuthProtect";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><Main/></ProtectedRoute>,
        // element: <Main/>,
        // errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ]
    },
    {
        path:"/login",
        element: <AuthProtect><Login/></AuthProtect>
    },
    {
        path:"/sign-up",
        element: <AuthProtect><SignUp/></AuthProtect>
    }
    
]);

export default router;