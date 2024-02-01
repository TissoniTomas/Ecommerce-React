import { useEffect, useContext, useState } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Button } from "keep-react";
import { Link } from "react-router-dom";


const CartPage = () => {

  const { mode } = useContext(ModeContext);
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
  const [totalCart, setTotalCart] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const items = shoppingCart;
  const emptyCart = shoppingCart.length;

  console.log(items);

  const removeItem = (itemName, itemPlatform) => {
    const index = items.findIndex(
      (item) => item.platform === itemPlatform && item.name === itemName
    );
    if (index !== -1) {
      items.splice(index, 1);
      setShoppingCart([...items]); 
    }
  };

  const clearCart = () => {
    items = setShoppingCart([]);
  };

  useEffect(() => {
    const precioTotal = items.reduce((acc, prod) => {
      if (prod.discountPrice != null) {
        return acc + prod.discountPrice * prod.quantity;
      }

      return acc + prod.price * prod.quantity;
    }, 0);

    const cantidadTotal = items.reduce((acc, prod) => {
      return acc + prod.quantity;
    }, 0);

    setTotalCart(precioTotal.toFixed(2));
    setTotalQuantity(cantidadTotal);
  }, [items]);

  

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
          <h1 className=" text-4xl text-bold text-center font-Inter my-72 ">
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

          {items.map((item, index) => (
            <div
              className={`lg:grid lg:grid-cols-7 flex flex-col w-screen lg:px-64 gap-10 mb-20 pb-20 items-center border-b border-white font-Montserrat`}
              key={item.id}
            >
             
                <div className="hidden lg:block">
                  <span >ID</span>
                </div>
                <div className="hidden lg:block">
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
                  className="lg:w-32 lg:h-48 h-36 w-auto"
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
              <div>
                <span>{item.quantity}U</span>
              </div>
              <div>
                <span>{item.platform}</span>
              </div>

              <div className="">
                <button
                  className=""
                  onClick={() => removeItem(item.name, item.platform)}
                >
                  Remover Item
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
            <div className="flex justify-evenly items-start w-full my-10">
              <Link to="/checkout">
                <Button className="" size="md" pill={true} color="success">
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
