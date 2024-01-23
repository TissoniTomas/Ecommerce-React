
import {useSelector, useDispatch} from "react-redux";
import { removeAllItems, removeFromCart } from "../../redux/features/cart/cartSlice";
import { useEffect } from "react";



const CartPage = () => {

  
  // const mode = useSelector((state) => state.mode.mode);
  const items = useSelector((state)=> state.cart.items);
  const dispatch = useDispatch()
  
  const removeItemCart = ()=>{
    dispatch(removeFromCart())
  }
  
  
  const removeAllItemCart = ()=>{
    dispatch(removeAllItems())
  }
  
  useEffect(()=>{
    console.log(items);
  },[items])

  return (
    <>
      
      <div className="flex flex-col">
        {items.map((item) => (
          <div className="flex" key={item.id}>
           <img className="w-32 h-32" src={item.image} alt={item.name} />
           <h1>{item.name}</h1>
           <span>{item.price}</span>
           <span>{item.quantity}</span>
          </div>
        ))}
      </div>
      <div>
        <button onClick={removeItemCart}>Remove Item</button>
        <button onClick={removeAllItemCart}>Remove all Items</button>
      </div>
    </> 
  );
};

export default CartPage;
