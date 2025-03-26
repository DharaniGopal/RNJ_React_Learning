import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-60 p-2 w-7.5/12 ">
      <h1 className="m-4 p-4 font-bold text-center">CART</h1>
      <div className="flex justify-end">
        <button
          className="px-10 py-2 rounded-lg shadow-lg bg-amber-400 text-black font-bold"
          onClick={handelClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center font-semibold text-gray-500">
          Your Cart is Empty
        </p>
      ) : (
        <div>
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
