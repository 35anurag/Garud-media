"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white bg-[#00194d] w-full fixed z-50 shadow-2xl">
      <div className="flex justify-between items-center ml-[4rem] mr-[4rem] p-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
        Napkin
      </h1>
      <ul className="hidden md:flex lg:flex flex-row items-center justify-center gap-2">
        <Link href="/">
          <li className="p-4 cursor-pointer w-[7rem] active:text-[#00df9a] hover:text-[#00df9a] font-medium">Home</li>
        </Link>

        <Link href="/aboutus">
          <li className="p-4 cursor-pointer w-[7rem] active:text-[#00df9a] hover:text-[#00df9a] font-medium">About Us</li>
        </Link>

        <Link href="/ourteam">
          <li className="p-4 cursor-pointer w-[7rem] active:text-[#00df9a] hover:text-[#00df9a] font-medium">Our Team</li>
        </Link>
        <Link href="/contact">
          <li className="p-4 cursor-pointer w-[7rem] active:text-[#00df9a] hover:text-[#00df9a] font-medium">Contact</li>
        </Link>
      </ul>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Napkin</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About Us</li>
        <li className="p-4 border-b border-gray-600">Our Team</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        {/* <li className="p-4">Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
