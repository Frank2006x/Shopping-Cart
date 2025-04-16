import React, { useState } from "react";
import Button from "../UI/ShopNow";
import { FiShoppingCart, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mt-2 mb-4 rounded-2xl sticky mx-2  top-0 z-50 w-99% text-white h-auto px-4 py-3 bg-gradient-to-r from-emerald-400 to-green-500 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-white">XP</span>
          <span className="text-amber-300">Vault</span>
        </div>

        <ul className="hidden md:flex gap-6 items-center ml-auto mr-10">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-amber-100 font-medium"
            >
              <FiHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-amber-100 font-medium"
            >
              <FiShoppingCart className="text-lg" />
              <span>Cart</span>
              <span className="ml-1 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                0
              </span>
            </Link>
          </li>
        </ul>
        <Link to="/">
          <div className="hidden md:block">
            <Button />
          </div>
        </Link>

        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3">
          <Link
            to="/"
            className=" text-sm font-medium hover:text-amber-100 flex items-center gap-2"
          >
            <FiHome className="text-lg" />
            Home
          </Link>

          <Link
            to="/cart"
            className=" text-sm font-medium hover:text-amber-100 flex items-center gap-2"
          >
            <FiShoppingCart className="text-lg" />
            Cart
            <span className="ml-1 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </Link>

          <div>
            <Link to="/">
              <Button />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
