import React from "react";
import { Link } from "react-router-dom";
import FBLM from "../../assets/social-media/facebook-lightmode.jpg";
import IGLM from "../../assets/social-media/instagram-lightmode.png";
import XLM from "../../assets/social-media/x-lightmode.jpg"
import FBDM from "../../assets/social-media/facebook-darkmode.png"
import IGDM from "../../assets/social-media/instagram-darkmode.png"
import XDM from "../../assets/social-media/x-darkmode.jpg"

const Footer = () => {
  return (
    <div className="border-t border-black flex flex-col items-center justify-center m-10 p-10">
      <h1 className="mt-20">The Last Store 2023 ©</h1>
      <ul className="mt-20 flex flex-col ">
        <Link className="m-5" to="/">
          Home
        </Link>
        <Link className="m-5">Products</Link>
        <Link className="m-5">Men's & Women's Clothing</Link>
        <Link className="m-5">Electronics</Link>
        <Link className="m-5">Jewelry</Link>
      </ul>
      <ul className=" flex flex-col justify-start">
        <Link className="m-10">About Us</Link>
        <Link className="m-10">Contact</Link>
      </ul>

      <h2 className="mt-20">
        Get the newsest information on our social medias
      </h2>
      <ul className="flex justify-around">
        < img className="w-10 h-10 m-20" src={FBLM} alt="facebook-lightmode" />
        < img className="w-10 h-10 m-20" src={IGLM} alt="instagram-lightmode" />
        < img className="w-10 h-10 m-20" src={XLM} alt="x-lightmode" />
      </ul>
    </div>
  );
};

export default Footer;
