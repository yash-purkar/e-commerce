import React from 'react'
import { CartState } from '../Contexts/Context'
import { ProductCard } from '../Components/ProductCard';
import { Filters } from '../Components/Filters';
export const Home = () => {
  const { state: { products, inputValue } } = CartState();

  const filteredData = inputValue ? products.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase())) : products
  return (
    <>
      <div className='container'>
        <Filters />
        <div className='inner-container'>
          {
            filteredData?.map((product) => <div className='card'> <ProductCard product={product} key={product.id}
            /></div>)
          }
        </div>
      </div>
    </>
  )
}
