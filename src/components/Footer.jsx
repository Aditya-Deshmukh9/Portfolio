import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className=" flex gap-10">
        <a target="_blank" href="">
          <BsInstagram
            size={32}
            className=" hover:text-indigo-600 transition-all cursor-pointer"
          />
        </a>

        <a target="_blank" href="">
          <FaFacebook
            size={32}
            className=" hover:text-indigo-600 transition-all cursor-pointer"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aditya-deshmukh-878482229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <FaLinkedin
            size={32}
            className=" hover:text-indigo-700 transition-all cursor-pointer"
          />
        </a>
        <a target="_blank" href="https://discord.com/invite/hwKtcPPf">
          <FaDiscord
            size={32}
            className=" hover:text-indigo-600 transition-all cursor-pointer"
          />
        </a>
      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl  text-indigo-500 font-semibold">
          Aditya Deshmukh.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
