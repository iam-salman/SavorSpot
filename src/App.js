import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header></Header>
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
