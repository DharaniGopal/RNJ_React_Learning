import { useState } from "react";
import { Link } from "react-router";

// import resList from "../utils/mocData";
import RestarentContainer from "./RestarentContainer";
import SimmerUi from "./SimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestarent from "../utils/useListOfRestarent";

let Body = () => {
  const { listOfRestarent, filteredListOfRes, setFilteredListOfRes } =
    useListOfRestarent();

  const [searchRes, setSearchRes] = useState("");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are Offline; Please check the internet connection</h1>;

  return listOfRestarent.length === 0 ? (
    <SimmerUi />
  ) : (
    <div className="body">
      <div className="search">
        <input
          alt="search-bar"
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchRes}
          onChange={(e) => {
            // e.target.value == ""
            //   ? setFilteredListOfRes(listOfRestarent):
            setSearchRes(e.target.value);
          }}
        />
        <button
          className="search-res"
          onClick={() => {
            const restarentSearch = listOfRestarent.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchRes.toLowerCase())
            );
            setFilteredListOfRes(restarentSearch);
          }}
        >
          Search
        </button>
      </div>
      <div className="btn-top-res">
        <button
          className="top-rate-btn"
          onClick={() => {
            const restarentlist = listOfRestarent.filter(
              (restarent) => restarent.card.card.info.avgRating > 4.3
            );
            setFilteredListOfRes(restarentlist);
          }}
        >
          Top Rated Restarents
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRes.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={/resInfo/ + restaurant.card.card.info.id}
          >
            <RestarentContainer resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
