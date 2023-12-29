import React from "react";
import "./ItemCard.css"

const ItemCard = ({ data }) => {
  const cardStyle = {
    boxShadow: "5px 4px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div className="flex flex-col items-center border-4 border-black w-72 h-auto p-10"> 
        <img className="w-44 mt-5 " src={data.image} alt={data.title} />
        <h1 className="font-Montserrat text-xl">{data.title}</h1>
        <div>
          <button className=" border-4 rounded-lg border-red-300"> VER MAS</button>
        </div>
      </div>
    </>
  ); };

export default ItemCard;
