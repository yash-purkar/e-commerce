import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='navbar'>
      <NavLink to="/"><h1>Shopping Cart</h1></NavLink>
      <input type="text" id='input-product' placeholder='Search an item' />

      <NavLink to="/cart">
        <BsFillCartFill id='cart-icon' />
      </NavLink>

    </nav>
  )
}
