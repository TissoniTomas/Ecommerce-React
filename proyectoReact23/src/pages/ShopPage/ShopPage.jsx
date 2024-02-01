import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import SpinnerFB from "../../components/Spinner/Spinner";
import { useNavigate } from 'react-router-dom';
import { Button } from "keep-react";


const ShopPage = () => {
  const { mode } = useContext(ModeContext);
  const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
  const [isConfirmed, setisConfirmed] = useState(false);

 const navigate = useNavigate();
 useEffect(() => {
  // Verificar si confirmado es true
  if (isConfirmed) {
    // Redirigir a la parte final de la compra después de 5 segundos
    const redirectTimeout = setTimeout(() => {
      navigate('/confirmation');
      
    }, 5000);

    
    
    return () => clearTimeout(redirectTimeout);
  }
}, [isConfirmed, navigate]);

 
  return (
    <>
      {isConfirmed ? (
        <div  className={`flex flex-col items-center justify-center w-screen h-screen  ${
          mode === "light" ? "bg-white" : "bg-gray-900"
        } lg:mt-48 `}>
          <SpinnerFB />
          <h1 className={`font-Montserrat text-5xl my-10 ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}>Su compra esta sienda procesada...</h1>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center w-screen  ${
            mode === "light" ? "bg-white" : "bg-gray-900"
          } lg:mt-48 `}
        >
          <div className="flex flex-col items-center mx-20 text-center">
            <h1
              className={`font-Montserrat text-5xl my-10 ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              CHECKOUT
            </h1>
            <p className={`lg:text-2xl font-Inter ${mode === "light" ? "text-gray-900" : "text-white"}`}>
              To proceed with the purchase and facilitate the delivery of your
              invoice and relevant information via email, please complete the
              following form with the required details. This will ensure a
              smooth transaction process and timely communication of important
              documentation.{" "}
            </p>
          </div>

          <CheckoutForm confirm={setisConfirmed} />
        </div>
      )}
    </>
  );
};

export default ShopPage;
