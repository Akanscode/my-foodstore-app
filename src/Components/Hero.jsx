import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import HeroImage from "../assests/images/HeroImage.webp";

const Hero = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          {/**==========overlay============ */}

          <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center  ">
            <h1 className="px-4 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              {" "}
              The <span className=" text-fuchsia-600">Best</span>
            </h1>
            <h1 className="px-4 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-fuchsia-600"> Foods</span> Devlivery
            </h1>
            <div className="bg-gray-200 rounded-full  items-center flex px-4 md:hidden w-[200px] sm:w-[400px] lg:w-[500px] mt-2">
              <AiOutlineSearch size={25} />
              <input
                className="bg-transparent p-2 w-full focus:outline-none"
                type="text"
                placeholder="Search foods"
              />
            </div>

            <div className="flex space-x-5 px-4  mt-5 ">
              <button
                type="button"
                className=" md:px-6 py-2 w-[180px] border-2 border-fuchsia-600 font-medium text-xs leading-tight uppercase rounded bg-black text-slate-200 hover:bg-opacity-25 text-opacity-40 focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
              >
                explore food menu
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2 border-2 border-fuchsia-600  font-medium text-xs leading-tight uppercase rounded bg-black text-slate-200 hover:bg-opacity-25 text-opacity-40 focus:outline-none focus:ring-0 transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
          </div>
          {/**=======Hero Image============= */}
          <img
            className="w-full max-h-[500px] object-cover"
            src={HeroImage}
            alt="/"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
