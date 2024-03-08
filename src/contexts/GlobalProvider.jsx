import { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({
    lat: 28.7040592,
    lng: 77.10249019999999,
    place: "Delhi, India",
  });

  // state to show Search place or not
  const [searchPlace, setSearchPlace] = useState(false);

  // state to show login/signup page or not
  const [loginPage, setLoginPage] = useState(false);

  // state to choose which page to show login or signup
  const [isLogin, setIsLogin] = useState(true);

  const auth = JSON.parse(localStorage.getItem("loggedin"));

  // state to show is user logged in or not

  const [isLogged, setIsLogged] = useState(auth);

  // cart items will be placed in this arra

  const [cartItems, setCartItems] = useState([]);

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
        isLogged,
        setIsLogged,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
