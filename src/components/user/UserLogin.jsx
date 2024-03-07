import React, { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import LoginPage from "./Login";
import GlobalContext from "../../contexts/GlobalContext";
import SignUp from "./SignUp";

const UserLogin = ({ setLoginPage }) => {
  const [showLogin, setShowLogin] = useState(false);

  const { isLogin, setIsLogin } = useContext(GlobalContext);

  useEffect(() => {
    setShowLogin(true);
  }, []);

  return (
    <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-65 overflow-hidden flex justify-end items-center">
      <div
        className={`fixed h-full w-full md:w-[580px] bg-white z-50 shadow-2xl transition-transform duration-500 ${
          showLogin ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <div className=" bg-white">
          <div
            className="ml-8 mr-4 lg:ml-40 mt-8"
            onClick={() => {
              setShowLogin(false);

              setTimeout(() => {
                setLoginPage(false);
              }, 500);
            }}
          >
            <RxCross2 className="text-2xl lg:text-xl cursor-pointer" />
          </div>

          {isLogin ? (
            <LoginPage setIsLogin={setIsLogin} />
          ) : (
            <SignUp setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
