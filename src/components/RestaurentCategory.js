import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div>
      <div className="my-4 p-3 bg-gray-50 shadow-md  ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItem && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurentCategory;
