import logoImage from "../../images/logo.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="shadow-md sticky top-0 bg-white z-50">
      <div className="flex justify-between pd-1  my-1 mx-32 items-center">
        <div>
          <img className="w-20" src={logoImage} alt="SavorSpot" />
        </div>

        <div>
          <ul className="flex gap-12 p-3 font-medium items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="ri-shopping-cart-2-line text-3xl"></i>
                <span className="absolute text-black text-xs px-[5] rounded-full shadow-gray-100">
                  {cartItems.length}
                </span>
              </Link>
            </li>
            <li>
              <button
                className="px-6 py-3 rounded-md bg-blue-700 text-white"
                onClick={() => {
                  return BtnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {BtnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
