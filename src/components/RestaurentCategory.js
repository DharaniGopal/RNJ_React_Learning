// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    // setShowIndex();
    setShowIndex((prevIndex) => (prevIndex === data.title ? null : data.title));
  };

  return (
    <div>
      <div className="my-4 p-3 bg-gray-50 shadow-md  ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItem ? "🔼" : "🔽"}</span>
        </div>
        <div>{showItem && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurentCategory;
