import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";

const LoginPage = ({ setIsLogin }) => {
  const navigate = useNavigate();

  const { setLoginPage, setIsLogged } = useContext(GlobalContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = existingUsers.find((user) => user.email === email);

    if (!existingUser) {
      alert("User does not exist with this email.");
    } else {
      if (existingUser.password === password) {
        console.log("User logged in successfully:", existingUser);

        setLoginPage(false);
        setIsLogged(true);

        const loggedin = {
          email: email,
        };

        localStorage.setItem("loggedin", true);

        navigate("/");
      } else {
        alert("Email or Password is incorrect.");
      }
    }
  };

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

      <form onSubmit={handleLogin}>
        <div className=" mx-8 lg:ml-40 mt-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
            required
          />
        </div>
        <div className=" mx-8 lg:ml-40 mt-4">
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            className="px-6 py-[14px] w-full lg:w-[360px] border-2 border-solid-gray-500 font-bold text-sm outline-none"
            required
          />
        </div>
        <div className="mx-8 lg:ml-40 mt-8 ">
          <button
            type="submit"
            className="bg-custom-orange px-6 py-[14px] w-full lg:w-[360px] text-white font-bold hover:shadow-md"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
