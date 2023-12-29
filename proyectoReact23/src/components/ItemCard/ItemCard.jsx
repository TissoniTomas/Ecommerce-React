import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center border w-96 h-dvh p-10 hover:bg-emerald-200 shadow-2xl ">
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
              VER MAS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
