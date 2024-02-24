import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { TbCoinRupee } from "react-icons/tb";
import { MdStars, MdTimelapse } from "react-icons/md";
import { IoBicycleSharp } from "react-icons/io5";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  const onlineStatus = useOnlineStatus();

  const [showIndex, setShowIndex] = useState(0);

  if (onlineStatus === false) {
    return <Offline />;
  }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRating,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo?.cards[2]?.card?.card?.info);

  const data =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="w-1/2 mx-auto my-10 p-2">
      <div className="flex justify-between my-4 ">
        <div>
          <h2 className="font-bold my-2 text-2xl">{name}</h2>
          <p className="text-gray-500 text-xs my-1">{cuisines.join(", ")}</p>
          <p className="text-gray-500 text-xs my-1">
            {areaName +
              ", " +
              resInfo?.cards[2]?.card?.card?.info?.sla?.lastMileTravelString}
          </p>
          <p className="text-gray-500 text-[13px] mt-3">
            <IoBicycleSharp className="inline text-xl mr-2" />
            {resInfo?.cards[2]?.card?.card?.info.feeDetails.message}
          </p>
        </div>
        <div className="flex-col justify-between items-center shadow-md p-2 mx-2 mb-2 mt-7 rounded-md">
          <h4 className="m-2 font-bold text-sm">
            <MdStars className="inline text-green-700 rounded-full mr-1 mb-1 text-lg" />{" "}
            {avgRating}
          </h4>
          <hr></hr>
          <p className="text-[10px] mb-1 mt-2 font-medium">
            {totalRatingsString}
          </p>
        </div>
      </div>

      <div>
        <hr className="my-5"></hr>
      </div>

      <div className="w-2/4 flex justify-start my-3">
        <div className="flex items-center mr-2">
          <MdTimelapse className="text-4xl px-2" />
          <h5 className="font-bold text-sm">
            {resInfo?.cards[2]?.card?.card?.info?.sla.deliveryTime
              ? `${resInfo?.cards[2]?.card?.card?.info?.sla.deliveryTime}-${resInfo?.cards[2]?.card?.card?.info?.sla.maxDeliveryTime} MIN`
              : `${resInfo?.cards[2]?.card?.card?.info?.nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime} MIN`}
          </h5>
        </div>

        <div className="flex items-center ml-2">
          <TbCoinRupee className="text-4xl px-2" />
          <h5 className="font-bold text-sm">{costForTwoMessage}</h5>
        </div>
      </div>

      <div>
        <hr className="mb-12"></hr>
      </div>

      <div className="my-2">
        {data.map((category, index) => {
          return (
            <RestaurantItemCategory
              key={category.card?.card?.title}
              itemCategory={category}
              showItem={index === showIndex ? true : false}
              setShowIndex={
                showIndex === index
                  ? () => setShowIndex(null)
                  : () => setShowIndex(index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
