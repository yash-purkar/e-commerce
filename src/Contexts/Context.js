import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';

import { CartReducer, productReducer } from './Reducers';
faker.seed(99)
const Cart = createContext();


const products = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.image(),
  inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
}))

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    products,
    cart: [],
  })



  const [productState, productDispatch] = useReducer(productReducer, {
    searchWithOutOfStock: false,
    searchByFastDelievery: false,
    sort: "",
    searchValue: "",
    byRating: 0

  })

  console.log(productState.searchValue)
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>
  )
}



export const CartState = () => {
  return useContext(Cart)
}

//we use [...Array(20)] bcz we want 20 datas