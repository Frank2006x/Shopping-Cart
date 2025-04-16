import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Loader from "../UI/Loader";

const Data = ({ setProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
        const response = await data.json();
        setProduct(response);
        setTimeout(()=>{setIsLoading(false)}, 2000);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading &&
        createPortal(<Loader/>, document.getElementById("overlay"))}
    </>
  );
};

export default Data;
