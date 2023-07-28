import React from "react";
import { useNavigate } from "react-router-dom";

function HomeCover() {
  const navigate = useNavigate();
  const handleToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="flex justify-center items-center">
      <section
        style={{ height: "700px" }}
        className=" bg-yellow-900 relative w-3/4 my-28"
      >
        <div
          className="w-full h-full bg-cover bg-main opacity-80
      "
        />
        <div className="absolute w-full bottom-52  text-center text-gray-50 drop-shadow-2xl">
          <p className="mb-8">LIMITED OFFERS 20% OFF</p>
          <h2 className="text-5xl mb-4 font-bold">Autumn Promo</h2>
          <p className=" font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className=" font-bold">
            Laborum fuga incidunt laboriosam voluptas iure,
          </p>
          <p className=" font-bold">
            delectus dignissimos facilis neque nulla earum.
          </p>
          <button
            className="text-white border border-black p-3 text-sm font-bold bg-black mt-16"
            onClick={handleToProducts}
          >
            SHOP NOW
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomeCover;
