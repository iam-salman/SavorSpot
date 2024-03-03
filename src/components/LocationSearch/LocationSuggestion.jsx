import React, { useContext } from "react";
import { RiMapPin3Line } from "react-icons/ri";
import GlobalContext from "../../contexts/GlobalContext";
import { COORDINATES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const LocationSuggestion = ({ area }) => {
  const { setCoordinates, setSearchPlace } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleCoordinates = async () => {
    try {
      setSearchPlace(false);
      const api = COORDINATES + area.place_id;
      const response = await fetch(api);
      const data = await response.json();

      setCoordinates({
        lat: data?.data[0]?.geometry?.location?.lat,
        lng: data?.data[0]?.geometry?.location?.lng,
        place: data?.data[0].formatted_address,
      });

      navigate("/");
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  if (!area) {
    return null;
  }

  const { main_text, secondary_text } = area.structured_formatting;

  return (
    <div className="px-6 py-4 cursor-pointer" onClick={handleCoordinates}>
      <div className="flex items-center gap-2">
        <RiMapPin3Line className="text-xl text-gray-600" />
        <span className="text-sm hover:text-custom-orange">{main_text}</span>
      </div>
      <span className="text-xs px-8 text-gray-500 truncate block overflow-hidden">
        {secondary_text}
      </span>
      <hr className="border-dotted border-gray-400 ml-7 mt-4" />
    </div>
  );
};

export default LocationSuggestion;
