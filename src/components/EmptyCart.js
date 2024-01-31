import emptyCartImage from "../../images/emptyCart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="w-1/2 mx-auto my-10 p-8">
      <div className="my-20 mx-auto text-center">
        <img src={emptyCartImage} className="mx-auto text-center w-72"></img>
        <h2 className="text-gray-900 font-medium text-xl ml-4">Your Cart is Empty</h2>
        <p className="text-gray-600 my-2 ml-3">You can go to home page to view more restaurants</p>
        <Link to="/"><button className="my-2 ml-5 px-4 py-2 bg-orange-500 text-white font-medium shadow-md">SEE RESTAURANTS NEAR YOU</button></Link>
      </div>
      
    </div>
  );
};

export default EmptyCart;
