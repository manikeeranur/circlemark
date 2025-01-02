import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const userId = localStorage.getItem("userId");
  const roleId = localStorage.getItem("roleId");

  if (!userId) {
    return <Navigate to="/" />;
  }

  if (role && parseInt(roleId) !== role) {
    // User does not have the required role
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
