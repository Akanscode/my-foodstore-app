import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" bg-gradient-to-r from-fuchsia-100 to-fuchsia-800 shadow-md max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/*============== Left side ============ */}
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer text-slate-700 hover:text-fuchsia-400 border border-slate-700 hover:border-fuchsia-500 "
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-fuchsia-800 shadow-lg">
          Foods <span className="font-bold">Store</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2 font-bold ">Pickup</p>
        </div>
      </div>

      {/* =========== Search Input ============= */}
      <div className="bg-gray-200 rounded-full  items-center hidden md:flex px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/*============== Cart button========== */}
      <button className="bg-black bg-opacity-25 w-[5rem] text-slate-200  flex items-center justify-center font-bold py-2 px-2 rounded-full ">
        <BsFillCartFill size={20} className="animate-bounce" /> Cart
      </button>

      {/*=========== Mobile Menu ============= */}
      {/*=========== Overlay ============= */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/*============= Side drawer menu =========== */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-slate-300 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-slate-300  z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-fuchsia-800">
          Foods <span className="font-bold">Store</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="">
              <a href="/order" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <TbTruckDelivery size={25} className="mr-4" /> Orders
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/favorites" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <MdFavorite size={25} className="mr-4" /> Favorites
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/wallet" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <FaWallet size={25} className="mr-4" /> Wallet
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/help" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <MdHelp size={25} className="mr-4" /> Help
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/promotion" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <AiFillTag size={25} className="mr-4" /> Promotions
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/best" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <BsFillSaveFill size={25} className="mr-4" /> Best Ones
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/friend" className="block md:px-3 group">
                <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left  before:mx-auto before:mt-auto before:rounded-full before:bg-fuchsia-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                  <span className="transition group-hover:text-fuchsia-700 text-xl py-4 flex">
                    <FaUserFriends size={25} className="mr-4" /> Invite Friends
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
