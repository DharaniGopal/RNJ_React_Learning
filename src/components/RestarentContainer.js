import { CDN_URL } from "../utils/contants";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestarentContainer = ({ resData }) => {
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.card.card.info;
  const { deliveryTime } = resData?.card.card.info.sla;

  const { loggedInUser } = useContext(UserContext);

  return (
    // <div className="res-container">
    <div className="m-3.5 w-[250px] h-80 rounded-lg hover:p-0.5">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="csrd-img"
        className=" w-[350px] h-40 rounded-xl"
      />
      <div className="p-2">
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        <div className="flex">
          <h4 className="w-16 py-1">⭐{avgRating}</h4>
          <h4 className="w-20 py-1">{deliveryTime} mins</h4>
        </div>
        <h4 className="py-1">{costForTwo}</h4>
        <h4 className="py-1">{cuisines.join(", ")}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    </div>
    // </div>
  );
};

export const withPromotedRestarent = (RestarentContainer) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } =
      resData?.card.card.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className=" px-4 m-1 absolute bg-auto text-white font-semibold">
          {header} {subHeader}
        </label>
        <RestarentContainer {...props} />
      </div>
    );
  };
};

export default RestarentContainer;
