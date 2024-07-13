import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children})=> {
    // const { user } = useContext(Context);
    // if (!user.isAuth) {
        // user is not authenticated
        return <Navigate to="/main" />;
    // }
    // return (children);
};

export default ProtectedRoute;