import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  mode : sessionStorage === "" ? "light" : sessionStorage.getItem("theme")
}

export const modeSlice = (createSlice) ({
    name : "mode",
    initialState,
    reducers :{  
        darkmode: (state)=>{
            state.mode = "dark"
        },

        lightmode : (state) =>{
            state.mode = "Light"
        }

    },

})

export const {darkmode, lightmode} = modeSlice.actions;

export default modeSlice.reducer;