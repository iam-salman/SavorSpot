import { useState, useEffect } from "react";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { TbCoinRupee } from "react-icons/tb";
import { MdStars, MdTimelapse } from "react-icons/md";
import { IoBicycleSharp } from "react-icons/io5";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resID } = useParams();

  const parts = resID.split("-");
  const id = parts[parts.length - 1];

  const api =
    MENU_API +
    `30.7046486%26lng%3D76.71787259999999%26restaurantId%3D${id}%26catalog_qa%3Dundefined%26submitAction%3DENTER`;

  const fetchMenu = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }

      const menuData = await response.json();
      setResInfo(menuData);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  console.log(resInfo?.data?.cards[0]?.card?.card?.info);

  const data =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
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
              resInfo?.data?.cards[0]?.card?.card?.info?.sla
                ?.lastMileTravelString}
          </p>
          <p className="text-gray-500 text-[13px] mt-3">
            <IoBicycleSharp className="inline text-xl mr-2" />
            {resInfo?.data?.cards[0]?.card?.card?.info.feeDetails.message}
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
            {resInfo?.data?.cards[0]?.card?.card?.info?.sla.deliveryTime
              ? `${resInfo?.data?.cards[0]?.card?.card?.info?.sla.deliveryTime}-${resInfo?.data?.cards[0]?.card?.card?.info?.sla.maxDeliveryTime} MIN`
              : `${resInfo?.data?.cards[0]?.card?.card?.info?.nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime} MIN`}
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
