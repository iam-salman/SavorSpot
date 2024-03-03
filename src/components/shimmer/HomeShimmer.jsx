import React from "react";

const HomeShimmer = () => {
  return (
    <div className="w-64 flex-col items-center my-5">
      <div className="w-64 h-40 object-cover rounded bg-gray-200"></div>
      <div className="mb-2 p-3">
        <h3 className="my-3 font-bold truncate w-40 py-[5px] bg-gray-200"></h3>
        <h5 className="text-slate-600 my-3 font-medium text-sm truncate py-[5px] w-24 bg-gray-200"></h5>
      </div>
    </div>
  );
};

export default HomeShimmer;
