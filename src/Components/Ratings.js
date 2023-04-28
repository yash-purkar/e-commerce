import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export const Ratings = ({ rating, handleRatingClick }) => {
  return (
    <span>
      {
        [...Array(5)].map((_, i) => {
          return rating >= i + 1 ? <AiFillStar onClick={() => handleRatingClick(i + 1)} style={{ height: "13px" }} /> : <AiOutlineStar onClick={() => handleRatingClick(i + 1)} style={{ height: "13px" }} />
        })
      }
    </span>
  )
}
