import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(null);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json"
    )
      .then((res) => res.json())
      .then((data) =>
        setMenuItems(data.filter((item) => item.category === "popular"))
      );
  }, []);
  return (
    <div className="grid grid-cols-2 gap-12">
      {menuItems &&
        menuItems.map((item) => (
          <div key={item._id} className="flex gap-4">
            <img
              style={{ borderRadius: "0px 200px 200px 200px", width: "118px" }}
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
  );
};

export default Menu;
