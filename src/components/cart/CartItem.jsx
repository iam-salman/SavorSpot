import { CDN_URL } from "../../utils/constants";

const CardItem = ({ item }) => {
  const { name, price, defaultPrice, imageId } = item?.infoData?.card?.info;
  return (
    <div className="flex justify-around my-2 px-3 py-2 bg-gray-50 border-b-2 border-gray-300">
      <div className="my-6 text-right w-3/12">
        {imageId ? (
          <img
            src={CDN_URL + imageId}
            alt="card image"
            className=" shadow-md mx-1 w-28"
          />
        ) : (
          ""
        )}
      </div>

      <div className="">
        <h4 className="font-bold mt-3">{name}</h4>
        <h5 className="font-medium mt-4 mb-3 ml-2">
          ₹{price / 100 || defaultPrice / 100}{" "}
          <span className="ml-56 font-medium border border-gray-300 px-2 py-1 text-green-500 shadow-md">
            <button className="hover:text-green-700">
              <i className="ri-subtract-fill font-extrabold pr-2"></i>
            </button>{" "}
            2
            <button className="hover:text-green-700">
              <i className="ri-add-fill font-extrabold pl-2"></i>
            </button>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default CardItem;
