import React from "react";
import Button from "../UI/ShopNow";
const NavBar = () => {
  return (
    <nav className="NavBar text-white h-12 rounded-md my-2 mx-1 box-border flex  justify-between 
    items-center  px-4 py-2 bg-[#1ff863ed]">
      <div className="nav-brand text-xl font-bold">SnapCart</div>
      <div className="flex items-center gap-6">

      <ul className="flex gap-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Cart</li>
      </ul>
        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
