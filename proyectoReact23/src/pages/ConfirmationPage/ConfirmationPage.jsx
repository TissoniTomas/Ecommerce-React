import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { PurchaseIdContext } from '../../context/PurchaseIDContext';
import { ModeContext } from '../../context/modeContext';

const ConfirmationPage = () => {
const [shoppingCart] = useContext(ShoppingCartContext);
const [purchaseID] = useContext(PurchaseIdContext)
const {mode} = useContext(ModeContext)

let day = new Date()
let formatedDate = day.toLocaleDateString()
console.log(formatedDate);

  return (
    <main className={`flex flex-col items-center ${mode === "light" ? "bg-white" : "bg-gray-900"} lg:mt-48`}>
        <h1 className={`font-Montserrat text-center text-4xl lg:text-6xl my-10 ${mode === "light" ? "text-gray-900" : "text-white"}`}>¡Gracias por su compra!</h1>
        <div>
            <p className={`text-2xl font-Inter text-center ${mode === "light" ? "text-gray-900" : "text-white"}`}> Te acercamos la informacion de tu compra, la misma te estara llegando por mail. </p>
        </div>
          <ul>
            <li>Nombre:</li>
          </ul>


    </main>
  )
}

export default ConfirmationPage