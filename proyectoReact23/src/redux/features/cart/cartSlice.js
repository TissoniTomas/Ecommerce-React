import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'itemsCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
     
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item)=> item.id !== action.payload.id)
    },
    removeAllItems: (state) => {
      state.items = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart, removeAllItems } = cartSlice.actions

export default cartSlice.reducer