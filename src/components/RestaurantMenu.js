import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import RestaurantItemCategory from "./RestaurantItemCategory";

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

  const { name, avgRating, cuisines, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemData =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;

  const data =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );


  return (
    <div className="w-3/5 mx-auto my-10 p-2">
      <div className="flex justify-between my-4">
        <div>
          <h2 className="font-bold my-2 text-2xl">{name}</h2>
          <p className="text-slate-600 font-medium text-md">
            {cuisines.join(", ")}
          </p>
        </div>
        <div className="flex-col justify-between items-center shadow-md p-2 m-2 rounded-md ">
          <h4 className="m-2 font-bold">⭐ {avgRating}</h4>
          <hr></hr>
          <p className="text-xs my-1 font-medium">{totalRatingsString}</p>
        </div>
      </div>

      <div>
        <hr className="my-5"></hr>
      </div>

      <div className="w-1/4 flex justify-between my-4 font-medium">
        <div className="flex">
          <i className="ri-timer-2-fill pr-2"></i>
          <h5>
            {resInfo?.cards[0]?.card?.card?.info?.sla.deliveryTime + " MIN"}
          </h5>
        </div>

        <div className="flex">
          <i className="ri-money-rupee-circle-line px-2"></i>
          <h5>{costForTwoMessage}</h5>
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
              setShowIndex={showIndex === index ? () => setShowIndex(null) : () => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
