import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from './products'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: []
  },
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      state.productsInCart.push(action.payload)
    },
    removeProductFromCart: (state, action: PayloadAction<IProduct>) => {
        state.productsInCart = state.productsInCart.filter((item: IProduct) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
        state.productsInCart = [];
    }
  },
})

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer