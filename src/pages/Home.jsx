import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../UI/Loader";
import InfiniteLoader from "../UI/InfiniteLoader";
import { createPortal } from "react-dom";
import Search from "../UI/Input";

import { useRef } from "react";
import { useAsyncList } from "@react-stately/data";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [onStart, setOnStart] = useState(true);
  const [startWith, setStartWith] = useState("");
  const [onSearch, setOnSearch] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOnStart(false);
    }, 3000);
  }, []);
  let list = useAsyncList({
    async load({ signal, cursor }) {
      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      let res = await fetch(
        cursor ||
          `https://api.rawg.io/api/games?key=9089809c8f4c48c78233c2c5373a411b&page=1&search=${startWith}`,
        {
          signal,
        }
      );
      let json = await res.json();
      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });
  const { ref, inView } = useInView({
    // rootMargin: '1000px', not to show loading
  });
  
  const listRef = useRef(list);
  useEffect(() => {
    try {
      list.reload();
      setOnSearch(true);
      if (startWith===""){
        setOnSearch(false)
      }
    } catch (error) {
      console.log(error);
    }
  }, [startWith]);
  
  useEffect(() => {
    listRef.current = list;
  }, [list]);
  useEffect(() => {
    if (listRef.current.items.length && inView && !list.isLoading) {
      listRef.current.loadMore();
    }
  }, [inView]);

  return (
    <>
      {onStart && createPortal(<Loader />, document.querySelector("#overlay"))}
      {!onStart && (
        <div className="flex flex-col">
          <Search setStartWith={setStartWith} />
          {!onSearch && (
            <h2 className="Search-text text-white mx-auto my-7 text-[3rem]">
              Unlock worlds. One search away.
            </h2>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-4 justify-center p-4">
        {list.items.map((item) => (
          <Card key={item.id} element={item} />
        ))}
      </div>
      <div
        ref={ref}
        className="text-center py-8 flex justify-center infiniteLoader"
      >
        {!onStart && <InfiniteLoader />}
      </div>
    </>
  );
};

export default Home;
