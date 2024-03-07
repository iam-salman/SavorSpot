import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const PriceCalc = () => {
  const [price, setPrice] = useState(0);

  const { cartItems } = useContext(GlobalContext);
  const calculatePrice = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += (item.info.price * item.count) / 100;
    });

    total = total.toFixed(2);

    setPrice(parseFloat(total));
  };

  useEffect(() => {
    calculatePrice();
  }, [cartItems]);

  return (
    <div className="md:mt-16 mt-10 w-full  px-3 ">
      <div className="mx-3 px-6 my-4 py-4 shadow rounded-md text-gray-700">
        <div className="">
          <h3 className="text-2xl font-bold">Order Summary</h3>
          <hr className="mt-4 mb-3" />
        </div>
        <div className="">
          <div className="font-medium text-lg flex justify-between mb-4">
            <p className="">Price</p>
            <p className="font-semibold">₹ {price}</p>
          </div>
          <div className="font-medium text-lg flex justify-between mb-5">
            <p className="">Discount (10%)</p>
            <p className="font-semibold">- ₹ {(price / 10).toFixed(2)}</p>
          </div>

          <div className="font-medium text-lg flex justify-between mb-5">
            <p className="">Delivery charges (5%)</p>
            <p className="font-semibold">+ ₹ {(price / 20).toFixed(2)}</p>
          </div>

          <p className="text-sm">
            You'll save ₹{(price / 10).toFixed(2)} on this order 🎉
          </p>
        </div>

        <hr className="mt-4" />

        <div className="font-bold text-xl flex justify-between mt-3">
          <p className="">Total Amount</p>
          <p className="text-custom-orange">
            ₹ {(price - price / 10 + price / 20).toFixed(2)}
          </p>
        </div>

        <hr className="mt-4" />

        <div className="bg-custom-orange text-center rounded-lg mt-4">
          <p className="px-5 py-3 text-white font-bold">PLACE ORDER</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCalc;
