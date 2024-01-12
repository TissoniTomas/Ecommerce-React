import { useState, useContext } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

import SpinnerFB from "../../components/Spinner/Spinner";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import useFetch from "../../hooks/useFetch";


const HomePage = () => {
  const {data,spinner} = useFetch("https://fakestoreapi.com/products")
 
  const {shoppingCart} = useContext(ShoppingCartContext)

  const {mode, setMode} = useContext(ModeContext)
 
  return (
    <>
      {spinner == true ? (
        <div className="flex justify-center my-96">
        <SpinnerFB/>
        </div>
      ) : (
        <main className={`flex flex-col items-center justify-center px-20 ${mode === "light" ? "bg-white border-t border-black"  : "bg-black"}`}>
          <h1 className={`text-4xl font-Montserrat text-center my-10 md:text-5xl lg:text-6xl ${mode === "light" ? "text-gray-900" : "text-gray-700"}`}>
            Men's & Woman's
          </h1>
          <ItemListContainer section="clothing" data={data} />
          <h2  className={`text-4xl font-Montserrat text-center my-16 md:text-5xl lg:text-6xl ${mode === "light" ? "text-black" : "text-gray-700"}`}>
            Electronics
          </h2>
          <div className="mb-32 ">

          <ItemListContainer section="electronics" data={data} />
          </div>
        </main>
      )}
    </>
  );
};

export default HomePage;
