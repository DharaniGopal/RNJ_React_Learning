import { CDN_URL } from "../utils/contants";

const RestarentContainer = ({ resData }) => {
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-container">
      <div className="res-card">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="csrd-img"
          className="res-image"
        />
        <h3>{name}</h3>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestarentContainer;

