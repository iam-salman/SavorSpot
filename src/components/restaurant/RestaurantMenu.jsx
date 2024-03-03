import { useState, useEffect, useContext } from "react";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import RestaurantItemCategory from "./RestaurantItemCategory";
import { TbCoinRupee } from "react-icons/tb";
import { MdStars, MdTimelapse } from "react-icons/md";
import { IoBicycleSharp } from "react-icons/io5";
import { MENU_API } from "../../utils/constants";
import GlobaContext from "../../contexts/GlobalContext";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resID } = useParams();

  const parts = resID.split("-");
  const id = parts[parts.length - 1];

  const { coordinates } = useContext(GlobaContext);

  const { lat, lng } = coordinates;

  const api =
    MENU_API +
    `${lat}%26lng%3D${lng}%26restaurantId%3D${id}%26catalog_qa%3Dundefined%26submitAction%3DENTER`;

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
  }, [coordinates]);

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
      <div className="flex justify-between my-4 items-center">
        <div>
          <h2 className="font-extrabold text-gray-700 my-2 text-xl">{name}</h2>
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
        <div className="flex-col justify-between items-center shadow-sm px-1 py-1  rounded-md border border-gray-200">
          <h4 className="mx-1 mt-1 font-extrabold text-sm text-green-800">
            <MdStars className="inline  rounded-full mr-1 mb-1 text-lg" />{" "}
            {avgRating}
          </h4>
          <hr className="border-dotted my-2"></hr>
          <p className="text-[10px] mb-1 font-bold text-gray-600">
            {totalRatingsString}
          </p>
        </div>
      </div>

      <div>
        <hr className="border-dotted my-5 bg-gray-400"></hr>
      </div>

      <div className="w-2/4 flex justify-start my-3">
        <div className="flex items-center mr-2">
          <MdTimelapse className="text-4xl px-2" />
          <h5 className="font-extrabold text-sm">
            {resInfo?.data?.cards[0]?.card?.card?.info?.sla.deliveryTime
              ? `${resInfo?.data?.cards[0]?.card?.card?.info?.sla.deliveryTime}-${resInfo?.data?.cards[0]?.card?.card?.info?.sla.maxDeliveryTime} MIN`
              : `${resInfo?.data?.cards[0]?.card?.card?.info?.nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime} MIN`}
          </h5>
        </div>

        <div className="flex items-center ml-2">
          <TbCoinRupee className="text-4xl px-2" />
          <h5 className="font-extrabold text-sm">{costForTwoMessage}</h5>
        </div>
      </div>

      <div>
        <hr className="border-dotted mb-12 bg-gray-400"></hr>
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
