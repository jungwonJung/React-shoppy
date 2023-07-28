import React from "react";
import { GiConfirmed } from "react-icons/gi";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center pt-64">
      <i className="text-brand text-9xl mb-5">
        <GiConfirmed />
      </i>
      <h1 className="font-bold text-4xl mb-6">Your Payment was Succesfull</h1>
      <Button
        text="Go Back to Home"
        style={{ fontSize: "1.3rem", borderRadious: "12px" }}
        onClick={handleToHome}
      />
    </div>
  );
}

export default Payment;
