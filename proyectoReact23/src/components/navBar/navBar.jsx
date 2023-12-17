import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/Logo/logo.png"
import "./navBar.css"

const navBar = () => {
  return (
    <nav id='navbar' className='flex justify-between bg-red-700'>
      <a href= "../../../index.html"><img className='w-64 h-64' src={logo} /></a>
      <ul id='navbar-list' className='flex list-none justify-center items-center pr-[5%]'>
        <li className='item-list m-[30px] text-4xl text-black tracking-wider '>HOME</li>
        <li className='item-list m-[30px] text-4xl text-black tracking-wider '>PRODUCTOS</li>
        <li className='item-list m-[30px] text-4xl text-black tracking-wider '>QUIENES SOMOS</li>
        <li className='item-list m-[30px] text-4xl text-black tracking-wider '>CONTACTO</li>
        <ShoppingCartIcon  fontSize='large'/>
        <span>5</span>
      </ul>

    </nav>
  )
}


export default navBar