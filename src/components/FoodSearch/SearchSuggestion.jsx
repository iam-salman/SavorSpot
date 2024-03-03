import React from "react";
import { CDN_URL } from "../../utils/constants";

const SearchSuggestion = ({ suggestion }) => {
  return (
    <div className="flex items-center hover:bg-slate-100">
      <div className="">
        <img
          src={CDN_URL + suggestion.cloudinaryId}
          alt=""
          className="w-16 h-16 object-cover rounded mx-4 my-3"
        />
      </div>
      <div className="">
        <p className="text-sm text-gray-800">{suggestion.text}</p>
        <p className="text-sm text-gray-500">{suggestion.tagToDisplay}</p>
      </div>
    </div>
  );
};

export default SearchSuggestion;
