import React from "react";

import { useNavigate } from "react-router-dom";

const Card = ({ element }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/detail", { state: element });
  };
  return (
    <div
      onClick={handleClick}
      className="card w-60  rounded-2xl overflow-hidden shadow-lg bg-[#1c1a1ad1]
     text-white transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_#003e00] border border-zinc-800"
    >
      <img
        loading="lazy"
        src={element.background_image}
        alt={element.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-green-20 truncate">
          {element.name}
        </h1>
        <p>{element.released ? element.released.slice(0, 4) : null}</p>
      </div>
    </div>
  );
};

export default Card;
