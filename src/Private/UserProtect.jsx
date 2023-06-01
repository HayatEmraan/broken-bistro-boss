import React from "react";
import AuthContext, { layerContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const UserProtect = ({ children }) => {
  const { user } = AuthContext(layerContext);
  if (!user) {
    return <Navigate to="/signin"></Navigate>;
  }
  return children;
};

export default UserProtect;
