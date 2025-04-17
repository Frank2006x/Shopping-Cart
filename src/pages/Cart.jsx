import React from "react";
import Card from "../components/Card";
const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold text-white mb-6 mx-auto mt-10 border-b-2 border-green-400 inline-block pb-1 ">
        🛒 Your Cart
      </h1>
      <div className="text-amber-50 flex flex-row gap-10 m-10 justify-evenly flex-wrap">
        {cart.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
