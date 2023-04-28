import React, { useState } from 'react'
import { Ratings } from './Ratings'

export const Filters = () => {
  const [rating, setRating] = useState(3);

  const handleRatingClick = (i) => setRating(i);
  return (
    <div className='filters'>
      <form action="" >
        <label htmlFor="">
          <input type="radio" name="sortByPrice" id="" />Low To High
        </label>
        <label htmlFor="">
          <input type="radio" name="sortByPrice" id="" />High To Low
        </label>
        <label htmlFor="">
          <input type="checkbox" id="" />Include Out Of Stock
        </label>
        <label htmlFor="">
          <input type="checkbox" id="" />Fast Delivery Only
        </label>
        Ratings: <Ratings rating={rating} handleRatingClick={handleRatingClick} />
      </form>
    </div>
  )
}
