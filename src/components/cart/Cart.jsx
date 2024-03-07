import { useContext } from "react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import GlobalContext from "../../contexts/GlobalContext";
import PriceCalc from "./PriceCalc";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(GlobalContext);

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="lg:flex lg:justify-between lg:w-3/4 lg:gap-20 mx-auto lg:pt-10 pt-4 md:pt-6 mb-20">
      <div className="lg:w-1/2">
        <h1 className="font-bold lg:font-extrabold lg:text-3xl text-2xl mb-5 ml-5">
          Cart
        </h1>

        <div className="">
          {cartItems.map((item) => {
            return <CartItem key={item.info.id} item={item} />;
          })}
        </div>
      </div>

      <div className="lg:w-1/2">
        <PriceCalc />
      </div>
    </div>
  );
};

export default Cart;
