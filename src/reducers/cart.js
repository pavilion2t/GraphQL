import { ADD_TO_CART, ADD_ONE, MINUS_ONE } from '../actions/types'

const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          listingId: action.listing.id,
          listing: action.listing,
          quantity: 1,
        }
      ]
    case ADD_ONE:
      const plus = state.find(d=>d.listingId===action.listingId)
      plus.quantity++
      return [...state]
    case MINUS_ONE:
      const minus = state.find(d => d.listingId === action.listingId)
      minus.quantity--
      return [...state]
    default:
      return state
  }
}

export default cart
