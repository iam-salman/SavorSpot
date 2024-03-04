import { useEffect, useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { PRE_SEARCH_API, SEARCH_API } from "../../utils/constants";
import Cuisine from "./Cuisine";
import GlobalContext from "../../contexts/GlobalContext";
import SearchSuggestion from "./SearchSuggestion";

const SearchFood = () => {
  const [cuisine, setCuisine] = useState([]);
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [query, setQuery] = useState("");
  const { coordinates } = useContext(GlobalContext);
  const { lat, lng } = coordinates;
  const preSearchApi = PRE_SEARCH_API + `${lat}%26lng%3D${lng}`;
  const searchApi =
    SEARCH_API +
    `lat%3D${lat}%26lng%3D${lng}%26str%3D${query}%26trackingId%3Dnull`;

  const fetchData = async (api) => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (api === preSearchApi) {
        setCuisine(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
        );
      } else {
        setSearchSuggestion(data?.data?.suggestions);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(preSearchApi);
  }, [preSearchApi]);

  useEffect(() => {
    if (query.trim() !== "") {
      const timer = setTimeout(() => {
        fetchData(searchApi);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [searchApi, query]);

  return (
    <div className="lg:w-3/5 mx-auto px-4 lg:px-10 ">
      <div className="sticky top-16 bg-white w-full pt-12 pb-8">
        <div className="">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="border-2 border-gray-300 w-full px-6 py-3 rounded-sm outline-none focus:shadow-md font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <FiSearch className="text-xl -ml-9 inline text-gray-600" />
        </div>
      </div>

      <div className="">
        {query.length === 0 ? (
          <div className="px-4 ">
            <p className="font-extrabold text-xl text-gray-700 text-start">
              Popular Cuisines
            </p>

            <div className="mt-8 flex">
              {cuisine.map((item) => {
                return <Cuisine key={item?.id} item={item} />;
              })}
            </div>
          </div>
        ) : (
          searchSuggestion.map((suggestion, index) => (
            <SearchSuggestion key={index} suggestion={suggestion} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchFood;
