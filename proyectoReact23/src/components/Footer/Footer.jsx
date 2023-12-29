import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t border-black flex flex-col items-center justify-center m-10 p-10'>
        <h1 className='mt-20'>The Last Store 2023 ©</h1>
        <ul className="mt-20 ">
            <Link className='m-20' to="/">Home</Link>
            <Link className='m-20'>Products</Link>
            <Link className='m-20'>Men's & Women's Clothing</Link>
            <Link className='m-20'>Electronics</Link>
            <Link className='m-20'>Jewelry</Link>
        </ul>
        <ul className='mt-20'>

            <Link className='m-24'>About Us</Link>
            <Link className='m-24'>Contact</Link>
        </ul>

        <h2 className='mt-20'>Get the newsest information on our social medias</h2>
    </div>
  )
}

export default Footer