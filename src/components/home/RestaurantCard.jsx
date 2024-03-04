import { CDN_URL } from "../../utils/constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="w-[145px] mx-1 flex-col items-center my-3 transition-all duration-200 hover:scale-90 lg:w-64">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
        className="w-[145px] h-48 object-cover rounded-2xl lg:w-64 lg:h-40"
      />
      <div className=" mb-2 p-3">
        <h3 className="my-1 font-bold truncate">{name}</h3>
        <h5 className="text-slate-600 my-1 font-medium text-sm truncate">
          {cuisines.join(", ")}
        </h5>

        <h5 className="font-medium text-sm">
          <MdStars className="inline text-green-700 rounded-full mr-1 mb-1 text-lg" />
          {avgRating} • {resData.info.sla.deliveryTime} mins
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
