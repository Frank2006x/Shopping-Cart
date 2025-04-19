import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { createPortal } from "react-dom";
import Loader from "../UI/Loader";
import Button from "../UI/AddCart";
import Card from "../components/Card";
import "swiper/css";
import "swiper/css/pagination";

const Detail = ({ cart, setCart }) => {
  const location = useLocation();
  const data = location.state || {};
  const [trendingGames, setTrendingGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (data) => {
    if (!cart.some((item)=>item.id===data.id)) {
      setCart([...cart, data]);
      console.log(cart);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const trending = await fetch(
          "https://api.rawg.io/api/games?key=9089809c8f4c48c78233c2c5373a411b&ordering=-added&page_size=50"
        );
        const trendingData = await trending.json();
        setIsLoading(false);

        setTrendingGames(trendingData.results);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      {isLoading &&
        createPortal(<Loader />, document.querySelector("#overlay"))}
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl shadow-lg"
        style={{
          background:
            "linear-gradient(343deg, rgba(10, 246, 72, 0.66), rgb(21 112 255 / 41%), rgb(17, 24, 39))",
        }}
      >
        <img
          src={data.background_image}
          alt={data.name}
          className="rounded-xl w-full object-cover h-full"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <p className="text-sm text-gray-400 mb-2">
            Released: {data.released}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            ESRB Rating: {data.esrb_rating?.name || "Not Rated"}
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Metacritic Score:{" "}
            <span className="text-green-400">{data.metacritic}</span>
          </p>
          <p className="text-sm text-gray-400 mb-2">
            User Rating:{" "}
            <span className="text-yellow-400">{data.rating} / 5</span> (
            {data.ratings_count} ratings)
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Playtime: {data.playtime} hours
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Genres:{" "}
            {data.genres?.map((genre) => genre.name).join(", ") || "N/A"}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.tags?.slice(0, 6).map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-800 text-xs px-3 py-1 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div
            onClick={() => {
              addToCart(data);
            }}
          >
            <Button />
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h2 className="text-2xl font-semibold text-white mb-6 mx-auto mt-10  border-b-2 border-green-400 inline-block pb-1">
          Screenshots
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="rounded-xl overflow-hidden my-6 w-180 "
        >
          {data.short_screenshots?.map((screenshot, index) => (
            <SwiperSlide key={index}>
              <img
                src={screenshot.image}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="trending w-full flex flex-col">
        <h2 className="text-2xl font-semibold text-white mb-6 mx-auto mt-10  border-b-2 border-green-400 inline-block pb-1">
          Trending
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="rounded-xl overflow-hidden my-10 w-300 "
        >
          {trendingGames.map((element, index) => (
            <SwiperSlide key={index}>
              <Card element={element} key={element.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Detail;
