/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-dots loading-sm"></span>
    }


    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default Private;


