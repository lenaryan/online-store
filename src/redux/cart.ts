import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from './products'

export interface ICartProduct {
  count: number,
  item: IProduct
}
interface IProductsInCart {
  productsInCart: ICartProduct[]
}

const initialState: IProductsInCart = {
  productsInCart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      if (state.productsInCart.length) {
        const foundIndex = state.productsInCart.findIndex((prod) => prod.item.id === action.payload.id);
        if (foundIndex >= 0) {
          state.productsInCart[foundIndex].count += 1;
        } else {
          state.productsInCart.push({
            item: action.payload,
            count: 1
          })
        }
      } else {
        state.productsInCart.push({
          item: action.payload,
          count: 1
        })
      }
    },
    increaseProductCount: (state, action: PayloadAction<IProduct>) => {
      const foundIndex = state.productsInCart.findIndex((prod) => prod.item.id === action.payload.id);
      state.productsInCart[foundIndex].count += 1;
    },
    decreaseProductCount: (state, action: PayloadAction<IProduct>) => {
      const foundIndex = state.productsInCart.findIndex((prod) => prod.item.id === action.payload.id);
      if (state.productsInCart[foundIndex].count === 1) {
        cartSlice.caseReducers.removeProductFromCart(state, action);
      } else {
        state.productsInCart[foundIndex].count -= 1;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<IProduct>) => {
      state.productsInCart = state.productsInCart.filter((prod: ICartProduct) => prod.item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.productsInCart = [];
    }
  },
})

export const { addProductToCart, removeProductFromCart, clearCart, increaseProductCount, decreaseProductCount } = cartSlice.actions

export default cartSlice.reducer