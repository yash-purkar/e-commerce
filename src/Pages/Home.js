import React from 'react'
import { CartState } from '../Contexts/Context'
import { ProductCard } from '../Components/ProductCard';
import { Filters } from '../Components/Filters';
export const Home = () => {
  const { state: { products } } = CartState();
  // console.log(products)
  return (
    <>
      <div className='container'>
        <Filters />
        <div className='inner-container'>
          {
            products?.map((product) => <div className='card'> <ProductCard product={product} key={product.id}
            /></div>)
          }
        </div>
      </div>
    </>
  )
}
