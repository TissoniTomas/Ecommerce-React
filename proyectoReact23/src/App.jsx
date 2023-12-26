import React from 'react'
import Header from "./components/navBar/navBar"
import MainCardProducts from './components/itemListContainer/itemListContainer'

import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <main className='flex flex-col justify-center items-center'>
    <h1 className='text-5xl text-red-800 font-bold m-20'>PRODUCTOS DESTACADOS</h1>

    <div className="grid grid-cols-3 grid-rows-2 gap-6 ">
      <MainCardProducts/>


    </div>
    </main>

    </>
    
      
  )
}

export default App