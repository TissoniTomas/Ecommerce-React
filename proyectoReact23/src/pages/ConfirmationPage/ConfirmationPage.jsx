import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { PurchaseInfoContext } from "../../context/PurchaseInfoContext";
import { ModeContext } from "../../context/modeContext";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  const {
    shoppingCart,
    setShoppingCart,
    totalCart,
    totalQuantity,
    totalDiscount,
  } = useContext(ShoppingCartContext);
  console.log(shoppingCart);

  const [infoCart] = useState(shoppingCart);
  const [priceCart] = useState(totalCart);
  const [quantityCart] = useState(totalQuantity);
  const [priceListCart] = useState(totalDiscount);
  console.log(priceListCart);
  console.log(infoCart);
  const { purchaseInfo, purchaseID } = useContext(PurchaseInfoContext);
  const { mode } = useContext(ModeContext);

  console.log(purchaseInfo);
  console.log(purchaseID);

  useEffect(() => {
    if (shoppingCart) {
      setTimeout(() => {
        setShoppingCart([]);
      });
    }
  }, []);

  let day = new Date();
  let formatedDate = day.toLocaleDateString();
  console.log(formatedDate);

  return (
    <main
      className={`flex flex-col items-center justify-center ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      }  lg:mt-48`}
    >
      <h1
        className={`font-Montserrat text-center text-4xl lg:text-6xl mx-6 my-10 ${
          mode === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        ¡Gracias por su compra!
      </h1>
      <div className="mx-6">
        <p
          className={`text-2xl font-Inter text-center ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {" "}
          Te acercamos la informacion de tu compra, la misma te estara llegando
          por mail.{" "}
        </p>
      </div>

      <ul className="my-10 mx-6">
        <li
          className={`text-xl font-Inter my-4 font-bold ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Name: {purchaseInfo.name}
        </li>
        <li
          className={`text-xl font-Inter my-4 font-bold ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Surname: {purchaseInfo.surname}
        </li>
        <li
          className={`text-xl font-Inter my-4 font-bold ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Email: {purchaseInfo.email}
        </li>
        <li
          className={`text-xl font-Inter my-4 font-bold ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Address: {purchaseInfo.address}
        </li>
        <li className={`text-xl font-Montserrat my-4 text-sky-500`}>
          Purchase ID: {purchaseID}
        </li>
        <li
          className={`text-xl font-Inter my-4 font-bold ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Date: <span className="font-Montserrat">{formatedDate}</span>
        </li>
      </ul>

      <div className="flex flex-col items-center mx-6 ">
        <h2
          className={`text-5xl font-Montserrat mb-10 ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Summary
        </h2>
        <ul className="flex flex-col lg:w-[1200px] w-screen px-6 ">
          {infoCart.map((item) => (
            <div className="flex w-full justify-evenly">
              <li
                className={`text-xl lg:text-3xl font-Montserrat border-b border-black py-10 my-4 w-full  ${
                  mode === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                {item.quantity}X {item.name} - {item.platform} :{" "}
               
                 
                
              </li>
              <span   className={`text-xl lg:text-3xl font-Montserrat border-b border-black py-10 my-4 lg:w-[25%]  ${
                  mode === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                    {item.discountPrice ? <s>${item.price}</s> : null} $
                    {item.discountPrice ? item.discountPrice : item.price}
                  </span>
            </div>
          ))}
        </ul>
        <div className="flex flex-col items-center lg:w-96 mx-6">
          {priceListCart > priceCart ? (
            <span
              className={` text-xl lg:text-4xl font-Montserrat text-center my-10  ${
                mode === "light" ? "text-gray-900" : "text-sky-500"
              } `}
            >
              Discounts: ${(priceListCart - priceCart).toFixed(2)}
            </span>
          ) : null}

          <span
            className={` text-xl lg:text-4xl font-Montserrat text-center my-10  ${
              mode === "light" ? "text-gray-900" : "text-sky-500"
            } `}
          >
            Total Cart: ${priceCart}
          </span>
          <span
            className={` text-xl lg:text-4xl font-Montserrat text-center my-10  ${
              mode === "light" ? "text-gray-900" : "text-sky-500"
            } `}
          >
            Total Items: {quantityCart}
          </span>
          <Link to="/">
          <Button className="mb-20" size="md" type="default">Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ConfirmationPage;
