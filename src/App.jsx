import React from "react";
import Header from "./components/header//Header";
import SearchFood from "./components/FoodSearch/SearchFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import GlobalProvider from "./contexts/GlobalProvider";
import RestaurantMenu from "./components/restaurant/RestaurantMenu";
import SearchResult from "./components/FoodSearch/SearchResult";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <GlobalProvider>
      <div className="font-lato">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchFood />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurants/:resID" element={<RestaurantMenu />} />
            <Route
              path="/restaurants/search/:query"
              element={<SearchResult />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
};

export default App;
