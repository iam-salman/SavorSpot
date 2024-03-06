import React, { useContext } from "react";
import { LuUser } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import GlobalContext from "../../contexts/GlobalContext";

const Menu = () => {
  const { loginPage, setLoginPage } = useContext(GlobalContext);

  const { isLogged } = useContext(GlobalContext);

  return (
    <div className="mx-4">
      <div className="flex items-center justify-between h-[50px] text-xl">
        <NavLink to="/" className="flex flex-col items-center justify-center">
          <GoHome className="-mb-2" />
          <p className="text-[10px] -mb-2">Home</p>
        </NavLink>
        <NavLink
          to="/search"
          className="flex flex-col items-center justify-center"
        >
          <RiSearchLine className="-mb-2" />
          <span className="text-[10px] -mb-2">Search</span>
        </NavLink>

        <NavLink
          to="/cart"
          className="flex flex-col items-center justify-center"
        >
          <PiShoppingCartSimpleBold className="-mb-2" />
          <span className="text-[10px] -mb-2">Cart</span>
        </NavLink>
        <NavLink
          className="flex flex-col items-center justify-center"
          onClick={() => setLoginPage(true)}
        >
          <LuUser className="-mb-2" />
          <span className="text-[10px] -mb-2">
            {isLogged ? "You" : "Sign In"}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
