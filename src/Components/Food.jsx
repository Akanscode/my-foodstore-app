import React, { useState } from "react";
import { data } from "../Data/Data";
const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      }),
    );
  };
  // filter by price function

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-fuchsia-600 font-bold text-xl md:text-3xl text-center uppercase">
        top rated menu items
        <div className="mt-0">
          <span className="inline-block w-40 h-1 rounded-full bg-fuchsia-800"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-fuchsia-800"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-fuchsia-800"></span>
        </div>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        {/**==========filter base on user choice */}
        <div>
          <p className="font-bold text-gray-700 uppercase">filter Type</p>
          <div className="flex justify-between space-x-4 flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="mt-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="mt-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="mt-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="mt-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="mt-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              Chicken
            </button>
          </div>
        </div>
        {/**========filter base on user price */}
        <div>
          <div>
            <p className="font-bold text-gray-700 uppercase">filter price</p>
          </div>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$20")}
              className="m-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              $20
            </button>
            <button
              onClick={() => filterPrice("$40")}
              className="m-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              $40
            </button>
            <button
              onClick={() => filterPrice("$50")}
              className="m-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              $50
            </button>
            <button
              onClick={() => filterPrice("$100")}
              className="m-1 px-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-slate-200"
            >
              $100
            </button>
          </div>
        </div>
      </div>
      {/**=========display fooods */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, idex) => (
          <div
            key={idex}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-fuchsia-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
