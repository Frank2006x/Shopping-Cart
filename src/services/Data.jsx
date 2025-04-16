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
        const data = await fetch("https://api.rawg.io/api/games?key=9089809c8f4c48c78233c2c5373a411b&page_size=20");
        const response = await data.json();
        setProduct(response.results);
        setTimeout(()=>{setIsLoading(false)}, 2000);
        console.log(response.results);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
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
