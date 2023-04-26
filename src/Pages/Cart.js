import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../Contexts/Context'

export const Cart = () => {
  const { state: { cart }, dispatch } = CartState()
  return (
    <div className='cart-container'>
      {
        cart?.map((product) => <div className="cart-card"><img src={product.image} alt={product.name} className='product-img' />
          <p>{product.name}</p>
          <p>₹ {product.price}</p>
          <p>{product.fastDelivery ? "Fast Delivery" : "4 Days Delivery"}</p>
          <AiFillDelete className='deleteIcon' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })} />
        </div>)
      }
    </div>
  )
}
