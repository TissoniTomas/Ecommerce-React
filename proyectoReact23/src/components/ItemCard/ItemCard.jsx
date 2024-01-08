import React from "react";

import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {
  return (
    <>
   <div className="flex flex-col justify-center items-center w-64 h-screen  bg-white shadow-2xl p-10">
    <img className="h-44" src={data.image} alt="" />
    <h1 className="font-Montserrat text-xl text-center my-6" >{data.title}</h1>
    <Link to={`/product/detail/${data.id}`}>
    <button className="bg-sky-500 text-white w-32 my-6 h-10 rounded-xl font-Montserrat">See More</button>
    </Link>

   </div>
    </>
  );
};

export default ItemCard;
