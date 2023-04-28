import React from 'react'
import { CartState } from '../Contexts/Context'
import { ProductCard } from '../Components/ProductCard';
import { Filters } from '../Components/Filters';
export const Home = () => {
  const { state: { products }, productState: { searchValue, sort, searchWithOutOfStock, searchByFastDelievery, byRating } } = CartState();

  const getFilteredData = () => {
    let filteredData = [...products];

    if (sort) {
      filteredData = filteredData.sort((a, b) => sort === "LowToHigh" ? a.price - b.price : b.price - a.price)
    }

    if (!searchWithOutOfStock) {
      filteredData = filteredData.filter(product => product.inStock)
    }

    if (searchByFastDelievery) {
      filteredData = filteredData.filter(product => product.fastDelivery)
    }

    if (searchValue) {
      filteredData = filteredData.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    if (byRating) {
      filteredData = filteredData.filter(({ ratings }) => ratings >= byRating)
    }
    return filteredData;
  }
  console.log(products)
  return (
    <>
      <div className='container'>
        <Filters />
        <div className='inner-container'>
          {
            getFilteredData()?.map((product) => <div className='card'> <ProductCard product={product} key={product.id}
            /></div>)
          }
        </div>
      </div>
    </>
  )
}
