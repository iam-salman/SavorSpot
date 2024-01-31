import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (cartItems.length === 0) ? <EmptyCart/> : (
    <div className="w-1/2 mx-auto my-10 p-8">
      <h1 className="font-bold text-3xl mb-5">
        Items in <i className="ri-shopping-cart-2-line text-4xl"></i>
      </h1>
      <div className="text-right mr-4"><button className="px-4 py-2 font-bold text-white bg-red-600 border border-gray-200 shadow-lg" onClick={handleClearCart}>CLEAR CART</button></div>
      <div className="p-3 text-justify leading-8">
        {cartItems.map((item) => (
          <CartItem key={item.infoData.card.info.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
