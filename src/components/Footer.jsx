import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 texr-sm">
        {/* Left */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            officia magni voluptates quae laborum ducimus earum, reiciendis
            atque qui sapiente, totam dolorum ratione perspiciatis. Aperiam, ex
            architecto? Repellendus, dolorum autem?
          </p>
        </div>
        {/* Center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>+91-6362862190</li>
            <li>yasheshshah04@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* COPYRIGHT TEXT */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ Yashesh Shah - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
