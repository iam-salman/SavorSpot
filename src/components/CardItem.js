import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice"

const CardItem = (props) => {

  const { name, price, defaultPrice, description, imageId } = props?.infoData?.card?.info;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div className="flex justify-between my-5 px-3 py-2 bg-gray-50 border-b-2 border-gray-300">
      <div className="w-10/12">
        <h4 className="font-medium text-lg my-4">
          {name}
        </h4>
        <h5 className="font-medium my-2">
          ₹
          {price / 100 ||
            defaultPrice / 100}
        </h5>
        <p className="mt-2 mb-6 text-sm font-medium text-slate-600 pr-8">
          {description}
        </p>
      </div>

      <div className="my-6 text-right w-2/12">
        {imageId ? (
          <img
            src={CDN_URL + imageId}
            alt="card image"
            className=" shadow-md mx-1 w-40"
          />
        ) : (
          ""
        )}

        <button className="bg-black text-white font-medium px-2 pl-3 py-[2] rounded-sm mt-3 mr-12" onClick={() => handleAddItem(props)} >ADD <i className="text-lg font-extrabold ri-add-fill"></i></button>
      </div>
    </div>
  );
};

export default CardItem;
