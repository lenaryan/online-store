import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface IProduct {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products')
    return response.json();
})

export const productsSlice = createSlice({
  name: 'productsList',
  initialState: {
    products: {
        products: []
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
    })
  },
})

export default productsSlice.reducer