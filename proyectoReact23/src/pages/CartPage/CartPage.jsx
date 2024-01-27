

import { useEffect, useContext } from "react";
import { ModeContext } from "../../context/modeContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";


const CartPage = () => {

  const {mode, setMode} = useContext(ModeContext)
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext)

  const items = shoppingCart

  const removeItem = (itemId)=>{

     let removeItemFilter = items.filter((item)=> item.id !== itemId );
     console.log(removeItemFilter);
     setShoppingCart(removeItemFilter)

  }
  
  return (
    <>
      
      <div className="flex flex-col items-center">
        <h1>Carrito de Compras</h1>
        {items.map((item) => (
          <div className="flex" key={item.id}>
           <img className="w-32 h-32" src={item.image} alt={item.name} />
           <h2>{item.name}</h2>
           <span>{item.price}</span>
           <span>{item.quantity}</span>
           <button onClick={() => removeItem(item.id)}>Remover Item</button>
          </div>
        ))}
      </div>
      {/* <div>
        <button onClick={removeItemCart}>Remove Item</button>
        <button onClick={removeAllItemCart}>Remove all Items</button>
      </div> */}
    </> 
  );
};

export default CartPage;
