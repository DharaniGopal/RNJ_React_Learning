import { useState, useEffect } from "react";
import { RESTARENTS } from "./contants";

const useListOfRestarent = () => {
  const [listOfRestarent, setListOfRestarent] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTARENTS);

    const json = await data.json();

    const restarents = json.data?.cards?.filter((res) => res?.card?.card?.info);

    // const restarents =
    //   json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
    //     (restaurant) => restaurant.info
    //   );

    // console.log(json?.data?.cards);

    setListOfRestarent(restarents);
    setFilteredListOfRes(restarents);
  };

  return {
    listOfRestarent,
    filteredListOfRes,
    setFilteredListOfRes,
  };
};

export default useListOfRestarent;
