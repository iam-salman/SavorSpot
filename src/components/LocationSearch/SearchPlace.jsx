import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiGps } from "react-icons/ci";
import LocationSuggestion from "./LocationSuggestion";
import { PLACE_SUGGESTION_API } from "../../utils/constants";

const SearchArea = ({ setSearchArea }) => {
  const [listArea, setListArea] = useState([]);
  const [place, setPlace] = useState("");
  const [showSearchArea, setShowSearchArea] = useState(false);

  const handlePlaceFetch = async () => {
    const data = await fetch(PLACE_SUGGESTION_API + place);
    const json = await data.json();
    setListArea(json?.data);
  };

  useEffect(() => {
    if (place) {
      const timer = setTimeout(() => {
        handlePlaceFetch();
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [place]);

  useEffect(() => {
    setShowSearchArea(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-65 z-40 overflow-hidden">
      <div
        className={`fixed left-0 top-0 h-full w-full md:w-[580px] bg-white z-50 shadow-2xl transition-transform duration-500 ${
          showSearchArea
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <div className="sticky top-8 z-30 bg-white">
          <div className="sticky top-8 ml-8 mr-4 lg:ml-40 mt-8">
            <RxCross2
              className="text-2xl lg:text-xl cursor-pointer"
              onClick={() => {
                setShowSearchArea(false);
                setTimeout(() => {
                  setSearchArea(false);
                }, 500);
              }}
            />
          </div>

          <div className=" ml-8 mr-4 lg:ml-40 mt-8">
            <input
              type="text"
              placeholder="Search for area, street name.."
              className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none focus:shadow-md"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>

          <div className="ml-8 mr-4 lg:ml-40 mt-8 hidden">
            <div className=" px-6 py-4 w-full lg:w-[360px] border-2 border-solid-gray-500 font-medium text-sm outline-none focus:shadow-md ">
              <div className="flex items-center gap-2">
                <CiGps className="text-2xl text-gray-800 inline" />
                <span className="">Get Current Location</span>
              </div>
              <span className="text-xs px-8 text-gray-500">Using GPS</span>
            </div>
          </div>
        </div>

        <div className="ml-8 mr-4 lg:ml-40 mt-8 z-30">
          <div className="w-full lg:w-[360px]">
            {listArea &&
              listArea.map((area) => {
                return <LocationSuggestion key={area?.place_id} area={area} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
