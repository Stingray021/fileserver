import React from "react";
import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import ProtectedRoute from "../ProtectedRoute";
import { MAIN_ROUTE } from "../../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              <Component />
            </ProtectedRoute>
          }
        />
      ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {/* <Route path="*" element={<Navigate to={MAIN_ROUTE} replace={true}/>} /> */}
    </Routes>
  );
};

export default AppRouter;
