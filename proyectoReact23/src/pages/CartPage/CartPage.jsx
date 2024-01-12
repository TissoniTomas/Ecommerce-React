import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import ItemCard from "../../components/ItemCard/ItemCard";

const CartPage = () => {
  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
  console.log(shoppingCart);

  return (
    <>
      
      <div className="flex flex-col">
        {shoppingCart.map((item) => (
          <div className="flex" key={item.id}>
           <img className="w-32 h-32" src={item.image} alt={item.name} />
           <h1>{item.name}</h1>
           <span>{item.price}</span>
           <span>{item.quantity}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
