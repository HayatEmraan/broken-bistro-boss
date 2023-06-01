import React, { useContext, useEffect, useState } from "react";
import { layerContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useQuery from "../../Hook/useQuery";
import useQueryHook from "../../Hook/useQuery";

const OrderMenu = ({ name, details, price, img }) => {
  const { user } = useContext(layerContext);
  const navigate = useNavigate();
  const [refetch, setRefetch] = useState(null);
  useEffect(() => {
    if (user) {
      const { refetch } = useQueryHook();
      setRefetch(refetch);
    }
  }, [])
  const handleOrder = (e) => {
    if (user) {
      const userData = user?.email;
      const items = {
        name: name,
        details: details,
        price: price,
        img: img,
        email: userData,
      };
      fetch("http://localhost:3000/addorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(items),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You've LogIn to Add Cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ height: "300px" }}
            src={img}
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <p className="absolute right-4 top-4 px-4 py-1 bg-black text-white rounded-md">
          {price}
        </p>
        <div className="card-body items-center text-center py-3">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions bg-[#E8E8E8] p-3 rounded-lg border-b-4 border-orange-300">
            <button
              onClick={handleOrder}
              className=" uppercase font-inter font-xl text-[#BB8506] font-semibold"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
