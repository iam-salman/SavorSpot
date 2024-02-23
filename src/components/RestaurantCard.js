import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="w-72 flex-col items-center my-5">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
        className="w-72 h-44 object-cover rounded-2xl"
      />
      <div className="mx-2 mb-2 p-3">
        <h3 className="my-1 font-bold truncate">{name}</h3>
        <h5 className="text-slate-600 my-1 font-medium text-sm truncate">
          {cuisines.join(", ")}
        </h5>

        <h5 className="font-medium text-sm">
          {avgRating} ⭐ • {resData.info.sla.deliveryTime} mins
        </h5>
      </div>
    </div>
  );
};

export const PromotedWithLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute font-bold text-sm bg-slate-950 text-white px-2 py-1 my-2 -ml-2 shadow-lg">
          LOVED BY MORE
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
