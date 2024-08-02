import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";


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
        element: <Login/>
    },
    {
        path:"/sign-up",
        element: <SignUp/>
    }
    
]);

export default router;