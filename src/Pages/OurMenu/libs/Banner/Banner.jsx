import React from "react";
import "./Banner.css";
const Banner = ({ title, subtitle, bannerImg }) => {
  return (
    <div className="relative">
      <img src={bannerImg} alt="" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="sub-banner px-24 py-20 text-white text-center">
          <h2 className="text-7xl font-bold font-cinzel">{title}</h2>
          <p
            className={`${
              subtitle === "WOULD YOU LIKE TO TRY A DISH?"
                ? "font-cinzel font-semibold text-2xl"
                : ""
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
