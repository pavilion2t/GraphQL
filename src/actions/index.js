import * as Types from "./types"

export const addToCart = listing => ({
  type: Types.ADD_TO_CART,
  listing
})

export const addOne = listingId => ({
  type: Types.ADD_ONE,
  listingId
})

export const minusOne = listingId => ({
  type: Types.MINUS_ONE,
  listingId
})
