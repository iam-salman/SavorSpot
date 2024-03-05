import { CDN_URL } from "../../utils/constants";

const CardItem = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props?.infoData?.card?.info;

  const handleAddItem = (item) => {};

  // Function to truncate description
  const truncateDescription = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="flex justify-between mt-4 lg:px-3 py-2">
        <div className="w-1/2 lg:w-9/12">
          <h4 className="font-bold mt-4">{name}</h4>
          <h5 className="font-bold text-sm text-gray-500">
            ₹{price / 100 || defaultPrice / 100}
          </h5>
          <p className="mt-2 mb-6 lg:text-[13px] text-gray-400 pr-3 lg:pr-8 truncate-3-lines">
            {description}
          </p>
        </div>

        <div className="my-6 w-1/2 lg:w-2/12 flex flex-col items-center">
          {imageId && (
            <img
              src={CDN_URL + imageId}
              alt="card image"
              className="shadow-sm mx-1 w-36 h-36 lg:w-28 lg:h-24 object-cover rounded-xl inline-block border border-solid"
            />
          )}

          <button
            className={`bg-white shadow-sm text-green-500 font-medium px-8 py-2 lg:px-5 lg:py-1 rounded-md border border-green-500 hover:shadow-md absolute ${
              imageId ? "mt-28 lg:mt-[68px]" : "mt-4"
            }`}
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
