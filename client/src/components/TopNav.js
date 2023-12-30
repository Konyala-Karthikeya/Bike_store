import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import LoginValidation from "./LoginValidation";
import AddDataButton from "./AddDataButton";

import Featured from "./Featured";
import Delivery from "./Delivery";
import TopPicks from "./TopPicks";
import Categories from "./Categories";
import Footer from "./Footer";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="bg-gray-700">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          {/* <div onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'>
            <AiOutlineMenu size={25} />
        </div> */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-white">
            Biker's
            <span className="font-bold text-red-700">HUB</span>
          </h1>
          {/* <div className='hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
            <p className='p-2 text-bold'>Delivery</p>
        </div> */}
        </div>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="search Bikes"
          />
        </div>
        <button className="bg-black text-white hidden md:flex items-center rounded-full text-sm">
          {" "}
          <LoginValidation />{" "}
        </button>

        <button className="bg-black text-white hidden md:flex items-center rounded-full text-sm">
          {" "}
          <AddDataButton />{" "}
        </button>
       
      </div>

      <div className="other-components">
        {/* <Featured /> */}
        <Delivery />
        {/* <TopPicks /> */}
        <Categories />
        <Footer />
      </div>
    </div>
  );
};

export default TopNav;
