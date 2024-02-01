import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [counterStock, setCounterStock] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0)

  const removeItem = (itemName, itemPlatform) => {
    setShoppingCart(prevItems =>
      prevItems.filter(
        item =>
          !(item.platform === itemPlatform && item.name === itemName)
      )
    );
  };


  useEffect(() => {
    const precioTotal = shoppingCart.reduce((acc, prod) => {
      if (prod.discountPrice != null) {
        return acc + prod.discountPrice * prod.quantity;
      }
      return acc + prod.price * prod.quantity;
    }, 0);

    const cantidadTotal = shoppingCart.reduce((acc, prod) => {
      return acc + prod.quantity;
    }, 0);

    const precioTotalSinDescuento = shoppingCart.reduce((acc, prod)=>{
      return acc + (prod.quantity * prod.price);
      
    }, 0) 

    setTotalCart(precioTotal.toFixed(2));
    setTotalQuantity(cantidadTotal);
    setTotalDiscount(precioTotalSinDescuento.toFixed(2))
  }, [shoppingCart]);




    const handleIncrementQuantity = (itemName, itemPlatform) => {
      const updatedCart = shoppingCart.map(item => {
      if (item.name === itemName && item.platform === itemPlatform) {
        return { ...item, quantity: item.quantity + 1 };
      }
      console.log(item.quantity);
      return item;
    });
    setShoppingCart([...updatedCart]);
  };

 
  const handleDecrementQuantity = (itemName, itemPlatform) => {
    const updatedCart = shoppingCart.map(item => {
      if (item.name === itemName && item.platform === itemPlatform) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    });
    setShoppingCart([...updatedCart]);
  };
  

  const clearCart = () => {
    setShoppingCart([]);
  };

  useEffect(()=>{
    console.log(shoppingCart);
  },[shoppingCart])

  
  return (
    <ShoppingCartContext.Provider
      value={{

        
        shoppingCart,
        setShoppingCart,
        removeItem,
        clearCart,
        totalCart,
        totalQuantity,
        setTotalCart,
        setTotalQuantity,
        handleDecrementQuantity,
        handleIncrementQuantity,
        counterStock,
        setCounterStock,
        totalDiscount
      }
      
      }
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
