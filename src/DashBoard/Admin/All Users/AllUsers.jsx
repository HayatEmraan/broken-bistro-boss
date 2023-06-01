import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import {
  MdAdminPanelSettings,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import Swal from "sweetalert2";
import AuthContext, { layerContext } from "../../../Context/AuthContext";
import useAxiosInstance from "../../../Hook/useAxiosInstance";

const AllUsers = () => {
  const [axiosSecure] = useAxiosInstance();
  const { data, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/admin/users")
      console.log(res);
      return res.data;
    },
  });
  console.log(data);
  const handleAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to made admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:3000/api/admin/users/patch/${id}`)
          .then(function (response) {
            console.log(response);
            if (response.data.modifiedCount === 1) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Admin Added!.",
                showConfirmButton: false,
                timer: 1000,
              });
              refetch();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/api/admin/users/delete/${id}`)
          .then(function (response) {
            console.log(response);
            if (response.data.deletedCount === 1) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Admin Deleted!.",
                showConfirmButton: false,
                timer: 1000,
              });
              refetch();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };
  return (
    <div className="w-full border p-8 rounded-md ml-8">
      <div className="overflow-x-auto w-full">
        <div className="font-cinzel mx-4 text-3xl font-semibold mb-4">
          <h2>total users: {data?.length}</h2>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.admin ? (
                      <MdAdminPanelSettings
                        className="bg-red-500 p-2 rounded-full text-white text-4xl cursor-pointer"
                        onClick={() => handleAdmin(item._id)}
                      ></MdAdminPanelSettings>
                    ) : (
                      <MdOutlineSupervisorAccount
                        className="bg-red-500 p-2 rounded-full text-white text-4xl cursor-pointer"
                        onClick={() => handleAdmin(item._id)}
                      />
                    )}
                  </td>
                  <th onClick={() => handleDelete(item._id)}>
                    <FaRegTrashAlt className="bg-red-500 p-2 rounded-full text-white text-4xl cursor-pointer" />
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
