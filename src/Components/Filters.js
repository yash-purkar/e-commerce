import { Ratings } from './Ratings'
import { CartState } from '../Contexts/Context';

export const Filters = () => {
  const { productState: { checkBoxes }, productState: { searchByStock, searchByFastDelievery, byRating }, productDispatch } = CartState()


  const handleRatingClick = (i) => productDispatch({ type: "SEARCH_BY_RATING", payload: i })
  return (
    <div className='filters'>
      <form action="" >
        <label htmlFor="">
          <input type="radio" name="sortByPrice" onChange={() => productDispatch({ type: "SORT_BY_PRICE", payload: "LowToHigh" })} />Low To High
        </label>

        <label htmlFor="">
          <input type="radio" name="sortByPrice" onChange={() => productDispatch({ type: "SORT_BY_PRICE", payload: "HighToLOw" })} />High To Low
        </label>

        <label htmlFor="">
          <input type="checkbox" onChange={() => productDispatch({ type: "SEARCH_BY_STOCK" })} checked={searchByStock} />Include Out Of Stock
        </label>
        <label htmlFor="">
          <input type="checkbox" onChange={() => productDispatch({ type: "SEARCH_BY_FAST_DELIEVERY" })} checked={searchByFastDelievery} />Fast Delivery Only
        </label>
        Ratings: <Ratings rating={byRating} handleRatingClick={handleRatingClick} />
      </form>
    </div>
  )
}
