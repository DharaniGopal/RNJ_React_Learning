import { CDN_URL } from "../utils/contants";

const RestarentContainer = ({ resData }) => {
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.card.card.info;
  const { deliveryTime } = resData?.card.card.info.sla;
  return (
    // <div className="res-container">
    <div className="m-3.5 w-[220px] bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="csrd-img"
        className=" w-60 h-40 rounded-t-lg"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <h3 className="w-53 font-bold py-1 text-lg">{name}</h3>
          <h4 className="w-16 py-1">{avgRating}🟢</h4>
        </div>
        <div className="flex justify-between">
          <h4 className="w-53 py-1">{costForTwo}</h4>
          <h4 className="w-20 py-1">{deliveryTime} mins</h4>
        </div>
        <h4 className="py-1">{cuisines.join(", ")}</h4>
      </div>
    </div>
    // </div>
  );
};

export default RestarentContainer;
