import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProider";
import { useContext } from "react";
import { DNA } from "react-loader-spinner";

const AuthProtect = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <div className="flex flex-col space-y-6 items-center justify-center h-[70vh]">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        );
      }
    
      if (user) {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>;
      }
      return children;
};

export default AuthProtect;