import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TopNav2 = () => {
  const [sideNav, setSideNav] = useState(false);

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-500">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Biker's
            <span className="font-bold text-red-700">HUB</span>
          </h1>
        </div>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search Your Favourite Bikes Here"
          />
        </div>
        <button
          className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full"
          onClick={onLogout}
        >
          Logout
        </button>

        {sideNav ? (
          <div
            className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
            onClick={() => setSideNav(!sideNav)}
          ></div>
        ) : (
          ""
        )}

        <div
          className={
            sideNav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setSideNav(!sideNav)}
            size={25}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Biker's<span className="text-black-700 font-bold">HUB</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-grey-900">
              <li className="text-xl py-4 flex">
                <BsPerson
                  size={25}
                  className="mr-4 text-white bg-black rounded-full"
                />
                My Account
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopNav2;
