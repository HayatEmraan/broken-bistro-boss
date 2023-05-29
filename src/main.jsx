import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes.jsx";
import AuthContext from "./Context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="container mx-auto">
      <AuthContext>
        <RouterProvider router={Routes} />,
      </AuthContext>
    </div>
  </HelmetProvider>
);
