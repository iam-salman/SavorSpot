import RestaurantCard, { PromotedWithLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [initialRestaurantList, setInitialRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D30.7333148%26lng%3D76.7794179%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    const initialList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setInitialRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const PromotedCardWithLabel = PromotedWithLabel(RestaurantCard);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredRestaurant = initialRestaurantList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    console.log(filteredRestaurant);

    setRestaurantList(filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <Offline />;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-0 p-0">
      <div className="flex m-12 px-8 py-1 justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 w-1/2 border-solid border-2 border-blue-700"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 rounded-sm bg-blue-700 text-white font-medium"
        >
          Search
        </button>
      </div>
      <div className="m-8">
        <button
          className="px-6 py-3 rounded-sm bg-blue-700 text-white font-medium"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-between mx-14 my-14 p-12">
        {restaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <PromotedCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
