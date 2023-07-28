import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaEquals } from "react-icons/fa";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
import { BsFillCartXFill } from "react-icons/bs";

const SHIPPING = 5;

function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
    removeAllItem,
  } = useCart();
  const navigate = useNavigate();
  const handleToHome = () => {
    removeAllItem.mutate();
    navigate("/payment");
  };
  const handleToProducts = () => {
    navigate("/products");
  };

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, curr) => prev + parseInt(curr.price) * curr.quantity,
      0
    );

  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300 ">
        My Cart
      </p>
      {!hasProducts && (
        <div className="flex flex-col justify-center items-center pt-64">
          <i className="text-brand text-9xl mb-5">
            <BsFillCartXFill />
          </i>
          <h1 className="font-bold text-4xl mb-6">
            Empty My Cart, Let s go Shopping
          </h1>
          <Button
            text="Go To Products List"
            style={{ fontSize: "1.3rem", borderRadious: "12px" }}
            onClick={handleToProducts}
          />
        </div>
      )}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 py-4 md:px-8 lg:px-16 border-b border-gray-300">
            <PriceCard text="Product Amount" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="Shipping Amount" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="Total Amount" price={totalPrice + SHIPPING} />
          </div>
          <Button
            text="Order"
            style={{ fontSize: "2rem" }}
            onClick={handleToHome}
          />
        </>
      )}
    </section>
  );
}

export default MyCart;
