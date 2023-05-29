import React from "react";
import Banner from "./libs/Banner/Banner";
import { useMenuHook } from "../../Hook/MenuHook";
import CentreX from "../../Shared/CentreX/CentreX";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import banner from "../../assets/menu/banner3.jpg";
import banner2 from "../../assets/home/chef-service.jpg";

const OurMenu = () => {
  const [menu] = useMenuHook();
  const offerItems = menu.filter((item) => item.category === "offered");
  console.log(offerItems);
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Banner
        title={"OUR MENU"}
        subtitle={"WOULD YOU LIKE TO TRY A DISH?"}
        bannerImg={banner}
      />
      <div className="space-y-16 my-16">
        <CentreX subHeading="Don't miss" heading="TODAY'S OFFER" />
        <MenuItems
          menuItems={offerItems}
          btnName={"ORDER YOUR FAVOURITE FOOD"}
          linkName="drinks"
        />
      </div>
      <Banner
        title={"DESSERTS"}
        bannerImg={banner2}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="space-y-16 my-16">
        <MenuItems
          menuItems={dessertItems}
          btnName={"ORDER YOUR FAVOURITE FOOD"}
          linkName="dessert"
        />
      </div>
      <Banner
        title={"PIZZA"}
        bannerImg={banner2}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="space-y-16 my-16">
        <MenuItems
          menuItems={pizzaItems}
          btnName={"ORDER YOUR FAVOURITE FOOD"}
          linkName="pizza"
        />
      </div>
      <Banner
        title={"SALADS"}
        bannerImg={banner2}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="space-y-16 my-16">
        <MenuItems
          menuItems={saladItems}
          btnName={"ORDER YOUR FAVOURITE FOOD"}
          linkName="salad"
        />
      </div>
      <Banner
        title={"SOUPS"}
        bannerImg={banner2}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="space-y-16 my-16">
        <MenuItems
          menuItems={soupItems}
          btnName={"ORDER YOUR FAVOURITE FOOD"}
          linkName="soup"
        />
      </div>
    </div>
  );
};

export default OurMenu;
