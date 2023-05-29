import React from "react";
import featured from "../../../../assets/home/featured.jpg";
import "./CheckOut.css";
import CentreX from "../../../../Shared/CentreX/CentreX";
const CheckOut = () => {
  return (
    <div className="checkout py-12 mt-16">
      <CentreX subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="flex items-center gap-12 p-16 rounded-sm ms-32">
        <img className="w-2/6 rounded-md" src={featured} alt="" />
        <div className="font-inter text-white">
          <h2 className="text-2xl">March 20, 2023</h2>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="font-inter border-b-2 border-white rounded-md text-xl font-semibold px-4 mt-8">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
