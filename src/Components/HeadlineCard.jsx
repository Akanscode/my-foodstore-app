import React from "react";
import { headline } from "../Data/Data";

function HeadlineCard() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {headline.map((product, id) => (
        <div key={id} className="relative rounded-xl">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{product.title}</p>
            <p className="px-2">{product.subtitle}</p>
            <button className="border-white bg-fuchsia-400 text-black mx-2 absolute bottom-4 px-2 rounded-md shadow-xl hover:bg-slate-400 hover:opacity-50 hover:transition duration-75 ease-out">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={product.cover}
            alt={product.title}
          />
        </div>
      ))}
    </div>
  );
}

export default HeadlineCard;
