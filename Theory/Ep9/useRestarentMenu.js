import { useState, useEffect } from "react";
import { RES_INFO } from "../utils/contants";

const useRestarentMenu = (resTd) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_INFO + resTd);
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestarentMenu;
