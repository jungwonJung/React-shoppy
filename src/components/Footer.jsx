import React from "react";
import { BsTruck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ height: "750px" }}>
      <section
        style={{ height: "350px" }}
        className="bg-gray-100 mt-20 flex justify-around items-center rounded-lg p-36"
      >
        <div className="bg-white h-48 p-10 w-96 flex flex-col justify-center items-center rounded-2xl">
          <i className="text-4xl">
            <BsTruck />
          </i>
          <p className="mt-6 text-gray-400">WORLDWIDE DELIVERY</p>
          <p className="text-center text-gray-600">
            Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
        <div className="bg-white h-48 p-10 w-96 flex flex-col justify-center items-center rounded-2xl">
          <i className="text-4xl">
            <RiSecurePaymentLine />
          </i>
          <p className="mt-6 text-gray-400">SECURE PAYMENTS</p>
          <p className="text-center text-gray-600">
            Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
        <div className="bg-white h-48 p-10 w-96 flex flex-col justify-center items-center rounded-2xl">
          <i className="text-4xl">
            <TbTruckReturn />
          </i>
          <p className="mt-6 text-gray-400">SIMPLE RETURNS</p>
          <p className="text-center text-gray-600">
            Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
      </section>
      <section
        style={{ height: "350px" }}
        className="mt-10 p-36 flex justify-center items-center text-gray-400"
      >
        <div className="w-2/6 ">
          <h2 className="mb-2 text-xl ">About Shoppy</h2>
          <p className=" text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            modi cumque rem recusandae quaerat at asperiores beatae saepe
            repudiandae quam rerum aspernatur dolores et ipsa obcaecati
            voluptates libero
          </p>
        </div>
        <div className="w-4/6 flex flex-row justify-around">
          <div>
            <h2 className="mb-6 font-bold text-xl">Help</h2>
            <p>Contact us</p>
            <p>AcCount</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>FAQ</p>
          </div>
          <div>
            <h2 className="mb-6 font-bold text-xl">About</h2>
            <p>About us</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Team</p>
            <p>FAQ</p>
          </div>
          <div>
            <h2 className="mb-6 font-bold text-xl">Shop</h2>
            <p>Store</p>
            <p>Gift Cards</p>
            <p>Student Discount</p>
          </div>
        </div>
      </section>
      <section
        style={{ height: "50px" }}
        className="flex justify-center items-center rounded-lg px-96"
      >
        <Link
          className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center mx-2 hover:scale-110 hover:bg-brand"
          to="https://github.com/jungwonJung"
        >
          <BsGithub className="w-7 h-7" />
        </Link>
        <Link
          className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center hover:scale-110 hover:bg-brand"
          to="https://www.linkedin.com/in/jungwon-jung-218750232/"
        >
          <BsLinkedin className="w-6 h-6" />
        </Link>
        <Link></Link>
      </section>
    </div>
  );
}

export default Footer;
