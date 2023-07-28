import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const handleToProducts = () => {
    navigate("/products");
  };
  return (
    <section style={{ height: "700px" }} className=" bg-yellow-900 relative">
      <div
        className="w-full h-full bg-cover bg-banner opacity-80
      "
      />
      <div className="absolute w-full top-80 -right-24 text-left text-gray-50 drop-shadow-2xl">
        <h2 className="text-5xl mb-2">Sell Products with easy way</h2>
        <h2 className="text-5xl mb-2">Buy Produts with easy way</h2>
        <h2 className="text-5xl mb-12 text-brand">Shoppy</h2>
        <button
          className="text-black border border-black p-3 text-sm font-bold"
          onClick={handleToProducts}
        >
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
}

export default Banner;
