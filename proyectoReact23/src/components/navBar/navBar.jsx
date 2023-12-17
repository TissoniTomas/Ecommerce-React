import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/Logo/logo.png"

const navBar = () => {
  return (
    <nav id='navbar' className='flex'>
      <a href= "../../../index.html"><img className='navbar-logo' src={logo} /></a>
      <ul id='navbar-list'>
        <li className='text-yellow-600'>HOME</li>
        <li className='navbar-item'>PRODUCTOS</li>
        <li className='navbar-item'>QUIENES SOMOS</li>
        <li className='navbar-item'>CONTACTO</li>
        <ShoppingCartIcon  fontSize='large'/>
        <span>5</span>
      </ul>

    </nav>
  )
}


export default navBar