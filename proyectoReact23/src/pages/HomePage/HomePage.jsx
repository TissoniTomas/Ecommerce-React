import React from "react";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import ItemCardOferta from "../../components/ItemCardElectronics/ItemCardElectronics";
import { useState, useEffect } from "react";


const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        console.log(json)});
  }, []);

  return (
    <>
      <ItemListContainer data={data} list= "clothing"  />

      <ItemCardOferta data={data} list = "electronics" />
    </>
  );
};

export default HomePage;
