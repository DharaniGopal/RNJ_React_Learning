import RestarentContainer from "./RestarentContainer";
import resList from "../utils/mocData";
import { useState } from "react";

const Body = () => {
  const [listOfRestarent, setListOfRestarent] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">
        <input
          alt="search-bar"
          type="text"
          className="search-bar"
          placeholder="Search"
        />
      </div> */}
      <div className="btn-top-res">
        <button
          className="top-rate-btn"
          onClick={() => {
            const restarentlist = listOfRestarent.filter(
              (restarent) => restarent.info.avgRating > 4
            );
            setListOfRestarent(restarentlist);
          }}
        >
          Top Rated Restarents
        </button>
      </div>
      <div>
        {listOfRestarent.map((restaurant) => (
          <RestarentContainer key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

