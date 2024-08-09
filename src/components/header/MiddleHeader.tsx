import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "@/assets/logo.png";

const MiddleHeader = () => {
  return (
    <Container className="py-5 flex items-center justify-between">
      {/* Logo */}
      <Image src={logo} alt="logo" className="w-28" />
      {/* SearchBar */}
      <div>SearchBar</div>
      {/* MenuButtons */}
      <div>MenuItems</div>
    </Container>
  );
};

export default MiddleHeader;
