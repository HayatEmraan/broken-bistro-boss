import React from 'react';
import salad from "../../../../assets/home/slide5.jpg";
const Recommends = () => {
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              style={{ height: "300px" }}
              src={salad}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center py-3">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
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

export default Recommends;