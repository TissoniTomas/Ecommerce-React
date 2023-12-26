import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemCardOferta = ({data, showOfertas}) => {
  const filteredDataMonth = showOfertas
    ? data.filter((item) => item.isOferta === true)
    : null;

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 ">
      {filteredDataMonth.map((item) => (
        <div key={item.id}>
          <ItemCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemCardOferta;
