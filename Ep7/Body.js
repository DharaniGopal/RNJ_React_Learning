import { useState, useEffect } from "react";
import { RESTARENTS } from "../utils/contants";
import { Link } from "react-router";

// import resList from "../utils/mocData";
import RestarentContainer from "./RestarentContainer";
import SimmerUi from "./SimmerUi";

let Body = () => {
  const [listOfRestarent, setListOfRestarent] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTARENTS);

    const json = await data.json();

    const restarents = json.data?.cards?.filter((res) => res?.card?.card?.info);

    setListOfRestarent(restarents);
    setFilteredListOfRes(restarents);
  };

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

