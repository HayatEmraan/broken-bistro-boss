import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { layerContext } from "../Context/AuthContext";

const useAxiosInstance = () => {
  const navigate = useNavigate();
  const { logout } = useContext(layerContext);
  const axiosSecure = axios.create({
    baseURL: "http://localhost:3000",
  });
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `${token}`;
      }
      return config;
    });
    axiosSecure.interceptors.response.use(
      (res) => res,
      (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          logout();
          navigate("/signin");
        }
        return Promise.reject(err);
      }
    );
  }, [logout, navigate, axiosSecure]);
  return [axiosSecure];
};

export default useAxiosInstance;
