import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ item }) => {
  const { name, cloudinaryImageId, costForTwoMessage, cuisines, avgRating } =
    item?.card?.card?.info;

  return (
    <div className="rounded-2xl bg-white my-2">
      <div className="flex justify-start items-center gap-4 mx-3 py-4  lg:w-[390px] ">
        <div className="w-[90px]">
          {cloudinaryImageId && (
            <img
              src={CDN_URL + cloudinaryImageId}
              alt="card image"
              className="shadow-sm mx-1 w-[90px] h-[94px] lg:w-28 lg:h-24 object-cover rounded-xl inline-block border border-solid"
            />
          )}
        </div>

        <div className="">
          <h3 className="font-extrabold truncate text-gray-700 max-w-52">
            {name}
          </h3>
          <div className="flex items-center gap-2 font-bold mt-1 text-gray-500">
            <TiStarFullOutline className="text-base rounded-full mb-[1px]" />
            <h5 className=" text-xs ">
              {avgRating} {" . "} {item?.card?.card?.info?.sla?.deliveryTime}{" "}
              MINS
            </h5>
            <h5 className="text-xs ">{costForTwoMessage}</h5>
          </div>
          <h5 className="text-xs mt-1 text-gray-500 truncate max-w-52">
            {cuisines.join(", ")}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
