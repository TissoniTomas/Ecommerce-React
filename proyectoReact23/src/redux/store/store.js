import { configureStore } from '@reduxjs/toolkit'
import modeReducer from '../features/mode/modeSlice'
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    cart : cartReducer
    
  },
})