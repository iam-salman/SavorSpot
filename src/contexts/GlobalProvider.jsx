import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({
    lat: 28.7040592,
    lng: 77.10249019999999,
    place: "Delhi, India",
  });

  const [searchPlace, setSearchPlace] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        coordinates,
        setCoordinates,
        searchPlace,
        setSearchPlace,
        loginPage,
        setLoginPage,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
