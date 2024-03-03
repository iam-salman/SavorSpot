// import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
// import { addItem } from "../utils/cartSlice";

// Card for the items which can bought from specific restaurant
const CardItem = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props?.infoData?.card?.info;

  //   const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // // Dispatch an action
    // dispatch(addItem(item));
  };

  return (
    <>
      <div className="flex justify-between mt-4 px-3 py-2">
        <div className="w-9/12">
          <h4 className="font-bold mt-4">{name}</h4>
          <h5 className="font-medium text-gray-600">
            ₹{price / 100 || defaultPrice / 100}
          </h5>
          <p className="mt-2 mb-6 text-[13px] text-gray-400 pr-8">
            {description}
          </p>
        </div>

        <div className="my-6 w-2/12">
          {imageId && (
            <img
              src={CDN_URL + imageId}
              alt="card image"
              className="shadow-sm mx-1 w-28 h-24 object-cover rounded-md inline-block border border-solid"
            />
          )}

          <button
            className="bg-white shadow-sm text-green-500 font-medium px-5 py-1 rounded-md border border-green-500 absolute -mt-7 ml-6 hover:shadow-md"
            onClick={() => handleAddItem(props)}
          >
            ADD <span className="absolute text-[9px] text-right ">+</span>
          </button>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
};

export default CardItem;
