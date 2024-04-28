import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/fattani-Logo.png";
function Header() {
  return (
    <div className="w-full pb-7 flex justify-center bg-color1 text-white text-xl">
      <img className="mt-3" src={Logo} width={200}></img>
      <div className="w-[1000px] justify-end flex mt-7 gap-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/about-us"}>About Us</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
}

export default Header;
