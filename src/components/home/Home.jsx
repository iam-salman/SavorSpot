import { useContext, useState, useEffect } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { HOME_API } from "../../utils/constants";
import RestaurantCard, { PromotedWithLabel } from "./RestaurantCard";
import Shimmer from "../shimmer/Shimmer";
import { Link } from "react-router-dom";

const Home = () => {
  const { coordinates } = useContext(GlobalContext);
  const { lat, lng } = coordinates;
  const [restaurantChain, setRestaurantChain] = useState([]);
  const [onlineRestaurant, setOnlineRestaurant] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const MENU_API =
    HOME_API +
    `${lat}%26lng%3D${lng}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(MENU_API);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();

      const restaurantData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurantData) {
        console.log(restaurantData);
        setApiData(json?.data?.cards);
        setRestaurantChain(restaurantData);
        setOnlineRestaurant(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coordinates]);

  return (
    <div className="m-0 p-0">
      {loading ? (
        <Shimmer />
      ) : (
        <div className="">
          <div className="mx-4 lg:mx-20 mt-6 lg:px-20">
            {apiData && (
              <h1 className="text-xl md:text-[22px] font-extrabold">
                {apiData[1]?.card?.card?.header?.title ||
                  apiData[0]?.card?.card?.title}
              </h1>
            )}
          </div>
          <div className="flex flex-wrap justify-between mx-3 lg:mx-20 lg:px-20 py-3">
            {restaurantChain.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.name
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${restaurant.info.locality
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${restaurant.info.areaName
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
          <div className="mx-20 mt-6 px-20">
            {apiData && (
              <h1 className="text-[22px] font-extrabold">
                {apiData[2]?.card?.card?.title}
              </h1>
            )}
          </div>
          <div className="flex flex-wrap justify-between lg:mx-20 lg:px-20 py-3">
            {onlineRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.name
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${restaurant.info.locality
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${restaurant.info.areaName
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${restaurant.info.id}`}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
