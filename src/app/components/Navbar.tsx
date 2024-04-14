"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../public/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <div className="text-white bg-[#08142c] w-full fixed z-50 shadow-2xl py-6">
      <div className="flex flex-row justify-between items-center mx-[1rem] lg:mx-[4rem] ">
        <div>
          <Link href="/" className="w-full text-3xl font-bold cursor-pointer">
            <h1 className="text-[30px]">
              <span className="font-bold">GARUD</span>
              <span className="font-normal">MEDIA</span>
            </h1>
          </Link>
        </div>
        <ul className="hidden md:flex lg:flex flex-row items-center justify-center gap-1">
          <Link href="/">
            <li className="p-2 cursor-pointer w-[5rem] font-medium">Home</li>
          </Link>

          <Link href="/services">
            <li className="p-2 cursor-pointer w-[5rem]  font-medium">
              Services
            </li>
          </Link>

          <Link href="/ourwork">
            <li className="p-2 cursor-pointer w-[6rem]  font-medium">
              Our Works
            </li>
          </Link>

          <Link href="/aboutus">
            <li className="p-2 cursor-pointer w-[5rem]  font-medium">
              About Us
            </li>
          </Link>

          <Link href="/careers">
            <li className="p-2 cursor-pointer w-[5rem]  font-medium">
              Careers
            </li>
          </Link>
          <Link href="/contact">
            <li className="p-2 cursor-pointer w-[5rem]  font-medium">
              Contact
            </li>
          </Link>
          <div className="w-[10rem] h-[35px] rounded-full text-center p-2 bg-white">
          <p className="text-[#08142c] font-bold text-sm">mail@gmail.com</p>
        </div>
        </ul>
        
        <div className="block lg:hidden md:hidden">
          <Sheet>
            <SheetTrigger>
              <AiOutlineMenu className="text-xl" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <ul className=" flex flex-col items-center justify-center gap-5 w-full mt-[5rem] text-[25px] text-center">
                    <Link href="/">
                      <li className="p-2 cursor-pointer w-[15rem] font-medium">
                        Home
                      </li>
                    </Link>

                    <Link href="/services">
                      <li className="p-2 cursor-pointer w-[15rem]  font-medium">
                        Services
                      </li>
                    </Link>

                    <Link href="/ourwork">
                      <li className="p-2 cursor-pointer w-[15rem]  font-medium">
                        Our Works
                      </li>
                    </Link>

                    <Link href="/aboutus">
                      <li className="p-2 cursor-pointer w-[15rem]  font-medium">
                        About Us
                      </li>
                    </Link>

                    <Link href="/careers">
                      <li className="p-2 cursor-pointer w-[15rem]  font-medium">
                        Careers
                      </li>
                    </Link>
                    <Link href="/contact">
                      <li className="p-2 cursor-pointer w-[15rem]  font-medium">
                        Contact
                      </li>
                    </Link>
                  </ul>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
