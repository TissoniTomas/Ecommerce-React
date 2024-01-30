import { useEffect, useContext, useState } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const CartPage = () => {
  const { mode } = useContext(ModeContext);
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
  const [totalCart, setTotalCart] = useState(0);

  const items = shoppingCart;
  const emptyCart = shoppingCart.length;

  const removeItem = (itemId) => {
    let removeItemFilter = items.filter((item) => item.id !== itemId);
    console.log(removeItemFilter);
    setShoppingCart(removeItemFilter);
  };

  useEffect(() => {
    const precioTotal = items.reduce((acc, prod) => {
      return acc + prod.price * prod.quantity;
    }, 0);

    setTotalCart(precioTotal);
    console.log(precioTotal);
  }, [items]);

  console.log(items);

  return (
    <>
      {emptyCart === 0 ? (
        <div
          className={`flex flex-col items-center  h-full ${
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
          className={`flex flex-col items-center h-full ${
            mode === "light"
              ? "text-gray-900 bg-white"
              : "text-white bg-gray-900"
          }`}
        >
          <h1 className={`font-Montserrat text-6xl mb-20`}>
            Carrito de Compras
          </h1>
          <div className="grid grid-cols-7 w-screen px-64 mb-10">
            <div><span>ID</span></div>
            <div><span>{null}</span></div>
            <div><span>Title</span></div>
            <div><span>Price in USD</span></div>
            <div><span>Quantity</span></div>
            <div><span>Platform</span></div>
            <div><span>{null}</span></div>
          </div>
          {items.map((item, index) => (
            <div className={`grid grid-cols-7 grid-rows-${items.length} w-screen px-64 gap-10 mb-20 items-center`}  key={item.id}>
              <div>
                <span>{index + 1}</span>
              </div>
              <div>
                <img className="w-32 h-48" src={item.image} alt={item.name} />
              </div>
              <div>
                <h2>{item.name}</h2>
              </div>

              <div>
                <span>{item.price}</span>
              </div>
              <div>
                <span>{item.quantity}</span>
              </div>
              <div>
                <span>{item.platform}</span>
              </div>

              <div>
                <button onClick={() => removeItem(item.id)}>
                  Remover Item
                </button>
              </div>
            </div>
          ))}
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
