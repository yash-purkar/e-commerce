import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../Contexts/Context'

export const Cart = () => {
  const { state: { cart }, dispatch } = CartState()
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    setTotalAmount(total)
  }, [cart]);
  // console.log(totalAmount)
  console.log(cart)
  return (
    <>
      <div className='cart-container'>
        {
          cart?.map((product) => <div className="cart-card">
            <img src={product.image} alt={product.name} className='product-img' />
            <p>{product.name}</p>
            <p>₹ {product.price}</p>
            <select name="" id="" className='quantity_box' onChange={(e) => dispatch({ type: "CHANGE_QTY", payload: e.target.value, id: product.id })}>
              {
                [...Array(5)].map((_, i) => {
                  return <option value={i + 1}>{i + 1}</option>
                })
              }
            </select>
            <p>{product.fastDelivery ? "Fast Delivery" : "4 Days Delivery"}</p>
            <AiFillDelete className='deleteIcon' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })} />
          </div>)
        }
        <div className='total-container'>
          <h2>Subtotal ({cart.length}) items</h2>
          <h3>Total: ₹ {totalAmount}</h3>
          {cart.length > 0 && <button className='order-btn'>Place Order</button>}
        </div>
      </div>
    </>
  )
}
