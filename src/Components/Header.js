import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { CartState } from '../Contexts/Context'

export const Header = () => {
  const { state: { cart }, productDispatch } = CartState()

  return (
    <nav className='navbar'>
      <NavLink to="/" className="icon"><h1>QuickDeal</h1></NavLink>
      <input type="text" id='input-product' onChange={(e) => productDispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })} placeholder='Search an item' />

      <div className='cart-items'>
        <NavLink to="/cart" className="icon">
          <BsFillCartFill id='cart-icon' ></BsFillCartFill>
          <span className='cart-counter'>{cart.length}</span>
        </NavLink>
      </div>

    </nav>
  )
}
