import React from "react";
import useAdmin from "../Hook/useAdmin";

const AdminProtect = ({ children }) => {
  const [isAdmin] = useAdmin();
  if (!isAdmin) {
    return <h1>you are not admin</h1>;
  }
  return children;
};

export default AdminProtect;
