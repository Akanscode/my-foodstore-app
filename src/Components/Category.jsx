import React from "react";
import { categories } from "../Data/Data";

const Category = () => {
  return (
    <div className="px-10 py-5  mx-auto sm:max-w-xl md:max-w-full">
      <h1 className="text-fuchsia-600 font-bold text-xl md:text-3xl text-center">
        Top Rated Menu Items
        <div className="mt-0">
          <span className="inline-block w-40 h-1 rounded-full bg-fuchsia-800"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-fuchsia-800"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-fuchsia-800"></span>
        </div>
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 py-6 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex md:flex-row flex-col justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
