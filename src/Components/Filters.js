import React from 'react'

export const Filters = () => {
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
      </form>
    </div>
  )
}
