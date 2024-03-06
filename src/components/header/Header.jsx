import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LuUser } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosHelpBuoy } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import SearchPlace from "../LocationSearch/SearchPlace";
import GlobalContext from "../../contexts/GlobalContext";
import Menu from "./Menu";
import UserLogin from "../user/UserLogin";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const {
    coordinates,
    setSearchPlace,
    searchPlace,
    loginPage,
    setLoginPage,
    isLogged,
    setIsLogged,
  } = useContext(GlobalContext);

  const { place } = coordinates;

  return (
    <div className="shadow-md sticky top-0 bg-white z-50 border-y border-gray-500 lg:border-none">
      <div className="md:flex md:justify-between md:items-center  h-[60px] md:h-[72px] lg:h-20 mx-4 lg:mx-36">
        <div className="flex justify-between items-center md:gap-3 lg:gap-4">
          <div className="flex items-center justify-between gap-4">
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="w-14 md:w-16 transition-all duration-300 hover:scale-110"
              />
            </Link>

            <div
              className="flex items-center gap-2 cursor-pointer hover:text-custom-orange"
              onClick={() => setSearchPlace(true)}
            >
              <p className="font-extrabold lg:text-xs relative">
                Other
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black block"></span>
              </p>

              <p className="text-gray-400 lg:text-sm truncate lg:max-w-52 hidden md:block">
                {place}
              </p>
              <FaAngleDown className="inline text-custom-orange font-bold" />
            </div>
          </div>

          {isLogged && (
            <div
              className="cursor-pointer md:hidden hover:text-custom-orange"
              onClick={() => setIsLogged(false)}
            >
              <MdOutlineLogout className="inline text-2xl" />
            </div>
          )}
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-16 font-bold text-gray-700 text-2xl lg:text-base">
            <li className="cursor-pointer hover:text-custom-orange">
              <NavLink to="/search" className="gap-3 flex items-center">
                <RiSearchLine className="inline text-xl" />
                <span className="hidden md:block">Search</span>
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-custom-orange hidden">
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

            {isLogged ? (
              <li
                className="cursor-pointer hover:text-custom-orange"
                onClick={() => setIsLogged(false)}
              >
                <div className="gap-3 flex items-center">
                  <MdOutlineLogout className="inline text-2xl" />
                  <p className="">Logout</p>
                </div>
              </li>
            ) : (
              <li
                className="cursor-pointer hover:text-custom-orange"
                onClick={() => setLoginPage(true)}
              >
                <NavLink className="gap-3 flex items-center">
                  <LuUser className="inline text-2xl " />
                  Sign In
                </NavLink>
              </li>
            )}

            <li className="cursor-pointer hover:text-custom-orange">
              <NavLink to="/cart" className="gap-3 flex items-center">
                <PiShoppingCartSimpleBold className="inline text-2xl" />
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {searchPlace && <SearchPlace setSearchArea={setSearchPlace} />}
      {loginPage && <UserLogin setLoginPage={setLoginPage} />}

      {/* Mobile Menu */}
      <div className="bottom-0 md:hidden fixed w-full bg-white z-30 border-y border-gray-600">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
