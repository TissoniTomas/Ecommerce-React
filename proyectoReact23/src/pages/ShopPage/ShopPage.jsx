import React, { useContext, useState } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import {CheckoutForm} from "../../components/CheckoutForm/CheckoutForm"

const ShopPage = () => {

  

  const { mode } = useContext(ModeContext);
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);


  const items = shoppingCart
  return (
    <div
      className={`flex flex-col items-center w-screen  ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } lg:mt-48 `}
    >
        <div className="flex flex-col items-center mx-20 text-center">

        <h1 className={`font-Montserrat text-5xl my-10 ${mode === "light" ? "text-gray-900" : "text-white" }`}>CHECKOUT</h1>
        <p className={`text-white lg:text-2xl font-Inter`}>To proceed with the purchase and facilitate the delivery of your invoice and relevant information via email, please complete the following form with the required details. This will ensure a smooth transaction process and timely communication of important documentation. </p>

        </div>
        
        <CheckoutForm />
        
        
        
        </div>
  );
};

export default ShopPage;
