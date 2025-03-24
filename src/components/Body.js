import { useState, useContext } from "react";
import { Link } from "react-router";

// import resList from "../utils/mocData";
import RestarentContainer, {
  withPromotedRestarent,
} from "./RestarentContainer";
// import RestarentContainer from "./RestarentContainer";
import SimmerUi from "./SimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestarent from "../utils/useListOfRestarent";
import userContext from "../utils/userContext";

let Body = () => {
  const { listOfRestarent, filteredListOfRes, setFilteredListOfRes } =
    useListOfRestarent();

  const [searchRes, setSearchRes] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestarentCardPromoted = withPromotedRestarent(RestarentContainer);

  const { loggedInUser, setUserName } = useContext(userContext);

  if (onlineStatus === false)
    return <h1>You are Offline; Please check the internet connection</h1>;

  return listOfRestarent.length === 0 ? (
    <SimmerUi />
  ) : (
    <div className="bg-gray-50">
      <div className="mx-5 px-6 flex justify-between">
        <div className="search m-4 p-4">
          <input
            alt="search-bar"
            type="text"
            className="border border-solid border-black p-1 rounded-sm"
            placeholder="Search"
            value={searchRes}
            onChange={(e) => {
              // e.target.value == ""
              //   ? setFilteredListOfRes(listOfRestarent):
              setSearchRes(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 py-1 bg-amber-300 rounded-sm"
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
        <div className="search m-4 p-4 flex items-center">
          <div className="m-4 px-4 py-1 bg-amber-300 rounded-sm">
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
          <div className="m-4 px-4 py-1 rounded-sm">
            <label>UserName: </label>
            <input
              className="p-1 border border-black rounded-sm"
              // value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="mx-13 px-2">
        <hr className="border border-solid border-gray-300" />
        <h1 className="p-4 font-bold text-2xl">
          Restaurants with online food delivery
        </h1>
      </div>
      <div className="flex flex-wrap mx-9 px-6">
        {filteredListOfRes.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={/resInfo/ + restaurant.card.card.info.id}
          >
            {restaurant.card.card.info?.aggregatedDiscountInfoV3 ? (
              <RestarentCardPromoted resData={restaurant} />
            ) : (
              <RestarentContainer resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
