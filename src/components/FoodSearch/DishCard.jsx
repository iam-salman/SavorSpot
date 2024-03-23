import React, { useContext } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { CDN_URL } from "../../utils/constants";
import { GoArrowRight } from "react-icons/go";
import { BsCaretUpSquare } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";

const DishCard = ({ item }) => {
  const {
    name,
    imageId,
    price,
    description,
    isVeg,
    id: dishId,
  } = item?.card?.card?.info;

  const { cartItems, setCartItems } = useContext(GlobalContext);

  const handleAddItem = (dish) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.info.id === dish.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count++;
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        info: dish,
        count: 1,
      };
      setCartItems((prev) => [...cartItems, newItem]);
    }
  };

  const {
    name: restaurant,
    locality,
    areaName,
    id,
    avgRating,
  } = item?.card?.card?.restaurant?.info;

  return (
    <div className="mt-3">
      <div className="bg-white rounded-2xl p-4">
        <Link
          to={`/restaurants/${(restaurant || "")
            .toLowerCase()
            .replace(/\s/g, "-")}-${(locality || "")
            .toLowerCase()
            .replace(/\s/g, "-")}-${(areaName || "")
            .toLowerCase()
            .replace(/\s/g, "-")}-${id}`}
        >
          <div className="text-sm mt-1 flex items-center justify-between">
            <div className="">
              <p className="text-gray-600 font-extrabold truncate max-w-80">
                {restaurant}
              </p>
              <div className="flex items-center mt-1 text-gray-500">
                <TiStarFullOutline className="text-base rounded-full mr-1 mb-[1px]" />
                <h5 className="font-medium text-xs ">
                  {avgRating} {" . "}{" "}
                  {item?.card?.card?.restaurant?.info.sla.deliveryTime || ""}{" "}
                  MINS
                </h5>
              </div>
            </div>
            <div className="text-gray-400 text-2xl mr-1 font-light">
              <GoArrowRight />
            </div>
          </div>
        </Link>
        <div className="my-3">
          <hr className="border-dotted "></hr>
        </div>

        <div className="mb-3 flex items-center gap-1">
          {isVeg ? (
            <FaCircle className="text-green-500 text-sm" />
          ) : (
            <BsCaretUpSquare className="text-red-600" />
          )}
          {item?.card?.card?.info.ribbon.text ? (
            <TiStarFullOutline className="text-[16px] text-custom-orange" />
          ) : (
            ""
          )}
          <h5 className="text-xs font-bold text-custom-orange">
            {item?.card?.card?.info.ribbon.text || ""}
          </h5>
        </div>

        <div className="lg:w-[390px]">
          <div className="flex items-start">
            <div className="w-3/5">
              <h3 className="font-bold text-[16px]">{name}</h3>
              <p className="my-1">₹ {price / 100}</p>
              <div className="">
                <p className="mt-2 mb-3 text-sm lg:text-[13px] text-gray-400 pr-3 lg:pr-8 truncate-3-lines">
                  {description}
                </p>
              </div>
            </div>

            <div className="my-6 w-2/5 flex flex-col items-center">
              {imageId && (
                <img
                  src={CDN_URL + imageId}
                  alt="card image"
                  className="shadow-sm mx-1 w-32 h-[104px] lg:w-28 lg:h-24 object-cover rounded-xl inline-block border border-solid"
                />
              )}

              <button
                className={`bg-white shadow-sm text-green-500 font-medium px-6 py-[6px] lg:px-5 lg:py-1 rounded-md border border-green-500 hover:shadow-md absolute ${
                  imageId ? "mt-[75px] lg:mt-[68px]" : "mt-4"
                }`}
                onClick={() => handleAddItem(item?.card?.card?.info)} // Corrected
              >
                ADD <span className="absolute text-[9px] text-right ">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
