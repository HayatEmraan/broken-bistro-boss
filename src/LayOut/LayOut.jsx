import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { layerContext } from "../Context/AuthContext";

const LayOut = () => {
  const { loading } = useContext(layerContext);
  if (loading) { 
    return (
      <div className="absolute left-1/2 top-1/2">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
