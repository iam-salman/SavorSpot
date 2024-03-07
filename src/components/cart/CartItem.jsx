import { CDN_URL } from "../../utils/constants";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const CardItem = ({ item }) => {
  const { name, price, description, imageId, id, defaultPrice } = item.info;

  const { cartItems, setCartItems } = useContext(GlobalContext);

  const handleDeleteItem = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.info.id === id
    );

    if (itemIndex !== -1 && cartItems[itemIndex].count > 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].count--;

      if (updatedCartItems[itemIndex].count === 0) {
        updatedCartItems.splice(itemIndex, 1);
      }

      setCartItems(updatedCartItems);
    }
  };

  const handleAddItem = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.info.id === id
    );

    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].count++;

    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = () => {
    const updatedCartItems = [...cartItems];

    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.info.id === id
    );

    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {}, [item]);

  return (
    <div className="rounded-2xl bg-gray-50 md:mt-6 mt-4 md:mx-4">
      <div className="flex items-center gap-3  mx-3 py-4">
        <div className="">
          {imageId && (
            <img
              src={CDN_URL + imageId}
              alt="card image"
              className="shadow-sm mx-1 w-[90px] h-[94px] md:w-32 md:h-32 object-cover rounded-xl inline-block border border-solid"
            />
          )}
        </div>

        <div className=" ">
          <div className="">
            <h3 className="font-extrabold truncate  text-gray-700 max-w-52 md:max-w-none">
              {name}
            </h3>

            <h5 className="font-bold text-sm mt-1 text-gray-600 truncate max-w-52">
              ₹ {price / 100 || defaultPrice / 100}
            </h5>
          </div>

          <div className=" flex items-center justify-start gap-6 md:gap-16 text-xl mt-3">
            <div className="flex items-center justify-center  bg-gray-100 text-green-500 border border-gray-300 px-2">
              <HiMinus
                className="cursor-pointer"
                onClick={() => handleDeleteItem(item)}
              />
              <p className=" text-black text-base font-bold px-2 py-1">
                {item.count}
              </p>
              <HiPlus
                className="cursor-pointer"
                onClick={() => handleAddItem(item)}
              />
            </div>
            <RiDeleteBin6Line
              className="text-2xl hover:text-red-600"
              onClick={() => handleRemoveItem()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
