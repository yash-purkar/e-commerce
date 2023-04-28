
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": return {
      ...state, cart: [...state.cart, { ...action.payload, qty: 1 }]
    }

    case "REMOVE_FROM_CART": return {
      ...state, cart: state.cart.filter(({ id }) => id !== action.payload.id)
    }

    case "CHANGE_QTY": return {
      ...state, cart: state.cart.map((item) => item.id === action.id ? { ...item, qty: action.payload } : item)
    }
    default: return state;
  }
}


export const productReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_BY_STOCK":
      return { ...state, searchWithOutOfStock: !state.searchWithOutOfStock }

    case "SEARCH_BY_FAST_DELIEVERY": return { ...state, searchByFastDelievery: !state.searchByFastDelievery }

    case "SORT_BY_PRICE": return { ...state, sort: action.payload }

    case "SEARCH_PRODUCT": return { ...state, searchValue: action.payload }

    case "SEARCH_BY_RATING": return { ...state, byRating: action.payload }

    default: return state
  }
}

