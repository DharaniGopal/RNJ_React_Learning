import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/cartSlice";

const ItemList = ({ items, showAddButton }) => {
  console.log(items);
  const dispatch = useDispatch();

  const handelAddItem = (items) => {
    dispatch(addItem(items));
  };

  const handelRemoveItem = (items) => {
    dispatch(removeItem(items.card.info.id));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-2 my-2 border-b-2 border-b-gray-200 flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className=" font-bold text-gray-700 text-lg">
                {item.card.info.name}
              </span>
              <h1 className="text-black font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h1>
            </div>
            <p className="text-gray-600 text-md">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-3 relative">
            <img
              className="rounded-3xl w-full"
              src={CDN_URL + item.card.info.imageId}
            />
            <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2">
              {showAddButton ? (
                <button
                  className="px-10 py-2 rounded-lg shadow-lg bg-white text-emerald-600 font-bold"
                  onClick={() => handelAddItem(item)}
                >
                  ADD
                </button>
              ) : (
                <button
                  className="px-10 py-2 rounded-lg shadow-lg bg-white text-emerald-600 font-bold"
                  onClick={() => handelRemoveItem(item)}
                >
                  REMOVE
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
