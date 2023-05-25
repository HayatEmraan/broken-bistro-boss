import React from "react";
import Banner from "./libs/Banner/Banner";
import CentreX from "./libs/CentreX/CentreX";
import Features from "./libs/Features/Features";
import BistroBoss from "./libs/BistroBoss/BistroBoss";
import Menu from "./libs/Menu/Menu";
import Recommends from "./libs/Recommend/Recommends";
import Testimonials from "./libs/Testimonials/Testimonials";
import CheckOut from "./libs/CheckOut/CheckOut";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto space-y-16">
        <CentreX subHeading="From 11:00am to 10:00pm" heading="ORDER ONLINE" />
        <Features />
        <BistroBoss />
        <div className="space-y-16">
          <CentreX subHeading="Check it out" heading="FROM OUR MENU" />
          <Menu />
          <div className="w-56 mx-auto">
            <button className="font-inter border-b-2 border-black rounded-md text-xl font-semibold px-8">
              View Full Menu
            </button>
          </div>
        </div>
        <div className="bg-black p-16 rounded-md">
          <h2 className="text-5xl font-semibold text-white text-center font-raleway">
            Call Us: +88 0192345678910
          </h2>
        </div>
        <div className="flex justify-between">
          <Recommends />
          <Recommends />
          <Recommends />
        </div>
      </div>
      <div>
        <CheckOut />
      </div>
      <div className="max-w-7xl mx-auto space-y-16">
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
