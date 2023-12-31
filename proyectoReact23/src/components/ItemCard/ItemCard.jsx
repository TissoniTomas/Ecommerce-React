import React from "react";

import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center border w-auto h-dvh mx-10 p-10 hover:bg-emerald-200 shadow-2xl ">
        <img
          className="w-auto mt-5 h-60"
          src={data.image}
          alt={data.title}
        />
        <h1 className="font-Montserrat text-xl mt-20 text-center">
          {data.title}
        </h1>
        <div>
          <Link to={`/product/detail/${data.id}`}>
            <button className=" border-2 rounded-lg border-red-300 mt-20 w-40 h-10 text-xl font-Montserrat hover:bg-lime-400">
              {" "}
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
