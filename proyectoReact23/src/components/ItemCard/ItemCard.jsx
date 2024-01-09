import React from "react";

import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {
  return (
    <>
   <div className="flex flex-col justify-center items-center w-64 h-[550px] bg-white shadow-2xl px-4 lg:h-[750px] lg:w-96 hover:animate-fade-down  hover:animate-duration-[3000ms] ">
    <img className="h-44 lg:h-60" src={data.image} alt="" />
    <h1 className="font-inter font-extrabold text-xl text-center my-6 lg:text-3xl lg:my-160" >{data.title}</h1>
    <Link to={`/product/detail/${data.id}`}>
    <button className="bg-sky-500 text-white w-32 my-6 h-10 rounded-xl font-Montserrat ">See More</button>
    </Link>

   </div>
    </>
  );
};

export default ItemCard;
