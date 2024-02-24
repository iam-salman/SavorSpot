import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useSelector } from "react-redux";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  const { lat, lng, loading, error } = useSelector((state) => state.city);

  useEffect(() => {
    fetchMenu();
  }, [lat, lng]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D${lat}%26lng%3D${lng}%26restaurantId%3D` +
        resID
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
