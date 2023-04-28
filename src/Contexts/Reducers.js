
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": return {
      ...state, cart: [...state.cart, { ...action.payload, qty: 1 }]
    }

    case "REMOVE_FROM_CART": return {
      ...state, cart: state.cart.filter(({ id }) => id !== action.payload.id)
    }

    case "SEARCH_VALUE": return {
      ...state, inputValue: action.payload
    }

    case "CHANGE_QTY": return {
      ...state, cart: state.cart.map((item) => item.id === action.id ? { ...item, qty: action.payload } : item)
    }
    default: return state;
  }
}
