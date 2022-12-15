import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";
import NavLink from "./NavLink";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black  flex items-end h-1/3  w-full  justify-around p-20">
      <div className="p-5 ">
        <ul>
          <p className="text-white font-bold text-3xl pb-6">
            <span className="text-blue-600">Contact</span>
            <span className="text-pink-600">Us</span>
          </p>
          <div className="flex gap-6 pb-5">
            {/* Section for icons */}
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-purple-600" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
          </div>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className=" text-white text-1xl font-semoibold hover:text-blue-600 translate-y-10 ">
          Copyright @ Date Developer
        </h1>
      </div>

      <div className="pb-0  translate-y-10">
        <ul>
          <NavLink href="#home">HOME</NavLink>
          <br></br>
          <br></br>
          <NavLink href="#intro">INTRODUCTION</NavLink>
          <br></br>
          <br></br>

          <NavLink href="#">PRODUCT</NavLink>
          <br></br>
          <br></br>

          <NavLink href="#">ABOUT</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
