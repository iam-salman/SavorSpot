import { CUISINE_IMAGE } from "../../utils/constants";

const Cuisine = ({ item }) => {
  return (
    <div className="">
      <img src={CUISINE_IMAGE + item?.imageId} alt="" className="w-20" />
    </div>
  );
};

export default Cuisine;
