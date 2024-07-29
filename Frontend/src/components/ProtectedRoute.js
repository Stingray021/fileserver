import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../index";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(Context);
  if (!user.isAuth) {
    // user is not authenticated
    return <Navigate to="/non-auth" />;
  }
  return children;
};

export default ProtectedRoute;
