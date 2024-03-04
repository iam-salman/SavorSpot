import React from "react";

const HomeShimmer = () => {
  return (
    <div className="w-[145px] mx-1 flex-col items-center my-5 lg:w-64">
      <div className="w-[145px] h-48 object-cover rounded bg-gray-200 lg:w-64 lg:h-40"></div>
      <div className="mb-2 p-3">
        <h3 className="my-3 font-bold truncate w-28 lg:w-40 py-[5px] bg-gray-200"></h3>
        <h5 className="text-slate-600 my-3 font-medium text-sm truncate py-[5px] w-16 lg:w-24 bg-gray-200"></h5>
      </div>
    </div>
  );
};

export default HomeShimmer;
