import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes.jsx";
import AuthContext from "./Context/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto">
        <AuthContext>
          <RouterProvider router={Routes} />,
        </AuthContext>
      </div>
    </QueryClientProvider>
  </HelmetProvider>
);
