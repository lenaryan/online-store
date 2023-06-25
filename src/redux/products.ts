import { createSlice } from '@reduxjs/toolkit'

export interface ProductsState {
    products: Object
}

const initialState: ProductsState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.products = fetch('https://dummyjson.com/products')
      .then(res => res.json());
    },
  },
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer