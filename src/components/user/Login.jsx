import React from "react";

const LoginPage = ({ setIsLogin }) => {
  return (
    <div className="">
      <div className="mx-8 lg:ml-40 mt-8 text-gray-700">
        <h1 className="font-bold text-3xl">Login</h1>
        <p className="text-sm mt-2">
          or{" "}
          <span
            className="text-custom-orange cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            create an account
          </span>
        </p>
      </div>

      <div className=" mx-8 lg:ml-40 mt-8">
        <input
          type="text"
          placeholder="Enter Name..."
          className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
        />
      </div>

      <div className=" mx-8 lg:ml-40 mt-4">
        <input
          type="email"
          placeholder="Enter Email..."
          className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
        />
      </div>
      <div className=" mx-8 lg:ml-40 mt-4">
        <input
          type="password"
          placeholder="Enter Password..."
          className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
        />
      </div>

      <div className="mx-8 lg:ml-40 mt-8 ">
        <button className="bg-custom-orange px-6 py-[14px] w-full lg:w-[360px] text-white font-bold hover:shadow-md">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
