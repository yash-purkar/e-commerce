import React from 'react'
import { CartState } from '../Contexts/Context'
import { Ratings } from './Ratings';

export const ProductCard = ({ product }) => {

  const { state: { cart }, dispatch } = CartState()
  const { id, name, price, image, inStock, fastDelivery, ratings } = product;
  return (
    <>
      <img src={image} alt={name} className='product-img' />
      <p>{name}</p>
      <p>₹ {price}</p>
      <p>{fastDelivery ? "Fast Delivery" : "4 Days Delivery"}</p>
      <p >Ratings <span className='card-ratings'><Ratings rating={ratings[0]} /></span></p>

      {
        cart?.some(product => product.id === id) ? <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })} className='removeFromCart'>Remove From Cart</button> : <button className='addToCart' onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>Add To Cart</button>
      }
    </>
  )
}

//we didn't use every here bcz every item's id won't match with particular id so it'll always return false so we used some so at least one item's id should be match.
