import logoImage from "../../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "./CardItem";
import { MdLocationPin, MdOutlineLocationSearching } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { fetchCityData } from "../utils/citySlice";
import Shimmer from "./Shimmer";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");
  const dispatch = useDispatch();

  const { lat, lng, currCity, loading, error } = useSelector(
    (state) => state.city
  );
  const [city, setCity] = useState(currCity);

  const [searchCity, setSearchCity] = useState(false);

  const handleLocation = () => {
    dispatch(fetchCityData(city));
    setSearchCity(false);
  };

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchCity = () => {
    setSearchCity((prev) => !prev);
    setTimeout(() => setSearchCity(false), 10000);
  };

  return (
    <div className="shadow-sm sticky top-0 bg-white z-50">
      <div className="flex justify-between pd-1  my-1 mx-32 items-center">
        <div className="flex items-center ">
          <div className="mr-5">
            <img className="w-20" src={logoImage} alt="SavorSpot" />
          </div>

          <div className="ml-5 flex items-center">
            <MdLocationPin
              className="ri-map-pin-2-line text-3xl mr-1 mb-2 text-red-500"
              onClick={handleSearchCity}
            />
            {searchCity ? (
              <>
                <input
                  type="text"
                  placeholder="Enter City..."
                  className="px-2 py-1 text-sm outline-none"
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleLocation();
                    }
                  }}
                />
                <MdOutlineLocationSearching onClick={handleLocation} />
              </>
            ) : (
              <h4 className="font-light text-sm">{city}</h4>
            )}
          </div>
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
              <Link to="/cart">
                <RiShoppingCart2Line className="inline text-3xl" />
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
