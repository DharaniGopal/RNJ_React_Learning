import SimmerUi from "./SimmerUi";
import { useParams } from "react-router";
import useRestarentMenu from "../utils/useRestarentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestarentMenu(resId);

  if (resInfo === null) return <SimmerUi />;

  const { name, cuisines, avgRating, totalRatingsString, sla } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="resMenu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>
        {avgRating} stars - {totalRatingsString}
      </h3>
      <h3>
        Deliver In: {sla?.minDeliveryTime} - {sla?.maxDeliveryTime} mins
      </h3>
      <ul>
        {itemCards.map((resMenu) => (
          <li key={resMenu.card.info.id}>
            {resMenu.card.info.name} - {resMenu.card.info.price / 100 + " Rs"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
