import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import { BsCaretUpSquare } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import GlobalContext from "../../contexts/GlobalContext";

const CardItem = (props) => {
  const { name, price, defaultPrice, description, imageId, isVeg } =
    props?.infoData?.card?.info;

  const { cartItems, setCartItems } = useContext(GlobalContext);

  const handleAddItem = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.info.id === item?.info?.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].count++;
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        info: item?.info,
        count: 1,
      };

      setCartItems((prev) => [...cartItems, newItem]);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex items-center gap-x-1 lg:px-3">
        {isVeg ? (
          <FaCircle className="text-green-500 text-sm" />
        ) : (
          <BsCaretUpSquare className="text-red-600" />
        )}
        {props?.infoData?.card?.info?.ribbon.text ? (
          <TiStarFullOutline className="text-[16px] text-custom-orange" />
        ) : (
          ""
        )}
        <h5 className="text-xs font-bold text-custom-orange">
          {props?.infoData?.card?.info?.ribbon.text || ""}
        </h5>
      </div>
      <div className="flex justify-between lg:px-3">
        <div className="w-1/2 lg:w-9/12">
          <h4 className="font-bold mt-2">{name}</h4>
          <h5 className="font-bold text-sm text-gray-500">
            ₹{price / 100 || defaultPrice / 100}
          </h5>
          <p className="mt-2 mb-6 text-[13px] text-gray-400 pr-3 lg:pr-8 truncate-3-lines">
            {description}
          </p>
        </div>

        <div className="my-4 w-1/2 lg:w-2/12 flex flex-col items-center">
          {imageId && (
            <img
              src={CDN_URL + imageId}
              alt="card image"
              className="shadow-sm mx-1 w-28 h-28 lg:w-28 lg:h-24 object-cover rounded-xl inline-block border border-solid"
            />
          )}

          <button
            className={`bg-white shadow-sm text-xs font-extrabold text-green-500 px-[28px] py-2 rounded-md border border-gray-300 hover:shadow-md absolute ${
              imageId ? "mt-[88px] lg:mt-[68px]" : "mt-4"
            }`}
            onClick={() => handleAddItem(props?.infoData?.card)}
          >
            ADD <span className="absolute text-[9px] text-right top-1">+</span>
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default CardItem;
