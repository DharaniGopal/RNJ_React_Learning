import SimmerUi from "./SimmerUi";
import { useParams } from "react-router";
import useRestarentMenu from "../utils/useRestarentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestarentMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <SimmerUi />;

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
    areaName,
  } = resInfo.cards[2]?.card?.card?.info;

  console.log(resInfo.cards[2]?.card?.card?.info);

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="mx-60 p-2 w-7.5/12 ">
      <div>
        <h1 className="my-4 text-3xl font-bold">{name}</h1>
      </div>
      <div className="p-4 border border-gray-400 shadow-2xl rounded-2xl">
        <h1 className="p-1 font-bold">
          ⭐ {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </h1>
        <h2 className="p-1 font-bold text-sm text-amber-600">{cuisines}</h2>
        <h2 className="p-1 font-bold text-sm">Outlet {areaName}</h2>
        <h2 className="p-1 font-bold text-sm">
          {sla.minDeliveryTime}-{sla.maxDeliveryTime}
        </h2>
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurentCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
      {/* <div>
        <h1 className="mx-4 my-10 text-xl font-bold">Deals for you</h1>
      </div>
      <div className="p-4 border border-gray-400 shadow-2xl rounded-2xl">
        <h1 className="p-1 font-bold">
          🟢 {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </h1>
        <h2 className="p-1 font-bold text-sm text-amber-600">{cuisines}</h2>
        <h2 className="p-1 font-bold text-sm">Outlet {areaName}</h2>
        <h2 className="p-1 font-bold text-sm">
          {sla.minDeliveryTime}-{sla.maxDeliveryTime}
        </h2>
      </div> */}
    </div>
  );
};

export default RestaurentMenu;
