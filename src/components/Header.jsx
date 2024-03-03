import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiOutlineUser } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosHelpBuoy } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import SearchPlace from "./LocationSearch/SearchPlace";
import GlobalContext from "../contexts/GlobalContext";

const Header = () => {
  const { coordinates, setSearchPlace, searchPlace } =
    useContext(GlobalContext);

  const { place } = coordinates;

  return (
    <div className="shadow-sm sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center h-20  mx-36">
        <div className="flex justify-between items-center gap-10">
          <NavLink to="/">
            <img src={logo} alt="" className="w-16" />
          </NavLink>
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-custom-orange"
            onClick={() => setSearchPlace(true)}
          >
            <p className="font-extrabold text-xs relative">
              Other
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black"></span>
            </p>

            <p className="text-gray-400 text-sm truncate max-w-52">{place}</p>
            <FaAngleDown className="inline text-custom-orange font-bold" />
          </div>
        </div>

        <div className="">
          <ul className="flex justify-between items-center gap-16 font-bold text-gray-700">
            <li className="cursor-pointer hover:text-custom-orange ">
              <NavLink to="/search" className="gap-3 flex items-center">
                <FiSearch className="inline text-xl " />
                Search
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-custom-orange">
              <NavLink className="gap-3 flex items-center">
                <TbDiscount2 className="inline text-xl " />
                Offers
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-custom-orange">
              <NavLink className="gap-3 flex items-center">
                <IoIosHelpBuoy className="inline text-xl " />
                Help
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-custom-orange">
              <NavLink className="gap-3 flex items-center">
                <HiOutlineUser className="inline text-2xl " />
                Sign In
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-custom-orange">
              <NavLink className="gap-3 flex items-center">
                <RiShoppingCart2Line className="inline text-2xl" />
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {searchPlace && <SearchPlace setSearchArea={setSearchPlace} />}
    </div>
  );
};

export default Header;
