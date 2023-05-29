import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ menuItems, btnName, linkName }) => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-2 gap-12">
        {menuItems &&
          menuItems.map((item) => (
            <div key={item._id} className="flex gap-4">
              <img
                style={{
                  borderRadius: "0px 200px 200px 200px",
                  width: "118px",
                }}
                src={item.image}
                alt=""
              />
              <div>
                <h3 className="font-cinzel text-xl">
                  {item.name} ------------------
                </h3>
                <p className="font-inter">{item.recipe}</p>
              </div>
              <p className="text-[#BB8506] font-inter text-xl">${item.price}</p>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={`/order/${linkName}`}
          className="font-inter border-b-2 border-black rounded-md text-xl font-semibold px-8"
        >
          {btnName}
        </Link>
      </div>
    </>
  );
};

export default MenuItems;
