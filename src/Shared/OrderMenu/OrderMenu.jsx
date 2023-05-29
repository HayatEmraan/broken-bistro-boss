import React from "react";

const OrderMenu = ({ name, details, price, img }) => {
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
              <p className="absolute right-4 top-4 px-4 py-1 bg-black text-white rounded-md">{ price}</p>
        <div className="card-body items-center text-center py-3">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions bg-[#E8E8E8] p-3 rounded-lg border-b-4 border-orange-300">
            <button className=" uppercase font-inter font-xl text-[#BB8506] font-semibold">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMenu;
