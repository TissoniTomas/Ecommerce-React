import { useEffect, useContext, useState } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { mode } = useContext(ModeContext);
  const {
    shoppingCart,
    removeItem,
    clearCart,
    totalCart,
    totalQuantity,
    handleDecrementQuantity,
    handleIncrementQuantity,
  } = useContext(ShoppingCartContext);

  const emptyCart = shoppingCart.length;

  return (
    <>
      {emptyCart === 0 ? (
        <div
          className={`flex flex-col items-center h-full  ${
            mode === "light"
              ? "text-gray-900 bg-white"
              : "text-gray-400 bg-gray-900"
          }`}
        >
          <h1 className=" my-32 mx-10 text-4xl text-bold text-center font-Inter lg:my-72 ">
            El carrito esta vacio, agregue productos para visualizarlos aqui
          </h1>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center h-full text-center lg:mt-48 ${
            mode === "light"
              ? "text-gray-900 bg-white"
              : "text-white bg-gray-900"
          } `}
        >
          <h1 className={`font-Montserrat text-6xl mb-20`}>
            Carrito de Compras
          </h1>

          {shoppingCart.map((item, index) => (
            <div
              className={`lg:grid lg:grid-cols-7 flex flex-col w-screen lg:px-64 gap-10 mb-20 pb-20 items-center border-b border-white font-Montserrat`}
              key={item.id}
            >
              <div className="hidden lg:block">
                <span>ID</span>
              </div>
              <div className="hidden lg:block ">
                <span>{null}</span>
              </div>
              <div className="hidden lg:block">
                <span>Title</span>
              </div>
              <div className="hidden lg:block">
                <span>Price in USD</span>
              </div>
              <div className="hidden lg:block">
                <span>Quantity</span>
              </div>
              <div className="hidden lg:block">
                <span>Platform</span>
              </div>
              <div className="hidden lg:block">
                <span>{null}</span>
              </div>

              <div>
                <span className="hidden lg:block">{index + 1}</span>
              </div>
              <div>
                <img
                  className="w-auto h-36 md:h-60  lg:h-44"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div>
                <h2>{item.name}</h2>
              </div>

              <div>
                <span>
                  $
                  {item.discountPrice != null ? item.discountPrice : item.price}
                </span>
              </div>
              <div className="flex items-center justify-center ">
                <button
                  onClick={() =>
                    handleIncrementQuantity(item.name, item.platform)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <span>{item.quantity}U</span>
                <button
                  onClick={() =>
                    handleDecrementQuantity(item.name, item.platform)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <span>{item.platform}</span>
              </div>

              <div className="">
                <button
                  className=""
                  onClick={() => removeItem(item.name, item.platform)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 hover:text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div
            className={`flex flex-col mb-40 justify-between items-center border lg:w-[100vh] lg:h-[50vh] font-Montserrat pt-10 `}
          >
            <h2 className="text-4xl ">Resumen de la Compra</h2>
            <span className="text-2xl">Total: $ {totalCart}</span>
            <span className="text-2xl">Items Quantity: {totalQuantity}</span>
            <div className="flex flex-col items-center justify-evenly lg:flex-row lg:items-start w-full my-10">
              <Link to="/checkout">
                <Button className="mb-10" size="md" pill={true} color="success">
                  Continuar con la compra
                </Button>
              </Link>
              <Button onClick={clearCart} size="md" pill={true} color="warning">
                Vaciar Carrito de Compras
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
/**LIGHT MODE
 * 
 * Titulos : gray-900
 * Textos: gray-600 
 * Bg Botones: cyan-700
 * Texto botones : white font-medium
 * Hover Iconos : bg-gray-100
 * Sections : bg-gray-50
   Iconos : gray-500
 * 
 * DARK MODE
 * 
 * BG: bg-gray-900
 * Titulos : white
 * Textos: gray-400
 * Bg Botones: cyan-700
 * Texto botones : white font-medium
 * Hover Iconos : bg-gray-700
 Iconos: gray-400
 * Sections : bg-gray-800
 */
