import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const handleToProducts = () => {
    navigate("/products");
  };

  const h2Style = "text-xl mb-2 md:text-5xl sm:text-3xl";

  return (
    <section style={{ height: "700px" }} className="bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80" />
      <div className="absolute top-80  left-24 text-left text-gray-50 drop-shadow-2xl">
        <h2 className={h2Style}>Sell Products with easy way</h2>
        <h2 className={h2Style}>Buy Produts with easy way</h2>
        <h2 className="text-5xl mb-12 xs  text-brand">Shoppy</h2>
        <button
          className="text-black border border-black p-3 text-sm font-bold md:text-base"
          onClick={handleToProducts}
        >
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
}

export default Banner;
