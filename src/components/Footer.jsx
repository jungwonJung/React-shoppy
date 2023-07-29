import React from "react";
import { BsTruck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import IconBox from "./IconBox";
import FooterSection from "./FooterSection";

const iconStyle =
  "w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center mx-2 hover:scale-110 hover:cursor-pointer";

function Footer() {
  const socialLinks = [
    {
      icon: <BsGithub className="w-7 h-7" />,
      link: "https://github.com/jungwonJung",
    },
    {
      icon: <BsLinkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/jungwon-jung-218750232/",
    },
  ];

  return (
    <div
      style={{ height: "750px" }}
      className="flex flex-col justify-center items-center"
    >
      <section
        style={{ height: "350px" }}
        className="bg-gray-100 mt-20 flex justify-around items-center rounded-lg p-12 w-5/6"
      >
        <IconBox
          icon={<BsTruck />}
          title="WORLDWIDE DELIVERY"
          description="Far far away, behind the word mountains, far from the countries."
        />
        <IconBox
          icon={<RiSecurePaymentLine />}
          title="SECURE PAYMENTS"
          description="Far far away, behind the word mountains, far from the countries."
        />
        <IconBox
          icon={<TbTruckReturn />}
          title="SIMPLE RETURNS"
          description="Far far away, behind the word mountains, far from the countries."
        />
      </section>
      <section
        style={{ height: "350px" }}
        className="w-full p-36 flex justify-center items-center text-gray-400"
      >
        <FooterSection
          title="About Shoppy"
          items={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Voluptate modi cumque rem recusandae quaerat at asperiores beatae saepe repudiandae quam rerum aspernatur dolores et ipsa obcaecati voluptates libero",
          ]}
        />
        <div className="w-3/6 flex flex-row justify-around">
          <FooterSection
            title="Help"
            items={["Contact us", "Account", "Shipping", "Returns", "FAQ"]}
          />
          <FooterSection
            title="About"
            items={["About us", "Press", "Careers", "Team", "FAQ"]}
          />
          <FooterSection
            title="Shop"
            items={["Store", "Gift Cards", "Student Discount"]}
          />
        </div>
      </section>
      <section
        style={{ height: "50px" }}
        className="w-full flex justify-center items-center rounded-lg px-96 pb-4"
      >
        {socialLinks.map((linkItem, index) => (
          <Link key={index} className={iconStyle} to={linkItem.link}>
            {linkItem.icon}
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Footer;
