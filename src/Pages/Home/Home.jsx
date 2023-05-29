import React from "react";
import Banner from "./libs/Banner/Banner";
import CentreX from "../../Shared/CentreX/CentreX";
import Features from "./libs/Features/Features";
import BistroBoss from "./libs/BistroBoss/BistroBoss";
import Recommends from "./libs/Recommend/Recommends";
import Testimonials from "./libs/Testimonials/Testimonials";
import CheckOut from "./libs/CheckOut/CheckOut";
import { useMenuHook } from "../../Hook/MenuHook";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [menu] = useMenuHook();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div>
        <Banner />
        <div className="max-w-7xl mx-auto space-y-16">
          <CentreX
            subHeading="From 11:00am to 10:00pm"
            heading="ORDER ONLINE"
          />
          <Features />
          <BistroBoss />
          <div className="space-y-16">
            <CentreX subHeading="Check it out" heading="FROM OUR MENU" />
            <MenuItems menuItems={popularItems} btnName={"View Full Menu"} />
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
    </>
  );
};

export default Home;
