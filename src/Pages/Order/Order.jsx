import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Banner from "../OurMenu/libs/Banner/Banner";
import banner2 from "../../assets/shop/banner2.jpg";
import OrderMenu from "../../Shared/OrderMenu/OrderMenu";
import Paginations from "./libs/Paginations/Paginations";
import { useLoaderData, useParams } from "react-router-dom";
const Order = () => {
  const menuLoader = useLoaderData();
  const [menu, setMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { id } = useParams();
  const [tabIndex, setTabIndex] = useState(0);
  const menuItems = ["salad", "pizza", "soup", "dessert", "drinks"];
  useEffect(() => {
    fetch(
      `http://localhost:3000/menu?limit=${itemsPerPage}&skip=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMenu(data)
        setTabIndex(menuItems.indexOf(id));
      });
  }, [currentPage]);
  const handlePageChange = (page, limit) => {
    setCurrentPage(page);
    setItemsPerPage(limit);
  };
  console.log(menu);

  const filterItems = menuItems.indexOf(id);
  const drinkItems = menu && menu.filter((item) => item.category === "drinks");
  const dessertItems =
    menu && menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu && menu.filter((item) => item.category === "pizza");
  const saladItems = menu && menu.filter((item) => item.category === "salad");
  const soupItems = menu && menu.filter((item) => item.category === "soup");
  console.log(dessertItems);
  return (
    <div className="mb-16">
      <Banner
        title={"OUR SHOP"}
        subtitle={"WOULD YOU LIKE TO TRY A DISH?"}
        bannerImg={banner2}
      />
      <div className="my-16">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-4 gap-12 mt-8">
              {saladItems &&
                saladItems.map((item) => (
                  <OrderMenu
                    key={item._id}
                    name={item.name}
                    details={item.recipe}
                    price={item.price}
                    img={item.image}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-12 mt-8">
              {pizzaItems &&
                pizzaItems.map((item) => (
                  <OrderMenu
                    key={item._id}
                    name={item.name}
                    details={item.recipe}
                    price={item.price}
                    img={item.image}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-12 mt-8">
              {saladItems &&
                soupItems.map((item) => (
                  <OrderMenu
                    key={item._id}
                    name={item.name}
                    details={item.recipe}
                    price={item.price}
                    img={item.image}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-12 mt-8">
              {dessertItems &&
                dessertItems.map((item) => (
                  <OrderMenu
                    key={item._id}
                    name={item.name}
                    details={item.recipe}
                    price={item.price}
                    img={item.image}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-12 mt-8">
              {drinkItems &&
                drinkItems.map((item) => (
                  <OrderMenu
                    key={item._id}
                    name={item.name}
                    details={item.recipe}
                    price={item.price}
                    img={item.image}
                  />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Paginations
        menuLoader={menuLoader}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Order;
