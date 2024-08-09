"use client";
import Container from "../Container";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoClose, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { FaR, FaRegUser } from "react-icons/fa6";

const MiddleHeader = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="border-b border-b-gray-600">
      <Container className="py-5 flex items-center justify-between gap-20">
        <Image src={logo} alt="logo" className="w-28" />

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search products here..."
            className="w-full border-2 border-gray-600 focus-visible:border-themeColor outline-none h-10 pl-4 pr-20"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <IoClose
              onClick={() => setSearchValue("")}
              className="absolute text-xl top-2.5 right-12 text-gray-600 hover:text-red-500 duration-200 cursor-pointer"
            />
          )}
          <span className="bg-themeColor text-white inline-flex w-10 h-10 items-center justify-center text-xl absolute top-0 right-0 border-gray-600">
            <IoSearch />
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            {/* icon */}
            <div className="border-2 border-gray-600 p-2 text-xl rounded-full">
              <FaRegUser />
            </div>
            {/* text */}
            <div>
              <p className="text-xs">Hello, Guest</p>
              <p className="text-sm font-semibold">Login / Register</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
