import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemCardElectronics.css"
import { Link } from "react-router-dom";


const ItemCardElectronics = ({data}) => {

  const dataElectronics = data.filter ((item)=> item.category === "electronics")
  console.log(dataElectronics);
 
  return (
    <>
    <section id="section" >

    <h2 className="section--title" >
    ELECTRONICS
  </h2>
    <div className="section--grid" >
      {dataElectronics.map((item) => (
        <Link to = {`/product/detail/${item.id}`}>
        <div key={item.id}>
          <ItemCard data={item} />
        </div>
        </Link>
      ))}
    </div>
      </section>
      </>
  );
};

export default ItemCardElectronics;
