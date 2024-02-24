import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cityReducer from "./citySlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    city: cityReducer,
  },
});

export default appStore;
